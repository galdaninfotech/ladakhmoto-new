 
 
 
 
import type { Media } from '@/payload-types'
import { image1 } from './image-1'
import { image2 } from './image-2'
import { imageHero1 } from './image-hero-1'

export type MediaSeedConfig = {
  key: string
  filePath?: string
  url?: string
  customName?: string
  data: Omit<Media, 'createdAt' | 'id' | 'updatedAt'>
}

export const gearsImageData: Omit<Media, 'createdAt' | 'id' | 'updatedAt'> = {
  alt: 'Riding Gears',
  creditText: 'Ladakh Moto',
}

export const mediaSeedConfig: MediaSeedConfig[] = [
  {
    key: 'image1',
    url: 'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
    data: image1,
  },
  {
    key: 'image2',
    url: 'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
    data: image2,
  },
  {
    key: 'image3',
    url: 'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp',
    data: image2, // Using image2 as placeholder for image3
  },
  {
    key: 'imageHome',
    url: 'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-hero1.webp',
    data: imageHero1,
  },
  {
    key: 'ridingGears',
    filePath: 'public/images/riding-gears.webp',
    customName: 'riding-gears.webp',
    data: gearsImageData,
  },
]
