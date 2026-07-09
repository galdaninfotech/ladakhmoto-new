import type React from 'react'

import { getCachedRedirects } from '@/utilities/getRedirects'
import { notFound, redirect } from 'next/navigation'

interface Props {
  disableNotFound?: boolean
  url: string
}

/* This component helps us with SSR based dynamic redirects */
export const PayloadRedirects: React.FC<Props> = async ({ disableNotFound, url }) => {
  const redirects = await getCachedRedirects()()

  // Normalize URL by removing trailing slash if it exists (except for root '/')
  const normalizedUrl = url !== '/' && url.endsWith('/') ? url.slice(0, -1) : url

  const redirectItem = redirects.find((redirect) => {
    const from = redirect.from !== '/' && redirect.from.endsWith('/') ? redirect.from.slice(0, -1) : redirect.from
    return from === normalizedUrl
  })

  if (redirectItem) {
    if (redirectItem.to?.url) {
      redirect(redirectItem.to.url)
    }

    if (redirectItem.to?.type === 'reference' && redirectItem.to?.reference?.value) {
      const { relationTo, value } = redirectItem.to.reference
      let redirectUrl: string = ''

      if (typeof value === 'object' && value !== null && 'slug' in value) {
        const slug = value.slug
        if (slug) {
          let prefix = ''
          if (relationTo === 'pages') {
            prefix = ''
          } else if (relationTo === 'bikingAdventures') {
            prefix = '/bike-tours'
          } else if (relationTo === 'holidayPackages') {
            prefix = '/holiday-packages'
          } else {
            prefix = `/${relationTo}`
          }
          redirectUrl = `${prefix}/${slug}`
        }
      }

      if (redirectUrl) {
        redirect(redirectUrl)
      }
    }
  }

  if (disableNotFound) return null

  notFound()
}
