import { TourPolicies } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { TourPolicy as TourPolicyType } from '@/payload-types'

async function TourPoliciesComponent() {
  const tourPoliciesData: TourPolicyType = await getCachedGlobal('tourPolicies', 1)()

  return <TourPolicies tourPoliciesData={tourPoliciesData} />
}

export default TourPoliciesComponent
