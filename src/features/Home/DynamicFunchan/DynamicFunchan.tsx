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
    <StyledFunchanTemplate
      fill={primaryColor || '094f6a'}
      stroke={secondaryColor || 'ffffff'}
    />
  )
}
