 
 
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  mediaMap: Record<string, any>
}

export const whyTravelWithUs:(args:PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap
}) => {
  return {
    slug: 'why-travel-with-us',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      slides: [
        {
          title: 'Why Travel With Us',
          subtitle: '',
          image: mediaMap['why-travel-with-us-slide.webp'],
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
                  text: 'Why Travel With Us',
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
        // media: mediaMap['why-us-content.webp'],
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
                    text: 'Ladakh Moto stands out as Leh\'s authentic local provider, delivering seamless motorbike adventures rooted in deep regional knowledge. Unlike outsiders, the team offers personalized routes through Khardung La, Nubra sands, and Pangong\'s turquoise shores, with road captains and mechanics ensuring every rider conquers high passes safely.',
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
                    text: 'Direct service means immediate support—no middlemen delays—covering backups, oxygen, and first aid for rugged terrains like Umling La or Manali-Leh-Srinagar. Stays in cozy camps or hotels like Mandalchan blend comfort with cultural immersion at monasteries such as Diskit and Thiksey.',
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
                    text: 'Traveling with Ladakh Moto supports sustainable tourism, fueling local enterprises while you forge unbreakable bonds amid lunar landscapes. Experience genuine Ladakhi hospitality, from butter tea welcomes to starry nights, creating memoirs that last a lifetime.',
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
      description: 'Discover why travelers choose Ladakh Moto — expert guides, personalized itineraries, local support, and unforgettable motorcycle adventures in Ladakh.',
      image: mediaMap['why-travel-with-us-slide.webp'],
      title: 'Why Travel With Ladakh Moto - Benefits & Unique Experiences',
    },
    title: 'Why Travel With Ladakh Moto',
  }
}
