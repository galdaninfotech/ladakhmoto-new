import type { Metadata } from 'next'

import type { Media, Page, Post, BikingAdventure, HolidayPackage, Destination, Config } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getSiteURL } from './getURL'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getSiteURL()

  let url = serverUrl + '/website-template-OG.webp'

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image.sizes?.og?.url

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
  }

  return url
}

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post> | Partial<BikingAdventure>  | Partial<HolidayPackage> | Partial<Destination> | null,
  collection?: string
}): Promise<Metadata> => {
  const { doc, collection } = args

  const ogImage = getImageURL(doc?.meta?.image)

  const title = doc?.meta?.title
    ? doc?.meta?.title + ''
    : 'Ladakh Moto'

  // Construct path based on collection
  let path = ''
  if (doc?.slug) {
    if (doc.slug === 'home') {
      path = '/'
    } else {
      switch (collection) {
        case 'posts':
          path = `/posts/${doc.slug}`
          break
        case 'bikingAdventures':
          path = `/bike-tours/${doc.slug}`
          break
        case 'holidayPackages':
          path = `/holiday-packages/${doc.slug}`
          break
        case 'destinations':
          path = `/destinations/${doc.slug}`
          break
        default:
          path = `/${doc.slug}`
      }
    }
  }

  return {
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || '',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: path || '/',
    }),
    title,
    alternates: {
      canonical: path || '/',
    },
  }
}
