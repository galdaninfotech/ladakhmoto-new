import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

async function getFeaturedAdventures() {
  const payload = await getPayload({ config: configPromise })
  
  const adventureRides = await payload.find({
    collection: 'bikingAdventures',
    depth: 1,
    limit: 6,
    overrideAccess: false,
    sort: 'order',
    where: {
      isFeatured: {
        equals: true,
      },
    },
    select: {
      slug: true,
      title: true,
      duration: true,
      distance: true,
      highestPeak: true,
      accommodation: true,
      meal: true,
      isFeatured: true,
      order: true,
      startEndCity: true,
      minCost: true,
      cutOutCost: true,
      heroImage: true,
      meta: true,
      description: true,
      categories: true,
    },
  })

  return adventureRides.docs
}

/**
 * Returns a unstable_cache function for featured biking adventures
 */
export const getCachedFeaturedAdventures = unstable_cache(
  async () => getFeaturedAdventures(),
  ['featured-bike-tours'],
  {
    tags: ['collection_bikingAdventures'],
  },
)
