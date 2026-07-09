import type { Media } from '@/payload-types'

export type PreferredMediaSize = 'thumbnail' | 'small' | 'medium' | 'large' | 'xlarge' | 'og'

export const getPreferredMediaSource = (
  media: Media | null | undefined,
  preferredSizes: PreferredMediaSize[] = [],
) => {
  if (!media) {
    return {
      url: null,
      width: undefined,
      height: undefined,
    }
  }

  for (const size of preferredSizes) {
    const variant = media.sizes?.[size]

    if (variant?.url) {
      return {
        url: variant.url,
        width: variant.width ?? media.width ?? undefined,
        height: variant.height ?? media.height ?? undefined,
      }
    }
  }

  return {
    url: media.url ?? null,
    width: media.width ?? undefined,
    height: media.height ?? undefined,
  }
}
