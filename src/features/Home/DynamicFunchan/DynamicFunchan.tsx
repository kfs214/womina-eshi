import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import FunchanTemplate from '@/assets/funchan-template.svg'

type Props = {
  content: string
  primaryColor: string
  secondaryColor: string
}

const StyledFunchanTemplate = styled(FunchanTemplate)<{
  fill: string
  stroke: string
}>(({ fill, stroke }) => ({
  path: { fill: `#${fill}`, stroke: `#${stroke}` },
}))

export function DynamicFunchan({
  content,
  primaryColor,
  secondaryColor,
}: Props) {
  return (
    <Box position="relative" width="100%" maxWidth="370px" height="320px">
      <Box position="absolute" width="100%" height="100%">
        <StyledFunchanTemplate
          width="100%"
          height="100%"
          fill={primaryColor || '094f6a'}
          stroke={secondaryColor || 'ffffff'}
        />
      </Box>
      <Typography
        width="100%"
        height="100%"
        position="relative"
        variant="h2"
        component="div"
        color={primaryColor}
        px={13}
        py={7}
        sx={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        {content}
      </Typography>
    </Box>
  )
}
