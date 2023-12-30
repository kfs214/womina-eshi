import MUIAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

import { aboutApp } from '@/const'

export function AppBar() {
  return (
    <MUIAppBar color="secondary" position="fixed" sx={{ zIndex: 2000 }}>
      <Toolbar>
        <Image src="/images/funchan.svg" width={32} height={32} alt="logo" />
        <Typography
          variant="h6"
          noWrap
          component="h1"
          ml={1}
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          {aboutApp.title}
        </Typography>
      </Toolbar>
    </MUIAppBar>
  )
}
