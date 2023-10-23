"use client"
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

const Provider = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>
      {children}
    </>
  }
  return (
    <ThemeProvider attribute='class' enableSystem={false}>
      {children}
    </ThemeProvider>
  )
}

export default Provider
