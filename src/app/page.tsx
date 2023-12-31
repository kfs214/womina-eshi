'use client'

import { useState } from 'react'

import Box from '@mui/material/Box'

import { DynamicFunchan, Input } from '@/features/Home'

export default function Home() {
  const [content, setContent] = useState('')
  const handleChangeContent = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setContent(e.target.value)
  }

  return (
    <Box display="grid" gap={2} sx={{ maxWidth: 480 }}>
      <Input value={content} onChange={handleChangeContent} />
      <DynamicFunchan content={content} />
    </Box>
  )
}
