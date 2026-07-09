import { ContactFormClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { LadakhMoto, ContactFormBlock } from '@/payload-types'

export async function ContactForm(props: ContactFormBlock) {
  const ladakhMotoData: LadakhMoto = await getCachedGlobal('ladakhMoto', 1)()

  return <ContactFormClient {...props} ladakhMotoData={ladakhMotoData} />
}