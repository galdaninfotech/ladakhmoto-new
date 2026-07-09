import { RidingGears } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { RidingGear as RidingGearType } from '@/payload-types';

async function RidingGearsComponent() {
  const ridingGearsData: RidingGearType = await getCachedGlobal('ridingGears', 1)()

  return <RidingGears ridingGearsData={ridingGearsData} />
}

export default RidingGearsComponent