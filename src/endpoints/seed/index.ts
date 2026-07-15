import type { CollectionSlug, Payload, PayloadRequest } from 'payload'

import { seedMedia } from './media/seed-media'
import { seedBlogPosts } from './blog-posts/seed-blog-posts'
import { seedBikingAdventurePosts } from './biking-adventure-posts/seed-biking-adventure-posts'
import { seedUltimateAdventurePosts } from './ultimate-adventure-posts/seed-ultimate-adventure-posts'
import { seedHolidayPackagePosts } from './holiday-packages-posts/seed-holiday-package-posts'
import { seedHolidayPackageRedirects } from './holiday-packages-posts/seed-holiday-package-redirects'
import { seedDestinationPosts } from './destination-posts/seed-destination-posts'

import { seedPages } from './pages/seed-pages'
import { clearGlobals } from './globals/clear-globals'
import { seedGlobals } from './globals/seed-globals'
import { seedHighlightPosts } from './highlight-posts/seed-highlight-posts'
import { seedHotelPosts } from './hotels-posts/seed-hotel-posts'
import { seedCategories } from './categories/seed-categories'

const collectionsWithRelationships: CollectionSlug[] = [
  'pages',
  'posts',
  'redirects',
  'bikingAdventures',
  'holidayPackages',
  'destinations',
  'ultimateAdventures',
  'highlights',
  'hotels',
]
const collectionsWithoutRelationships: CollectionSlug[] = [
  'categories',
  'users',
  'media',
  'forms',
  'form-submissions',
  'search',
  // @ts-ignore
  'payload-mcp-api-keys',
]

