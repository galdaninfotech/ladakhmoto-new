const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ladakhmoto.com'
const normalizedSiteUrl = /^https?:\/\//i.test(SITE_URL) ? SITE_URL : `https://${SITE_URL}`

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: normalizedSiteUrl,
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  sitemapSize: 50000,
  exclude: [],
  additionalPaths: async (config) => [
    await config.transform(config, '/posts-sitemap.xml'),
    await config.transform(config, '/pages-sitemap.xml'),
    await config.transform(config, '/ultimate-adventures-sitemap.xml'),
    await config.transform(config, '/bike-tours-sitemap.xml'),
    await config.transform(config, '/holiday-packages-sitemap.xml'),
    await config.transform(config, '/destinations-sitemap.xml'),
    await config.transform(config, '/highlights-sitemap.xml'),
  ],
}
