

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  mediaMap: Record<string, any>
}

export const newsletter: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap
}) => {
  return {
    slug: 'newsletter',
    publishedAt: "2026-06-19T11:29:34.471Z",
    generateSlug: false,
    updatedAt: "2026-06-19T11:29:55.694Z",
    createdAt: "2026-06-19T11:29:30.552Z",
    _status: "published",
    hero: {
      type: 'lowImpact',
      slides: [
        {
          title: 'Newsletter',
          subtitle: '',
          image: mediaMap['newsletter-slide.webp'],
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
                  text: 'DisclNewsletteraimer',
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
                    text: 'Newsletter',
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
                    text: 'Stay connected with Ladakh Moto and be the first to discover exciting travel opportunities, exclusive offers, new tour launches, travel inspiration, and the latest updates from the Himalayas.',
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
                    text: "Our newsletter is designed for travelers, adventure enthusiasts, motorcycle riders, nature lovers, and anyone passionate about exploring extraordinary destinations. Whether you're planning your next Himalayan journey or simply looking for travel inspiration, our newsletter delivers valuable insights directly to your inbox.",
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
                    text: 'Why Subscribe?',
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
                    text: "When you join the Ladakh Moto community, you'll gain access to travel information, updates, and opportunities that help you make the most of your future adventures.",
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
                    text: 'Subscribers may receive:',
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
                    text: 'Exclusive Travel Offers',
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
                    text: 'Be among the first to learn about special promotions, seasonal deals, early-bird discounts, and limited-time travel opportunities.',
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
                    text: 'New Tour Announcements',
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
                    text: 'Get updates on newly launched motorcycle tours, holiday packages, adventure expeditions, premium experiences, and international travel programs.',
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
                    text: 'Travel Inspiration',
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
                    text: 'Explore destination highlights, travel stories, scenic routes, cultural experiences, and hidden gems from Ladakh and beyond.',
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
                    text: 'Seasonal Travel Updates',
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
                    text: 'Stay informed about the best times to visit, weather conditions, road accessibility, travel advisories, and destination-specific recommendations.',
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
                    text: 'Adventure and Riding Insights',
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
                    text: 'Receive useful information for motorcycle enthusiasts, including route suggestions, riding tips, preparation guides, and adventure travel recommendations.',
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
                    text: 'Local Culture and Experiences',
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
                    text: 'Learn about Himalayan traditions, festivals, monasteries, local communities, and unique cultural experiences that make the region truly special.',
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
                    text: 'What You Can Expect',
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
                    text: 'Our newsletters are created to provide meaningful and relevant information rather than unnecessary promotional messages.',
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
                    text: 'We focus on sharing:',
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
                        text: 'Travel inspiration',
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
                        text: 'Destination updates',
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
                        text: 'Tour announcements',
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
                        text: 'Adventure opportunities',
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
                        text: 'Seasonal recommendations',
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
                        text: 'Company news',
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
                        text: 'Special offers and promotions',
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
                        text: 'Responsible travel insights',
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
                    text: 'Our goal is to help travelers stay informed, inspired, and prepared for their next journey.',
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
                    text: 'Join a Community of Travelers',
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
                    text: 'Thousands of travelers dream of exploring the Himalayas, and many have already experienced unforgettable journeys with Ladakh Moto. By subscribing to our newsletter, you become part of a growing community of adventurers who share a passion for exploration, culture, and discovery.',
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
                    text: "Whether you're a first-time visitor or a returning traveler, our updates help keep the spirit of adventure alive between journeys.",
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
                    text: 'Privacy and Respect',
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
                    text: 'We respect your privacy and value your trust.',
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
                    text: 'When you subscribe to our newsletter:',
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
                        text: 'Your information is handled responsibly',
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
                        text: 'We do not sell your personal information to third parties',
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
                        text: 'We use your details only for relevant communications and updates',
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
                        text: 'You can unsubscribe at any time through the links provided in our emails',
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
                    text: 'For more information about how we collect, use, and protect personal information, please refer to our Privacy Policy.',
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
                    text: 'Never Miss an Adventure',
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
                    text: 'The Himalayas are constantly changing with new seasons, experiences, routes, and opportunities waiting to be explored. Our newsletter helps ensure that you stay informed about everything happening at Ladakh Moto and across the destinations we serve.',
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
                    text: "Whether you're planning your next motorcycle expedition, family vacation, cultural tour, or international adventure, we'll help keep you inspired and informed every step of the way.",
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
                    text: 'Subscribe Today',
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
                    text: 'Join our mailing list and receive the latest travel updates, special offers, and adventure inspiration directly in your inbox.',
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
                    text: 'Your next great journey may be just one email away.',
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
                    text: 'Adventure Begins with Inspiration. Stay Connected with Ladakh Moto.',
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
      description: 'Newsletter | Ladakh Moto',
      image: mediaMap['disclaimer-slide.webp'],
      title: 'Newsletter | Ladakh Moto',
    },
    title: 'Newsletter',
  }
}
