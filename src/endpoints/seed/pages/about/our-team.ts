 
 
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  mediaMap: Record<string, any>
}

export const ourTeam: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap
}) => {
  return {
    slug: 'our-team',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      slides: [
        {
          title: 'Our Team',
          subtitle: 'The experts behind your Himalayan adventure.',
          image: mediaMap['our-team-slide.webp'],
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
                  text: 'Our Team',
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
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Our team of local experts',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                tag: 'h2',
                version: 1,
              },
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
                    text: 'The team of local tour coordinators, bike marshals, mechanics, and support staff at Ladakh Moto has never let us down with their exceptional skill and knowledge of the region during our motorbiking tours. Because they are from Ladakh, these professionals place a high importance on providing you with a secure and genuine experience in the breathtaking and rugged terrain of the region.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
              },

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
                    text: 'Our dedicated team at Ladakh Moto ensures that every motorbiking tour through Ladakh is a seamless and unforgettable adventure. With expert guides, skilled mechanics, and a passion for the region, they handle every detail—from route planning to safety—so riders can focus on the thrill of the journey. Beyond adventure, the team is deeply committed to preserving Ladakh\'s pristine beauty, following eco-friendly practices, and promoting responsible tourism. Whether navigating high-altitude passes or ensuring minimal environmental impact, Ladakh Moto blends excitement with sustainability for a truly enriching experience backed by an efficient local team.',
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
      description: 'Meet our passionate team — experienced riders, local guides, and adventure experts dedicated to delivering safe, unforgettable bike tours in Ladakh.',
      image: mediaMap['our-team-slide.webp'],
      title: 'Our Team - Expert Guides & Riders in Ladakh | Ladakh Moto',
    },
    title: 'Our Team',
  }
}
