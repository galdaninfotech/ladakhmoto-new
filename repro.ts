import configPromise from './src/payload.config.js'
import { getPayload } from 'payload'

async function test() {
  const payload = await getPayload({ config: configPromise })
  try {
    console.log('Testing payload.find for bikingAdventures with real slug and overrideAccess: true...')
    const result = await payload.find({
      collection: 'bikingAdventures',
      draft: false,
      limit: 1,
      overrideAccess: true,
      where: {
        slug: {
          equals: 'leh-ladakh-adventure',
        },
      },
      select: {
        slug: true,
      },
    })
    console.log('Result count:', result.docs.length)
    console.log('Result doc:', result.docs[0])
  } catch (error) {
    console.error('Error:', error)
  }
  process.exit(0)
}

test()
