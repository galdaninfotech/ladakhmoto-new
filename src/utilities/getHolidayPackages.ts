import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

async function getFeaturedHolidayPackages() {
  const payload = await getPayload({ config: configPromise })
  
  const holidayPackages = await payload.find({
    collection: 'holidayPackages',
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
      description: true,
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
      overviewImage: true,
      meta: true,
    },
  })

  return holidayPackages.docs
}

/**
 * Returns a unstable_cache function for featured holiday packages
 */
export const getCachedFeaturedHolidayPackages = unstable_cache(
  async () => getFeaturedHolidayPackages(),
  ['featured-holiday-packages'],
  {
    tags: ['collection_holidayPackages'],
  },
)
