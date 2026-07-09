import { formatImageUrl } from './formatImageUrl'

/**
 * Processes media resource URL to ensure proper formatting
 * @param url The original URL from the resource
 * @param cacheTag Optional cache tag to append to the URL
 * @returns Properly formatted URL with cache tag if provided
 */
export const getMediaUrl = (url: string | null | undefined, cacheTag?: string | null): string => {
  if (!url) return ''

  const appendCacheTag = (inputUrl: string, tag?: string | null): string => {
    if (!tag) return inputUrl
    const encodedTag = encodeURIComponent(tag)
    const separator = inputUrl.includes('?') ? '&' : '?'
    return `${inputUrl}${separator}v=${encodedTag}`
  }

  // Use formatImageUrl to ensure we use relative paths for our own server
  const formattedUrl = formatImageUrl(url)

  // If it's still an absolute URL, treat it as external and keep it unchanged.
  if (formattedUrl.startsWith('http://') || formattedUrl.startsWith('https://')) {
    return appendCacheTag(formattedUrl, cacheTag)
  }

  // Always keep local media URLs relative so SSR and client hydration match.
  return appendCacheTag(formattedUrl, cacheTag)
}
