/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const GridOverlay = process.env.NODE_ENV === 'development' ? dynamic(() => import('@/components/GridOverlay'), { ssr: false }) : () => null;
const BottomActions = dynamic(() => import('@/components/BottomActions').then(mod => mod.BottomActions), { ssr: false })

export const DeferredClientComponents: React.FC = () => {
  const [shouldLoadBottomActions, setShouldLoadBottomActions] = useState(false)
  const [adventures, setAdventures] = useState<any[]>([])

  useEffect(() => {
    // Delay loading BottomActions by 1 second
    const timer = setTimeout(async () => {
      try {
        const response = await fetch('/api/bikingAdventures?limit=50&select[id]=true&select[title]=true&select[dates]=true&select[cost]=true&where[_status][equals]=published')
        const data = await response.json()
        if (data.docs) {
          setAdventures(data.docs)
        }
      } catch (error) {
        console.error('Error fetching adventures:', error)
      }
      setShouldLoadBottomActions(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <GridOverlay />
      {shouldLoadBottomActions && <BottomActions docs={adventures} />}
    </>
  )
}
