import type { StaticImageData } from 'next/image'
import type { ElementType, Ref } from 'react'

import type { Media as MediaType } from '@/payload-types'
import type { PreferredMediaSize } from '@/utilities/getPreferredMediaSource'

export interface Props {
  alt?: string
  className?: string
  fill?: boolean // for NextImage only
  htmlElement?: ElementType | null
  pictureClassName?: string
  imgClassName?: string
  onClick?: () => void
  onLoad?: () => void
  loading?: 'lazy' | 'eager' // for NextImage only
  priority?: boolean // for NextImage only
  fetchPriority?: 'auto' | 'high' | 'low'
  quality?: number
  preferredSizes?: PreferredMediaSize[]
  ref?: Ref<HTMLImageElement | HTMLVideoElement | null>
  resource?: MediaType | string | number | null // for Payload media
  sizes?: string // for NextImage only
  src?: StaticImageData // for static media
  videoClassName?: string
}
