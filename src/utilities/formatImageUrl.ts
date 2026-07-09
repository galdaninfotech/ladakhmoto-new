import { getSiteHostname } from './getURL'

export const formatImageUrl = (url: string | null | undefined): string => {
  if (!url) return ''

  if (!url.startsWith('http')) {
    return url
  }

  try {
    const parsedUrl = new URL(url)
    const serverHost = getSiteHostname()
    const isPayloadMediaPath = parsedUrl.pathname.startsWith('/api/media/file/')

    const internalHosts = new Set([
      serverHost,
      'localhost',
      '127.0.0.1',
    ])

    if (serverHost !== 'localhost' && !serverHost.startsWith('www.')) {
      internalHosts.add(`www.${serverHost}`)
    }

    // Payload media URLs should stay same-origin even if older records were
    // generated under a different hostname.
    if (isPayloadMediaPath) {
      return `${parsedUrl.pathname}${parsedUrl.search}`
    }

    // Normalize media served from our own app domains to relative paths so
    // Next does not treat them as remote images in production.
    if (internalHosts.has(parsedUrl.hostname)) {
      return `${parsedUrl.pathname}${parsedUrl.search}`
    }
  } catch {
    return url
  }

  // If it's another absolute URL (like a CDN), keep it as is.
  return url
}
