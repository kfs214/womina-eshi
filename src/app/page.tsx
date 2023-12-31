'use client'

import Box from '@mui/material/Box'

import { DynamicFunchan, Input } from '@/features/Home'

import { useHomePage } from './useHomePage'

export default function Home() {
  const {
    content,
    primaryColor,
    secondaryColor,
    handleChangeContent,
    handleChangePrimaryColor,
    handleChangeSecondaryColor,
  } = useHomePage()

  return (
    <Box display="grid" gap={2} sx={{ maxWidth: 480 }}>
      <Input
        contentProps={{
          value: content,
          onChange: handleChangeContent,
        }}
        primaryColorProps={{
          value: primaryColor,
          onChange: handleChangePrimaryColor,
        }}
        secondaryColorProps={{
          value: secondaryColor,
          onChange: handleChangeSecondaryColor,
        }}
      />
      <DynamicFunchan
        content={content}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
    </Box>
  )
}
