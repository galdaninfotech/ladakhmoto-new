
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const changthangPlateau: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Changthang Plateau',
    slug: 'changthang-plateau',
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
                text: 'Endless horizons at the top of the world.',
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
                text: 'The Changthang Plateau is a vast high-altitude region stretching across eastern Ladakh, renowned for its dramatic landscapes, crystal-clear lakes, and endless open plains. Home to nomadic Changpa herders and unique wildlife such as the Tibetan wild ass and black-necked crane, it offers one of the most remote and breathtaking experiences in the Himalayas.',
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
        image: mediaMap['changthang-plateau-gallery-image-1.webp'],
        caption: 'Cahngthang Plateau Galley Image 1',
      },
      {
        image: mediaMap['changthang-plateau-gallery-image-2.webp'],
        caption: 'Cahngthang Plateau Galley Image 2',
      },
      {
        image: mediaMap['changthang-plateau-gallery-image-3.webp'],
        caption: 'Cahngthang Plateau Galley Image 3',
      },
      {
        image: mediaMap['changthang-plateau-gallery-image-4.webp'],
        caption: 'Cahngthang Plateau Galley Image 4',
      },
      {
        image: mediaMap['changthang-plateau-gallery-image-5.webp'],
        caption: 'Cahngthang Plateau Galley Image 5',
      },
      {
        image: mediaMap['changthang-plateau-gallery-image-6.webp'],
        caption: 'Cahngthang Plateau Galley Image 6',
      },
      {
        image: mediaMap['changthang-plateau-gallery-image-7.webp'],
        caption: 'Cahngthang Plateau Galley Image 7',
      },
      {
        image: mediaMap['changthang-plateau-gallery-image-8.webp'],
        caption: 'Cahngthang Plateau Galley Image 8',
      },
      {
        image: mediaMap['changthang-plateau-gallery-image-9.webp'],
        caption: 'Cahngthang Plateau Galley Image 9',
      },
      {
        image: mediaMap['changthang-plateau-gallery-image-10.webp'],
        caption: 'Cahngthang Plateau Galley Image 10',
      },
    ],
  }
}
