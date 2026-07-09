
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const keylong: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Keylong',
    slug: 'keylong',
    _status: 'published',
    intro: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'The gateway to the enchanting Lahaul Valley.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Keylong is the administrative headquarters of the Lahaul Valley and a charming Himalayan town surrounded by towering snow-capped mountains. Known for its serene atmosphere, Buddhist monasteries, and breathtaking views, Keylong serves as an important stopover for travelers journeying between Manali and Leh.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    gallery: [
      {
        image: mediaMap['keylong-gallery-image-1.webp'],
        caption: 'Keylong Gallery Image 1',
      },
      {
        image: mediaMap['keylong-gallery-image-2.webp'],
        caption: 'Keylong Gallery Image 2',
      },
      {
        image: mediaMap['keylong-gallery-image-3.webp'],
        caption: 'Keylong Gallery Image 3',
      },
      {
        image: mediaMap['keylong-gallery-image-4.webp'],
        caption: 'Keylong Gallery Image 4',
      },
      {
        image: mediaMap['keylong-gallery-image-5.webp'],
        caption: 'Keylong Gallery Image 5',
      },
      {
        image: mediaMap['keylong-gallery-image-6.webp'],
        caption: 'Keylong Gallery Image 6',
      },
      {
        image: mediaMap['keylong-gallery-image-7.webp'],
        caption: 'Keylong Gallery Image 7',
      },
      {
        image: mediaMap['keylong-gallery-image-8.webp'],
        caption: 'Keylong Gallery Image 8',
      },
      {
        image: mediaMap['keylong-gallery-image-9.webp'],
        caption: 'Keylong Gallery Image 9',
      },
      {
        image: mediaMap['keylong-gallery-image-10.webp'],
        caption: 'Keylong Gallery Image 10',
      },
    ],
  }
}
