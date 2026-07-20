import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

async function getUltimateAdventures() {
  const payload = await getPayload({ config: configPromise })
  
  const ultimateAdventures = await payload.find({
    collection: 'ultimateAdventures',
    depth: 1,
    limit: 2,
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
      summary: true,
      highlights: true,
      categories: true,
    },
  })

  return ultimateAdventures.docs
}

/**
 * Returns a unstable_cache function for featured ultimate adventures
 */
export const getCachedUltimateAdventures = unstable_cache(
  async () => getUltimateAdventures(),
  ['featured-ultimate-adventures'],
  {
    tags: ['collection_ultimateAdventures'],
  },
)
