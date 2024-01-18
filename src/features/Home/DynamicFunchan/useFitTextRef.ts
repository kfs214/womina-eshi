import { useEffect, useRef } from 'react'

type Options = {
  initFontPx?: number
  minFontPx?: number
}

export function useFitTextRef<T extends HTMLElement>(
  innterText: string,
  options?: Options,
) {
  const textRef = useRef<T>(null)

  useEffect(() => {
    let fontPx = options?.initFontPx ?? 72
    const minFontPx = options?.minFontPx ?? 10

    if (!textRef.current) {
      return
    }

    textRef.current.removeAttribute('style')

    while (textRef.current.scrollWidth > textRef.current.clientWidth) {
      fontPx -= 1

      if (fontPx < minFontPx) {
        return
      }

      textRef.current.style.fontSize = `${fontPx}px`
    }
  }, [innterText, options?.initFontPx, options?.minFontPx])

  return textRef
}
