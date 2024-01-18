'use client'

import { createTheme } from '@mui/material/styles'
import { Potta_One } from 'next/font/google'

const pottaOne = Potta_One({ weight: '400', subsets: ['latin'] })

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#695bd4',
    },
    secondary: {
      main: '#f2f2b0',
    },
  },
  typography: {
    fontFamily: pottaOne.style.fontFamily,
  },
})

export default theme
