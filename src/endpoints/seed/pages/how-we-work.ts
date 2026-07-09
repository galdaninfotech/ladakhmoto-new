

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  mediaMap: Record<string, any>
}

export const howWeWork: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap
}) => {
  return {
    slug: 'how-we-work',
    publishedAt: "2026-06-19T09:52:36.795Z",
    generateSlug: false,
    updatedAt: "2026-06-19T11:33:02.446Z",
    createdAt: "2026-06-19T09:52:24.030Z",
    _status: "published",
    hero: {
      type: 'lowImpact',
      slides: [
        {
          title: 'How We Work',
          subtitle: '',
          image: mediaMap['how-we-work-slide.webp'],
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
                  text: 'How We Work',
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
                    text: 'How We Work',
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
                    text: 'At Ladakh Moto, we believe that a great adventure is built on careful planning, local expertise, and genuine hospitality. Our goal is simple: to provide a seamless, safe, and unforgettable journey through the breathtaking landscapes of Ladakh, Zanskar, Kashmir, Spiti, and the Himalayas.',
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
                    text: '1. Understanding Your Travel Plans',
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
                    text: 'Every journey begins with understanding your expectations. Whether you are looking for a guided motorcycle expedition, a self-guided adventure, a cultural tour, or a customized group trip, our team helps you choose the itinerary that best matches your interests, riding experience, schedule, and budget.',
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
                    text: 'We are happy to answer your questions, recommend suitable routes, and help you prepare for the challenges and rewards of high-altitude travel.',
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
                    text: '2. Booking and Confirmation',
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
                    text: 'Once you select your preferred tour, we guide you through a simple booking process. After receiving your booking request and deposit, we confirm your reservation and provide all necessary details, including tour information, accommodation details, riding requirements, and travel recommendations.',
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
                    text: 'Our team remains available throughout the process to assist with any concerns before your arrival.',
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
                    text: '3. Pre-Tour Preparation',
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
                    text: 'A successful Himalayan adventure starts long before the first ride. Before the tour begins, we provide important information about:',
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
                        text: 'Route and itinerary details',
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
                        text: 'Riding conditions and road expectations',
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
                        text: 'Altitude acclimatization guidelines',
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
                        text: 'Packing recommendations',
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
                        text: 'Weather conditions',
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
                        text: 'Travel permits and documentation requirements',
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
                    text: 'This preparation helps ensure that every participant arrives informed, confident, and ready for the journey ahead.',
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
                    text: '4. Arrival and Orientation',
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
                    text: 'Upon arrival, our team welcomes you and conducts a comprehensive tour briefing. We introduce you to your motorcycle, explain safety procedures, review the itinerary, and answer any last-minute questions.',
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
                    text: 'Before departure, all motorcycles undergo thorough inspections to ensure they are in excellent mechanical condition.',
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
                    text: '5. Riding with Confidence',
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
                    text: 'Our tours are led by experienced local professionals who know the terrain, weather patterns, road conditions, and remote mountain routes of the region.',
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
                    text: 'During the journey, we focus on:',
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
                        text: 'Rider safety',
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
                        text: 'Responsible travel practices',
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
                        text: 'Comfortable riding pace',
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
                        text: 'Reliable support throughout the route',
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
                        text: 'Local cultural experiences',
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
                        text: 'Environmental awareness',
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
                    text: 'Whether you are crossing high mountain passes, exploring remote valleys, or visiting ancient monasteries, our team is there to ensure a smooth and enjoyable experience.',
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
                    text: '6. Support Throughout the Journey',
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
                    text: 'Adventure travel comes with unexpected situations, and preparation makes all the difference. Our support team assists with logistics, accommodations, route coordination, and technical support whenever required.',
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
                    text: 'We continuously monitor conditions and make adjustments when necessary to provide the safest and most rewarding experience possible.',
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
                    text: '7. Authentic Local Experiences',
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
                    text: 'We believe that travel is about more than reaching a destination. Our itineraries are designed to connect travelers with the culture, history, traditions, and people of the Himalayas.',
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
                    text: 'From remote villages and ancient monasteries to local cuisine and cultural interactions, we strive to create experiences that go beyond conventional sightseeing.',
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
                    text: '8. Responsible Adventure Tourism',
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
                    text: 'As a local Ladakh-based company, we are committed to preserving the natural beauty and cultural heritage of the regions we operate in. We encourage responsible travel practices, support local communities, and promote environmentally conscious tourism whenever possible.',
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
                    text: '9. After the Tour',
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
                    text: 'Our relationship with travelers does not end when the ride is over. We love hearing about your experiences, receiving your feedback, and helping you plan future adventures across the Himalayas.',
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
                    text: 'Many of our guests return year after year, becoming part of the growing Ladakh Moto family.',
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
                    text: 'Why Travel with Ladakh Moto?',
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
                        text: 'Experienced local team based in Ladakh',
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
                        text: 'Professionally maintained motorcycles',
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
                        text: 'Carefully planned itineraries',
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
                        text: 'Safety-focused operations',
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
                        text: 'Personalized customer support',
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
                        text: 'Authentic Himalayan experiences',
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
                        text: 'Transparent communication from start to finish',
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
                    text: 'From your first inquiry to your final ride, we are committed to making your Himalayan adventure memorable, safe, and truly extraordinary.',
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
            ],
            direction: null,
          },
        },
      },
    ],
    meta: {
      description: 'How We Work',
      image: mediaMap['disclaimer-slide.webp'],
      title: 'How We Work | Ladakh Moto',
    },
    title: 'How We Work',
  }
}
