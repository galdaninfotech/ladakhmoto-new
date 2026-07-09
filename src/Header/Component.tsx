import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { resolveUrl, type LinkField } from '@/utilities/resolveUrl'

import type { Header, LadakhMoto } from '@/payload-types'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()
  const ladakhMotoData: LadakhMoto = await getCachedGlobal('ladakhMoto', 1)()
  const payload = await getPayload({ config: configPromise })

  // Pre-resolve nav items on the server to prevent client-side fetch errors and 404s
  // Use Promise.all for better parallelization
  const preResolvedNavItems = headerData.navItems ? await Promise.all(
    headerData.navItems.map(async (navItem) => {
      const resolvedLinkPromise = resolveUrl(navItem.link as LinkField, payload)

      const subLinksPromise = navItem.subLinks && navItem.subLinks.length > 0
        ? Promise.all(
            navItem.subLinks.map(async (sub) => {
              const resolvedSubLinkPromise = resolveUrl(sub.link as LinkField, payload)

              const subSubLinksPromise = sub.subSubLinks && sub.subSubLinks.length > 0
                ? Promise.all(
                    sub.subSubLinks.map(async (subSub) => {
                      const resolvedSubSubLink = await resolveUrl(subSub.link as LinkField, payload)
                      return {
                        label: resolvedSubSubLink.label,
                        url: resolvedSubSubLink.url,
                        newTab: resolvedSubSubLink.newTab,
                        name: resolvedSubSubLink.label,
                        href: resolvedSubSubLink.url,
                      }
                    })
                  )
                : Promise.resolve(undefined)

              const [resolvedSubLink, subSubLinks] = await Promise.all([resolvedSubLinkPromise, subSubLinksPromise])

              return {
                label: resolvedSubLink.label,
                url: resolvedSubLink.url,
                newTab: resolvedSubLink.newTab,
                name: resolvedSubLink.label,
                href: resolvedSubLink.url,
                subSubmenu: subSubLinks,
              }
            })
          )
        : Promise.resolve(undefined)

      const [resolvedLink, subLinks] = await Promise.all([resolvedLinkPromise, subLinksPromise])

      return {
        label: resolvedLink.label,
        url: resolvedLink.url,
        newTab: resolvedLink.newTab,
        name: resolvedLink.label,
        href: resolvedLink.url,
        submenu: subLinks,
      }
    })
  ) : []

  return <HeaderClient data={headerData} ladakhMotoData={ladakhMotoData} preResolvedNavItems={preResolvedNavItems} />

}