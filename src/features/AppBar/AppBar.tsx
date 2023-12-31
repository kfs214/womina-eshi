import MUIAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import Funchan from '@/assets/funchan.svg'
import { aboutApp } from '@/const'

export function AppBar() {
  return (
    <MUIAppBar color="secondary" position="fixed" sx={{ zIndex: 2000 }}>
      <Toolbar>
        <Funchan width={32} height={32} />
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
