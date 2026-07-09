
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const patharSahib: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Pathar Sahib',
    slug: 'pathar-sahib',
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
                text: 'A sacred stop on the road to Ladakh.',
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
                text: 'Gurudwara Pathar Sahib is a revered Sikh shrine located on the Leh–Kargil highway and is dedicated to Guru Nanak Dev Ji. According to local legend, a giant boulder bearing the imprint of Guru Nanak\'s body stands as a symbol of his divine powers. The peaceful atmosphere and spiritual significance make it an important pilgrimage site for visitors of all faiths.',
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
        image: mediaMap['pathar-sahib-gallery-image-1.webp'],
        caption: 'Pathar Sahib Gallery Image 1',
      },
      {
        image: mediaMap['pathar-sahib-gallery-image-2.webp'],
        caption: 'Pathar Sahib Gallery Image 2',
      },
      {
        image: mediaMap['pathar-sahib-gallery-image-3.webp'],
        caption: 'Pathar Sahib Gallery Image 3',
      },
      {
        image: mediaMap['pathar-sahib-gallery-image-4.webp'],
        caption: 'Pathar Sahib Gallery Image 4',
      },
      {
        image: mediaMap['pathar-sahib-gallery-image-5.webp'],
        caption: 'Pathar Sahib Gallery Image 5',
      },
      {
        image: mediaMap['pathar-sahib-gallery-image-6.webp'],
        caption: 'Pathar Sahib Gallery Image 6',
      },
      {
        image: mediaMap['pathar-sahib-gallery-image-7.webp'],
        caption: 'Pathar Sahib Gallery Image 7',
      },
      {
        image: mediaMap['pathar-sahib-gallery-image-8.webp'],
        caption: 'Pathar Sahib Gallery Image 8',
      },
      {
        image: mediaMap['pathar-sahib-gallery-image-9.webp'],
        caption: 'Pathar Sahib Gallery Image 9',
      },
      {
        image: mediaMap['pathar-sahib-gallery-image-10.webp'],
        caption: 'Pathar Sahib Gallery Image 10',
      },
    ],
  }
}
