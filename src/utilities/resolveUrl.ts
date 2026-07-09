import type {
  Page,
  Post,
  BikingAdventure,
  HolidayPackage,
  Destination,
  UltimateAdventure,
} from '@/payload-types'
import { BasePayload } from 'payload'
import { cache } from 'react'

// Reusable type for a link field
export type LinkField = {
  type?: ('reference' | 'custom') | null
  newTab?: boolean | null
  reference?: {
    relationTo:
      | 'pages'
      | 'posts'
      | 'bikingAdventures'
      | 'holidayPackages'
      | 'destinations'
      | 'ultimateAdventures'
    value:
      | Page
      | Post
      | BikingAdventure
      | HolidayPackage
      | Destination
      | UltimateAdventure
      | string
      | number
  } | null
  url?: string | null
  label: string
}

// Reusable type for a resolved link
export type ResolvedLink = {
  label: string
  url: string
  newTab?: boolean | null
}

// Fetches the full document from the API or Payload instance
const fetchFullDoc = cache(
  async (
    doc:
      | Page
      | Post
      | BikingAdventure
      | HolidayPackage
      | Destination
      | UltimateAdventure
      | string
      | number,
    relationTo:
      | 'pages'
      | 'posts'
      | 'bikingAdventures'
      | 'holidayPackages'
      | 'destinations'
      | 'ultimateAdventures',
    payload?: BasePayload,
  ): Promise<
    Page | Post | BikingAdventure | HolidayPackage | Destination | UltimateAdventure | null
  > => {
    const id = typeof doc === 'object' && doc !== null && 'id' in doc ? doc.id : doc

    if (!id) return null

    if (payload) {
      try {
        return await payload.findByID({
          collection: relationTo,
          id,
          depth: 1,
        })
      } catch (error) {
        console.error(`Server-side fetch error for ${relationTo} with id ${id}:`, error)
        return null
      }
    }

    try {
      const response = await fetch(`/api/${relationTo}/${id}`)
      if (!response.ok) {
        throw new Error(`Failed to fetch doc from ${relationTo} with id ${id}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Fetch error:', error)
      return null
    }
  },
)

// Resolves the URL from a link field, fetching the full document if necessary
export const resolveUrl = cache(
  async (link: LinkField, payload?: BasePayload): Promise<ResolvedLink> => {
    if (!link) {
      return { label: 'Untitled', url: '#', newTab: false }
    }

    const { type, reference, url, label, newTab } = link

    if (type === 'custom' && url) {
      return { label: label || 'Untitled', url, newTab }
    }

    if (type === 'reference' && reference?.value) {
      const doc = reference.value
      const relationTo = reference.relationTo

      // Check if the doc is just a string/number ID or a partially populated object
      const isPartial =
        typeof doc === 'string' || typeof doc === 'number' || !('breadcrumbs' in doc)

      let fullDoc:
        | Page
        | Post
        | BikingAdventure
        | HolidayPackage
        | Destination
        | UltimateAdventure
        | null = null
      if (isPartial && relationTo === 'pages') {
        fullDoc = await fetchFullDoc(doc, relationTo, payload)
      }

      const docToUse = fullDoc || (typeof doc === 'object' ? doc : null)

      if (docToUse) {
        if ('slug' in docToUse) {
          let path = ''
          if (relationTo === 'posts') {
            path = `/posts/${docToUse.slug}`
          } else if (relationTo === 'bikingAdventures') {
            path = `/bike-tours/${docToUse.slug}`
          } else if (relationTo === 'holidayPackages') {
            path = `/holiday-packages/${docToUse.slug}`
          } else if (relationTo === 'destinations') {
            path = `/destinations/${docToUse.slug}`
          } else if (relationTo === 'ultimateAdventures') {
            path = `/ultimate-adventures/${docToUse.slug}`
          } else if (relationTo === 'pages') {
            if (
              'breadcrumbs' in docToUse &&
              Array.isArray(docToUse.breadcrumbs) &&
              docToUse.breadcrumbs.length > 0
            ) {
              const lastBreadcrumb = docToUse.breadcrumbs[docToUse.breadcrumbs.length - 1]
              path = lastBreadcrumb?.url || ''
            } else {
              path = docToUse.slug === 'home' ? '/' : `/${docToUse.slug}`
            }
          }
          return {
            label: label || ('title' in docToUse ? docToUse.title : 'Untitled'),
            url: path,
            newTab,
          }
        }
      }
    }

    return { label: label || 'Untitled', url: '#', newTab }
  },
)
