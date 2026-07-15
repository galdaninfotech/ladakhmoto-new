import { AdventureRides } from './src/blocks/AdventureRides/Component.client.js'
import { getCachedFeaturedAdventures } from './src/utilities/getFeaturedAdventures.js'

async function test() {
  try {
    console.log('Fetching adventures...')
    const featuredAdventures = await getCachedFeaturedAdventures()
    console.log('Executing AdventureRides render function...')
    const result = AdventureRides({ bikingAdventureData: featuredAdventures })
    console.log('Render executed successfully.')
  } catch (error) {
    console.error('Error:', error)
  }
  process.exit(0)
}

test()
