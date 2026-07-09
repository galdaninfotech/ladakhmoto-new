import { InclusionExclusionPackage } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { InclusionExclusionPackage as InclusionExclusionPackageType } from '@/payload-types';

async function InclusionExclusionPackageComponent() {
  const inclusionExclusionPackageData: InclusionExclusionPackageType = await getCachedGlobal('inclusionExclusionPackage', 1)()

  return <InclusionExclusionPackage inclusionExclusionPackageData={inclusionExclusionPackageData} />
}

export default InclusionExclusionPackageComponent