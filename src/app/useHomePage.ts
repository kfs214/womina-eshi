import { useState } from 'react'

export function useHomePage() {
  const [content, setContent] = useState('')
  const [primaryColor, setPrimaryColor] = useState('fff')
  const [secondaryColor, setSecondaryColor] = useState('212121')

  const handleChangeContent = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setContent(e.target.value)
  }

  const handleChangePrimaryColor = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPrimaryColor(e.target.value)
  }

  const handleChangeSecondaryColor = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSecondaryColor(e.target.value)
  }

  return {
    content,
    primaryColor,
    secondaryColor,
    handleChangeContent,
    handleChangePrimaryColor,
    handleChangeSecondaryColor,
  }
}
