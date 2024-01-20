import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import FunchanTemplate from '@/assets/funchan-template.svg'

import { useFitTextRef } from './useFitTextRef'
import { usePreview } from './usePreview'

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
  const { previewRef, base64url, handleShare } = usePreview<HTMLDivElement>(
    content,
    primaryColor,
    secondaryColor,
  )

  return (
    <Box display="grid" gap={2}>
      <Box>
        <Button onClick={handleShare} variant="outlined">
          Share
        </Button>
      </Box>

      <Box>
        <Box width="fit-content">
          <Card>
            <Box position="relative" width="320px" height="320px">
              <Box ref={previewRef} sx={{ height: '100%' }}>
                <Box position="absolute" height="100%">
                  <StyledFunchanTemplate
                    height="100%"
                    fill={primaryColor || '094f6a'}
                    stroke={secondaryColor || 'ffffff'}
                  />
                </Box>
                <Box
                  height="100%"
                  position="relative"
                  pr={10}
                  pl={12}
                  pt={4}
                  pb={3}
                >
                  <Typography
                    width="100%"
                    height="100%"
                    variant="h2"
                    component="div"
                    color={`#${secondaryColor}`}
                    ref={textRef}
                    sx={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                    }}
                    whiteSpace="pre"
                  >
                    {content}
                  </Typography>
                </Box>
              </Box>

              {base64url && (
                <Box position="absolute" top={0} height="100%">
                  {/* TODO ファイル名指定 */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    style={{ display: 'block', width: '100%', height: '100%' }}
                    src={base64url}
                    alt="preview"
                  />
                </Box>
              )}
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}