// const globals: GlobalSlug[] = ['header', 'footer']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req, 
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // We need to clear the media directory before seeding
  // as well as the collections and globals
  // This is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(`— Clearing collections and globals...`)
  await clearGlobals({ payload, req })


  // Clear collections with relationships first
  for (const collection of collectionsWithRelationships) {
    if (payload.collections[collection]) {
      await payload.db.deleteMany({ collection, req, where: {} })
    }
  }

  // Then clear collections without relationships
  for (const collection of collectionsWithoutRelationships) {
    if (payload.collections[collection]) {
      await payload.db.deleteMany({ collection, req, where: {} })
    }
  }

  // Clear versions
  for (const collection of [...collectionsWithRelationships, ...collectionsWithoutRelationships]) {
    const config = payload.collections[collection]?.config
    if (config && Boolean(config.versions)) {
      await payload.db.deleteVersions({ collection, req, where: {} })
    }
  }

  payload.logger.info(`— Seeding demo author and user...`)
  await payload.delete({
    collection: 'users',
    depth: 0,
    where: { email: { equals: 'galdaninfotech@gmail.com', }, },
    context: req.context, // Pass context through
  })

  const { mediaMap, galleryImageDocs } = await seedMedia({ payload, req })

  const [demoAuthor] = await Promise.all([
    payload.create({
      collection: 'users',
      data: { name: 'Admin', email: 'galdaninfotech@gmail.com', password: 'admin', designation: 'Admin' },
      context: req.context, // Pass context through
    }),

    payload.create({
      collection: 'users',
      data: {
        name: 'Phunchok Rigzin',
        email: 'phunchok-rigzin@gmail.com',
        password: 'rigzin',
        designation: 'Tour Leader',
        avatar: mediaMap['phunchok-rigzin.webp'],
        bio: 'Phuntsog Rigzin is the Founder and Lead Tour Leader at Ladakhmoto, with over 12 years of experience leading motorcycle expeditions across Ladakh and the Himalayas. His deep local knowledge and passion for adventure help create safe, authentic, and unforgettable riding experiences.',
      },
      context: req.context, // Pass context through
    }),

    payload.create({
      collection: 'users',
      data: {
        name: 'Stanzin Paljor',
        email: 'stanzin-paljor@gmail.com',
        password: 'paljor',
        designation: 'Tour Leader',
        avatar: mediaMap['stanzin-paljor.webp'],
        bio: 'Stanzin Paljor is a Tour Leader and Marshal with over 10 years of experience guiding motorcycle tours across Ladakh and the Himalayas. His extensive route knowledge and calm leadership make him a trusted guide on every expedition.',
      },
      context: req.context, // Pass context through
    }),

    payload.create({
      collection: 'users',
      data: {
        name: 'Jigmet Namdol',
        email: 'jigmet-namdol@gmail.com',
        password: 'namdol',
        designation: 'Marshal',
        avatar: mediaMap['jigmet-namdol.webp'],
        bio: 'Namdol (Jimmy) is a Tour Leader and Marshal with over 7 years of experience leading motorcycle adventures in Ladakh. His riding expertise and commitment to rider safety help ensure smooth and enjoyable journeys.',
      },
      context: req.context, // Pass context through
    }),

    payload.create({
      collection: 'users',
      data: {
        name: 'Jigmet Rigzin',
        email: 'jigmet-rigzin@gmail.com',
        password: 'rigzin',
        designation: 'Operation',
        avatar: mediaMap['jigmet-rigzin.webp'],
        bio: 'Jigmet Rigzin is a key member of the Operations team, bringing over 6 years of experience in tour logistics and expedition support. His attention to detail helps ensure every tour runs efficiently behind the scenes.',
      },
      context: req.context, // Pass context through
    }),

    payload.create({
      collection: 'users',
      data: {
        name: 'Nubu Jr.',
        email: 'nubu-jr@gmail.com',
        password: 'nubu',
        designation: 'Marshal',
        avatar: mediaMap['nubu-jr.webp'],
        bio: 'Nubu Jr is a Marshal and Backup Support team member with over 5 years of experience assisting motorcycle expeditions across Ladakh. His dependable support helps keep riders comfortable, safe, and well-supported throughout the journey.',
      },
      context: req.context, // Pass context through
    }),

    payload.create({
      collection: 'users',
      data: {
        name: 'Begi',
        email: 'begi@gmail.com',
        password: 'begi',
        designation: 'Marshal',
        avatar: mediaMap['begi.webp'],
        bio: 'Begi is a Marshal and Mechanic with over 5 years of experience maintaining motorcycles on challenging Himalayan routes. His technical expertise helps keep every expedition running smoothly and safely.',
      },
      context: req.context, // Pass context through
    }),

    payload.create({
      collection: 'users',
      data: {
        name: 'Tsewang',
        email: 'tsewang@gmail.com',
        password: 'tsewang',
        designation: 'Operation',
        avatar: mediaMap['tsewang.webp'],
        bio: 'Tsewang is part of the Operations and Mechanical Support team, with over 4 years of experience in tour operations and motorcycle maintenance. His reliable support ensures every adventure is well-organised and worry-free.',
      },
      context: req.context, // Pass context through
    }),
  ])

  const { categoriesMap } = await seedCategories({ payload, req })

  const { highlightsMap } = await seedHighlightPosts({ payload, req, mediaMap, demoAuthor })
  const { hotelsMap } = await seedHotelPosts({ payload, req, mediaMap, demoAuthor })

  await seedBlogPosts({ payload, req, mediaMap, demoAuthor, })
  await seedBikingAdventurePosts({ payload, req, mediaMap, demoAuthor, highlightsMap, hotelsMap })
  await seedUltimateAdventurePosts({ payload, req, mediaMap, demoAuthor, highlightsMap, hotelsMap })
  await seedHolidayPackagePosts({ payload, req, mediaMap, demoAuthor, highlightsMap, hotelsMap })
  await seedHolidayPackageRedirects({ payload, req })
  await seedDestinationPosts({ payload, req, mediaMap, demoAuthor })

  await seedPages({ payload, req, mediaMap, galleryImageDocs })

  const waitForPages = async () => {
    let retries = 10
    while (retries > 0) {
      const homePage = await payload.find({
        collection: 'pages',
        where: { slug: { equals: 'home' } },
        depth: 0,
        limit: 1,
      })
      if (homePage.docs.length > 0) {
        return
      }
      retries--
      await new Promise((resolve) => setTimeout(resolve, 2000))
    }
    throw new Error('Home page not found after multiple retries.')
  }

  await waitForPages()
  

  await seedGlobals({ payload, req, mediaMap })

  
  payload.logger.info('Seeded database successfully!')
}
