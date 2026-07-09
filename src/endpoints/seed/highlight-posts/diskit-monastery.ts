
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const diskitMonatery: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Diskit Monastery',
    slug: 'diskit-monastery',
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
                text: 'Serenity overlooking Nubra Valley.',
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
                text: 'Diskit Monastery is the oldest and largest Buddhist monastery in Nubra Valley, dating back to the 14th century. Perched on a hilltop overlooking the valley, it is renowned for its impressive architecture, peaceful atmosphere, and the towering 32-meter Maitreya Buddha statue that symbolizes peace and harmony.',
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
        image: mediaMap['diskit-monastery-gallery-image-1.webp'],
        caption: 'Diskit Monastery Gallery Image 1',
      },
      {
        image: mediaMap['diskit-monastery-gallery-image-2.webp'],
        caption: 'Diskit Monastery Gallery Image 2',
      },
      {
        image: mediaMap['diskit-monastery-gallery-image-3.webp'],
        caption: 'Diskit Monastery Gallery Image 3',
      },
      {
        image: mediaMap['diskit-monastery-gallery-image-4.webp'],
        caption: 'Diskit Monastery Gallery Image 4',
      },
      {
        image: mediaMap['diskit-monastery-gallery-image-5.webp'],
        caption: 'Diskit Monastery Gallery Image 5',
      },
      {
        image: mediaMap['diskit-monastery-gallery-image-6.webp'],
        caption: 'Diskit Monastery Gallery Image 6',
      },
      {
        image: mediaMap['diskit-monastery-gallery-image-7.webp'],
        caption: 'Diskit Monastery Gallery Image 7',
      },
      {
        image: mediaMap['diskit-monastery-gallery-image-8.webp'],
        caption: 'Diskit Monastery Gallery Image 8',
      },
      {
        image: mediaMap['diskit-monastery-gallery-image-9.webp'],
        caption: 'Diskit Monastery Gallery Image 9',
      },
      {
        image: mediaMap['diskit-monastery-gallery-image-10.webp'],
        caption: 'Diskit Monastery Gallery Image 10',
      },
    ],
  }
}
