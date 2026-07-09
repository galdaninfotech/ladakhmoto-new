'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

export type BookingSource = 'sidebar' | 'bottom-bar' | null

interface BookingContextType {
  isSheetOpen: boolean
  setIsSheetOpen: (isOpen: boolean) => void
  source: BookingSource
  setSource: (source: BookingSource) => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [source, setSource] = useState<BookingSource>(null)

  const handleSetIsSheetOpen = (isOpen: boolean) => {
    setIsSheetOpen(isOpen)
    if (!isOpen) setSource(null) // Reset source when closing
  }

  return (
    <BookingContext.Provider value={{ isSheetOpen, setIsSheetOpen: handleSetIsSheetOpen, source, setSource }}>
      {children}
    </BookingContext.Provider>
  )
}

export const useBooking = () => {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}
