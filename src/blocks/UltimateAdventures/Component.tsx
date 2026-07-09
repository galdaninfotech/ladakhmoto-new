import React from 'react'
import { UltimateAdventures } from './Component.client'
import { getCachedUltimateAdventures } from '@/utilities/getUltimateAdventures'

async function UltimateAdventuresComponent({ title, subtitle }: { title?: string, subtitle?: string }) {
  const featuredAdventures = await getCachedUltimateAdventures()

  return <UltimateAdventures ultimateAdventureData={featuredAdventures} title={title} subtitle={subtitle} />
}

export default UltimateAdventuresComponent
