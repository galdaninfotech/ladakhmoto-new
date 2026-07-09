 
 
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  mediaMap: Record<string, any>
}

export const ourCoreValues:(args:PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap
}) => {
  return {
    slug: 'our-core-values',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      slides: [
        {
          title: 'Our Core Values',
          subtitle: '',
          image: mediaMap['our-core-values-slide.webp'],
        },
      ],
      richText: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Our Core Values',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h1',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    layout: [
      {
        blockName: 'Content With Media',
        blockType: 'contentWithMedia',
        // media: topContentImage.id,
        mediaPosition: 'right',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                version: 1,
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'At Ladakh Moto, our core values are deeply rooted in our identity as a locally owned and operated company based in Leh, Ladakh. We prioritize authenticity, ensuring every tour reflects the rich culture and natural beauty of our homeland. With full accountability, we are committed to delivering exceptional service, maintaining safety, and building trust with every client. Sustainability is at the heart of what we do, as we strive to protect Ladakh\'s pristine environment and support the local community. At Ladakh Moto, we believe in creating unforgettable adventures while upholding the highest standards of integrity, professionalism, and respect for our land and its people.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
    ],
    meta: {
      description: 'Ladakh Moto’s core values — safety, authenticity, local expertise, rider satisfaction, and sustainable adventure principles guiding every biking tour.',
      image: mediaMap['our-core-values-slide.webp'],
      title: 'Our Core Values - Quality, Safety & Integrity | Ladakh Moto',
    },
    title: 'Our Core Values',
  }
}
