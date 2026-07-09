import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'
import { getSiteURL } from '@/utilities/getURL'

const getBikeToursSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL = getSiteURL()

    const results = await payload.find({
      collection: 'bikingAdventures',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    const dateFallback = new Date().toISOString()

    const sitemap = results.docs
      ? results.docs
          .filter((post) => Boolean(post?.slug))
          .map((post) => ({
            loc: `${SITE_URL}/bike-tours/${post?.slug}`,
            lastmod: post.updatedAt || dateFallback,
          }))
      : []

    return sitemap
  },
  ['bike-tours-sitemap'],
  {
    tags: ['bike-tours-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getBikeToursSitemap()

  return getServerSideSitemap(sitemap)
}
