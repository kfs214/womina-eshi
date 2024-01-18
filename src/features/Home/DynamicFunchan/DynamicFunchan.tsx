import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import FunchanTemplate from '@/assets/funchan-template.svg'

import { useFitTextRef } from './useFitTextRef'

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
  const textRef = useFitTextRef<HTMLDivElement>(content)

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
      <Box
        width="100%"
        height="100%"
        position="relative"
        pr="104px"
        pl="110px"
        py={5}
      >
        <Typography
          width="100%"
          variant="h2"
          component="div"
          color={`#${secondaryColor}`}
          ref={textRef}
          sx={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          whiteSpace="pre-wrap"
        >
          {content}
        </Typography>
      </Box>
    </Box>
  )
}
