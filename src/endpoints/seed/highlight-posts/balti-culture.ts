
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const baltiCulture: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Balti Culture',
    slug: 'balti-culture',
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
                text: 'A heritage preserved through generations.',
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
                text: 'Balti culture is a distinctive blend of Tibetan and Central Asian influences that has been preserved for centuries in the villages of the Baltistan region, including Turtuk. Visitors can experience its unique language, traditional architecture, warm hospitality, local cuisine, and customs, offering a fascinating glimpse into a rich cultural heritage unlike anywhere else in Ladakh.',
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
        image: mediaMap['balti-culture-gallery-image-1.webp'],
        caption: 'Balti Culture Gallery Image 1',
      },
      {
        image: mediaMap['balti-culture-gallery-image-2.webp'],
        caption: 'Balti Culture Gallery Image 2',
      },
      {
        image: mediaMap['balti-culture-gallery-image-3.webp'],
        caption: 'Balti Culture Gallery Image 3',
      },
      {
        image: mediaMap['balti-culture-gallery-image-4.webp'],
        caption: 'Balti Culture Gallery Image 4',
      },
      {
        image: mediaMap['balti-culture-gallery-image-5.webp'],
        caption: 'Balti Culture Gallery Image 5',
      },
      {
        image: mediaMap['balti-culture-gallery-image-6.webp'],
        caption: 'Balti Culture Gallery Image 6',
      },
      {
        image: mediaMap['balti-culture-gallery-image-7.webp'],
        caption: 'Balti Culture Gallery Image 7',
      },
      {
        image: mediaMap['balti-culture-gallery-image-8.webp'],
        caption: 'Balti Culture Gallery Image 8',
      },
      {
        image: mediaMap['balti-culture-gallery-image-9.webp'],
        caption: 'Balti Culture Gallery Image 9',
      },
      {
        image: mediaMap['balti-culture-gallery-image-10.webp'],
        caption: 'Balti Culture Gallery Image 10',
      },
    ],
  }
}
