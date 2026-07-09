

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  mediaMap: Record<string, any>
}

export const internationalPackages: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap
}) => {
  return {
    slug: 'international-packages',
    publishedAt: "2026-06-19T10:22:34.983Z",
    generateSlug: false,
    updatedAt: "2026-06-19T10:23:23.923Z",
    createdAt: "2026-06-19T10:22:32.903Z",
    _status: "published",
    hero: {
      type: 'lowImpact',
      slides: [
        {
          title: 'International Packages',
          subtitle: '',
          image: mediaMap['international-packages-slide.webp'],
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
                  text: 'Disclaimer',
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
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                tag: 'h4',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'International Packages',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'The spirit of adventure knows no borders. At Ladakh Moto, we offer carefully curated International Packages for travelers seeking extraordinary experiences beyond the Himalayas. Whether you dream of exploring ancient cultures, iconic landmarks, scenic coastlines, vibrant cities, or breathtaking natural wonders, our international travel packages are designed to make your journey seamless, memorable, and rewarding.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: "From short international getaways to extended overseas adventures, we help travelers discover some of the world's most fascinating destinations with confidence and convenience.",
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h2',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Explore the World with Confidence',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Planning an international trip involves numerous details, from flights and accommodations to transportation, sightseeing, and travel documentation. Our experienced team assists in creating well-organized itineraries that allow you to focus on enjoying your journey while we take care of the planning.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Whether you are traveling solo, as a couple, with family, or in a group, we offer travel solutions tailored to your needs and preferences.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h2',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Popular International Destinations',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Our international packages may include a wide range of destinations across Asia, Europe, the Middle East, Africa, and beyond.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Popular choices include:',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'ul',
                type: 'list',
                start: 1,
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    type: 'listitem',
                    value: 1,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Thailand',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 2,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Vietnam',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 3,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Indonesia',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 4,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Singapore',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 5,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Malaysia',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 6,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Dubai and the UAE',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 7,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Turkey',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 8,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Nepal',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 9,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Bhutan',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 10,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Sri Lanka',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 11,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Maldives',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 12,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Europe',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 13,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Central Asia',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 14,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Africa',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 15,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Other international destinations upon request',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },
                ],
                listType: 'bullet',
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Each destination offers unique experiences, cultures, cuisines, and attractions waiting to be explored.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h2',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Types of International Packages',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                tag: 'h3',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Leisure Holidays',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: "Perfect for travelers looking to relax, explore, and create unforgettable memories in some of the world's most beautiful destinations.",
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h3',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Family Vacations',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Thoughtfully planned itineraries that combine comfort, sightseeing, entertainment, and activities suitable for all age groups.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h3',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Honeymoon Packages',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Romantic journeys designed for couples seeking memorable experiences in stunning international destinations.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h3',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Adventure Travel',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Explore mountains, coastlines, deserts, forests, and unique landscapes through carefully planned adventure experiences.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h3',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Cultural and Heritage Tours',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Discover history, architecture, traditions, and local lifestyles through immersive cultural experiences.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h3',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Group Tours',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Travel with friends, family, colleagues, or like-minded travelers while enjoying professionally managed itineraries and logistical support.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h3',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Customized Private Tours',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Enjoy the flexibility of a personalized itinerary designed around your interests, travel style, and schedule.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h2',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Comprehensive Travel Services',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Our international packages can be customized to include:',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'ul',
                type: 'list',
                start: 1,
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    type: 'listitem',
                    value: 1,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Accommodation arrangements',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 2,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Airport transfers',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 3,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Local transportation',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 4,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Guided sightseeing tours',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 5,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Travel itinerary planning',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 6,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Visa guidance and assistance',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 7,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Travel insurance recommendations',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 8,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Group travel coordination',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 9,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Tour support and assistance',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },
                ],
                listType: 'bullet',
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Package inclusions may vary depending on destination and travel requirements.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h2',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Why Choose Ladakh Moto?',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                tag: 'h3',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Personalized Travel Planning',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'We understand that every traveler has unique expectations. Our team works closely with you to create an itinerary that matches your interests, budget, and travel goals.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h3',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Trusted Travel Partners',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'We collaborate with reliable travel partners and service providers to ensure quality experiences and dependable service throughout your journey.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h3',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'End-to-End Support',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'From initial planning to your return home, we provide assistance and guidance to help make your international travel experience smooth and stress-free.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h3',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Flexible Travel Options',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: "Whether you're seeking luxury travel, family holidays, adventure experiences, or budget-friendly international tours, we can tailor a package that suits your needs.",
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h3',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Commitment to Quality',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Our focus is on delivering exceptional travel experiences through careful planning, transparent communication, and professional service.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h2',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Tailor-Made International Journeys',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Some travelers prefer ready-made itineraries, while others want complete flexibility. We offer customized international travel solutions designed specifically around your preferences.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Customize your journey with:',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'ul',
                type: 'list',
                start: 1,
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    type: 'listitem',
                    value: 1,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Preferred destinations',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 2,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Travel duration',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 3,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Accommodation category',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 4,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Sightseeing interests',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 5,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Adventure activities',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 6,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Private transportation',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },

                  {
                    type: 'listitem',
                    value: 7,
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Special celebrations and occasions',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },
                ],
                listType: 'bullet',
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Our goal is to create a travel experience that feels uniquely yours.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h2',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Travel Beyond Boundaries',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: "International travel opens the door to new cultures, perspectives, and experiences. Whether you're exploring bustling cities, relaxing on tropical beaches, discovering ancient civilizations, or embarking on exciting adventures, every journey creates memories that last a lifetime.",
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'With Ladakh Moto as your travel partner, you can explore the world with confidence, knowing that every detail has been carefully planned and professionally managed.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h2',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Start Your Global Adventure',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },

              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'The world is filled with extraordinary destinations waiting to be discovered. Let Ladakh Moto help you turn your travel dreams into reality through expertly crafted international packages that combine comfort, convenience, and unforgettable experiences.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
                textStyle: '',
                textFormat: 0,
              },

              {
                tag: 'h3',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Discover New Destinations. Experience New Cultures. Explore the World with Confidence.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },
            ],
            direction: null,
          },
        },
      },
    ],
    meta: {
      description: 'International Packages',
      image: mediaMap['international-packages-slide.webp'],
      title: 'International Packages - Ladakh Moto',
    },
    title: 'International Packages',
  }
}
