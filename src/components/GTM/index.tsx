'use client'

import React, { useEffect, useState } from 'react'
import { GoogleTagManager as NextGTM } from '@next/third-parties/google'

export const DeferredGTM: React.FC<{ gtmId: string }> = ({ gtmId }) => {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const handleInteraction = () => {
      setShouldLoad(true)
      removeEventListeners()
    }

    const removeEventListeners = () => {
      window.removeEventListener('mousemove', handleInteraction)
      window.removeEventListener('scroll', handleInteraction)
      window.removeEventListener('touchstart', handleInteraction)
      window.removeEventListener('keydown', handleInteraction)
    }

    window.addEventListener('mousemove', handleInteraction, { passive: true })
    window.addEventListener('scroll', handleInteraction, { passive: true })
    window.addEventListener('touchstart', handleInteraction, { passive: true })
    window.addEventListener('keydown', handleInteraction, { passive: true })

    return () => {
      removeEventListeners()
    }
  }, [])

  if (!shouldLoad) return null

  return <NextGTM gtmId={gtmId} />
}
