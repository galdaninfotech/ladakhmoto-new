import React from 'react'
import { AdventureRides } from './Component.client'
import { getCachedFeaturedAdventures } from '@/utilities/getFeaturedAdventures'

async function AdventureRidesComponent() {
  const featuredAdventures = await getCachedFeaturedAdventures()

  return <AdventureRides bikingAdventureData={featuredAdventures} />
}

export default AdventureRidesComponent