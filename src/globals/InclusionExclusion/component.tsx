import { InclusionExclusion } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { InclusionExclusion as InclusionExclusionType } from '@/payload-types';

async function InclusionExclusionComponent() {
  const inclusionExclusionData: InclusionExclusionType = await getCachedGlobal('inclusionExclusion', 1)()

  return <InclusionExclusion inclusionExclusionData={inclusionExclusionData} />
}

export default InclusionExclusionComponent