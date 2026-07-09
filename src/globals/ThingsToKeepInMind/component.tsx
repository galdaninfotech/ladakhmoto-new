import { ThingsToKeepInMind } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { ThingsToKeepInMind as ThingsToKeepInMindType } from '@/payload-types';

async function ThingsToKeepInMindComponent() {
  const thingsToKeepInMindData: ThingsToKeepInMindType = await getCachedGlobal('thingsToKeepInMind', 1)()

  return <ThingsToKeepInMind thingsToKeepInMindData={thingsToKeepInMindData} />
}

export default ThingsToKeepInMindComponent