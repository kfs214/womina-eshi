'use client'

import { createTheme } from '@mui/material/styles'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f2f2b0',
    },
    secondary: {
      main: '#b0b0f2',
    },
  },
  typography: {
    // TODO フォント指定
    fontFamily: roboto.style.fontFamily,
  },
})

export default theme
