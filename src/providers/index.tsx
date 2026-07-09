'use client'

import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { BookingProvider } from './BookingContext'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>
        <BookingProvider>
          {children}
        </BookingProvider>
      </HeaderThemeProvider>
    </ThemeProvider>
  )
}