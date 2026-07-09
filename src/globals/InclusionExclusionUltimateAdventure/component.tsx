import { InclusionExclusionUltimateAdventure } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { InclusionExclusionUltimateAdventure as InclusionExclusionUltimateAdventureType } from '@/payload-types';

async function InclusionExclusionUltimateAdventureComponent() {
  const inclusionExclusionUltimateAdventureData: InclusionExclusionUltimateAdventureType = await getCachedGlobal('inclusionExclusionUltimateAdventure', 1)()

  return <InclusionExclusionUltimateAdventure inclusionExclusionUltimateAdventureData={inclusionExclusionUltimateAdventureData} />
}

export default InclusionExclusionUltimateAdventureComponent