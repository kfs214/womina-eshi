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

export function usePreview<T extends HTMLElement>(
  content: string,
  primaryColor: string,
  secondaryColor: string,
) {
  const previewRef = useRef<T>(null)
  const [base64url, setBase64url] = useState('')

  const handleShare = useCallback(() => {
    if (!content) return

    const title = content
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[A-Z]/g, (letter) => letter.toLowerCase())

    const imageOptions = {
      share: {
        title,
        text: 'フンちゃんスタンプをシェアしよう！',
      },
      fileName: `${title}.png`,
    }

    // TODO canShare 返して、シェア可能な場合でもダウンロード有効にする
    // TODO 背景透過したい
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

  // The image rendering issue in Safari was addressed by implementing a workaround found at:
  // https://github.com/bubkoo/html-to-image/issues/361#issuecomment-1402537176
  useEffect(() => {
    ;(async () => {
      if (!previewRef.current) return

      // Invoking `toPng` multiple times for potential stability in Safari rendering
      await toPng(previewRef.current, { cacheBust: true })
      await toPng(previewRef.current, { cacheBust: true })

      // TODO 縦横比率を選択可能に
      toPng(previewRef.current, {
        cacheBust: true,
        // canvasHeight: 74,
        // canvasWidth: 96,
        // canvasHeight: 240,
        // canvasWidth: 240,
        pixelRatio: 1,
      })
        .then((dataUrl) => {
          setBase64url(dataUrl)
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    })().catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error)
    })
  }, [content, primaryColor, secondaryColor])

  return { previewRef, base64url, handleShare }
}
