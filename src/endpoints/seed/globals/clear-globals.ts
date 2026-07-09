 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Payload, PayloadRequest } from 'payload'
import type { GlobalSlug } from 'payload'

  export const clearGlobals = async ({
    payload,
    req,
  }: {
    payload: Payload
    req: PayloadRequest
  }) => {
  const globals: GlobalSlug[] = ['ladakhMoto']
  await Promise.all(
    globals.map((global) =>
      payload.updateGlobal({
        slug: global,
        // Using 'any' here as the clearing data doesn't need to match the full schema
        data: { name: "", slogan: null, contactPerson: null, designation: null, phone1: null, phone2: null, email1: null, email2: null, addressline1: null, addressline2: null, website: null, facebook: null, twitter: null, instagram: null, youtube: null, linkedin: null, whatsapp: null, } as any,
      })
    ),
  )

  await payload.updateGlobal({
    slug: 'header',
    data: {
      navItems: [],
    },
    depth: 0,
    context: req.context, // Pass context through
  })

  await payload.updateGlobal({
    slug: 'footer',
    data: {
      about: {
        title: null,
        description: null,
      },
      quickLinks: [],
      adventureRides: [],
      destinations: [],
    },
    depth: 0,
    context: req.context, // Pass context through
  })


  await payload.updateGlobal({
    slug: 'sidebarTop',
    data: {
      title: null,
      subtitle: null,
      links: [],
    },
    depth: 0,
    context: req.context, // Pass context through
  })
  await payload.updateGlobal({
    slug: 'sidebarBottom',
    data: {
      title: null,
      description: null,
      navItems: [],
    },
    depth: 0,
    context: req.context, // Pass context through
  })

}
