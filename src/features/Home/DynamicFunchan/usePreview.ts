import { useCallback, useEffect, useRef, useState } from 'react'

import { toPng } from 'html-to-image'

type ImageOptions = {
  share: {
    title: string
    text: string
  }
  fileName: string
}

function base64toFile(base64url: string, options: ImageOptions) {
  return fetch(base64url)
    .then((res) => res.blob())
    .then((blob) => new File([blob], options.fileName, { type: blob.type }))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error)
    })
}

function saveImage(dataUrl: string, options: ImageOptions) {
  const link = document.createElement('a')
  link.download = options.fileName
  link.href = dataUrl
  link.click()
}

export function usePreview<T extends HTMLElement>(content: string) {
  const previewRef = useRef<T>(null)
  const [base64url, setBase64url] = useState('')

  const handleShare = useCallback(() => {
    const title = content
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace(/[A-Z]/g, (letter) => letter.toLowerCase())

    const imageOptions = {
      share: {
        title,
        text: 'フンちゃんスタンプをシェアしよう！',
      },
      fileName: `${title}.png`,
    }

    // TODO canShare 返して、シェア可能な場合でもダウンロード有効にする
    // TODO Safariのプレビュー最新じゃない問題
    base64toFile(base64url, imageOptions)
      .then((file) => {
        if (
          file &&
          navigator.canShare &&
          navigator.canShare({ files: [file] })
        ) {
          navigator
            .share({
              ...imageOptions.share,
              files: [file],
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.log(error)
            })
        } else {
          saveImage(base64url, imageOptions)
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }, [base64url, content])

  useEffect(() => {
    if (!previewRef.current) return

    toPng(previewRef.current, { cacheBust: true })
      .then((dataUrl) => {
        setBase64url(dataUrl)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }, [content])

  return { previewRef, base64url, handleShare }
}
