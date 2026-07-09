import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

async function getAdventures() {
  const payload = await getPayload({ config: configPromise })
  console.log('Fetching adventures (uncached)...')
  try {
    const bikingAdventures = await payload.find({
      collection: 'bikingAdventures',
      draft: false,
      limit: 1000,
      overrideAccess: true,
      pagination: false,
      select: {
        id: true,
        title: true,
        dates: true,
        cost: true,
      },
    })
    console.log('Found adventures:', bikingAdventures.docs?.length)
    return bikingAdventures.docs
  } catch (error) {
    console.error('Error in getAdventures:', error)
    return []
  }
}

/**
 * Returns a function that fetches biking adventures
 */
export const getCachedAdventures = unstable_cache(
  async () => getAdventures(),
  ['biking-adventures'],
  {
    tags: ['collection_bikingAdventures'],
  }
)
