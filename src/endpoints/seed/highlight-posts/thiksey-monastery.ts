
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const thikseyMonastery: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Thiksey Monastery',
    slug: 'thiksey-monastery',
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
                text: 'The crown jewel of Ladakh\'s monasteries.',
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
                text: 'Thiksey Monastery is one of the most beautiful and prominent Buddhist monasteries in Ladakh, perched atop a hill overlooking the Indus Valley. Known for its striking resemblance to the Potala Palace in Lhasa, the monastery houses numerous Buddhist artifacts, prayer halls, and a magnificent 15-meter-tall statue of Maitreya Buddha, making it a must-visit cultural and spiritual landmark.',
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
        image: mediaMap['thiksey-gallery-image-1.webp'],
        caption: 'Thiksey Gallery Image 1',
      },
      {
        image: mediaMap['thiksey-gallery-image-2.webp'],
        caption: 'Thiksey Gallery Image 2',
      },
      {
        image: mediaMap['thiksey-gallery-image-3.webp'],
        caption: 'Thiksey Gallery Image 3',
      },
      {
        image: mediaMap['thiksey-gallery-image-4.webp'],
        caption: 'Thiksey Gallery Image 4',
      },
      {
        image: mediaMap['thiksey-gallery-image-5.webp'],
        caption: 'Thiksey Gallery Image 5',
      },
      {
        image: mediaMap['thiksey-gallery-image-6.webp'],
        caption: 'Thiksey Gallery Image 6',
      },
      {
        image: mediaMap['thiksey-gallery-image-7.webp'],
        caption: 'Thiksey Gallery Image 7',
      },
      {
        image: mediaMap['thiksey-gallery-image-8.webp'],
        caption: 'Thiksey Gallery Image 8',
      },
      {
        image: mediaMap['thiksey-gallery-image-9.webp'],
        caption: 'Thiksey Gallery Image 9',
      },
      {
        image: mediaMap['thiksey-gallery-image-10.webp'],
        caption: 'Thiksey Gallery Image 10',
      },
    ],
  }
}
