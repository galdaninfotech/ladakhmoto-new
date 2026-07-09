 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequiredDataFromCollectionSlug } from 'payload'

type PageArgs = {
  mediaMap: Record<string, any>
}

export const howToReach:(args:PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap
}) => {
  return {
    slug: 'how-to-reach',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      slides: [
        {
          title: 'How To Reach',
          subtitle: '',
          image: mediaMap['how-to-reach-slide.webp'],
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
                  text: 'How To Reach',
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
        // media: mediaMap['how-to-reach-content.webp'],
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
                    text: 'Getting to Ladakh - Your Gateway to Adventure',
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
                    text: 'Reaching the remote and stunning landscapes of Ladakh is an adventure in itself. Whether you prefer the speed of a flight or the scenic routes of a road trip, there are several ways to get to this high-altitude desert. Here\'s how you can reach Leh, the heart of Ladakh.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
              },

              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'By Air',
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
                    text: 'The Kushok Bakula Rimpochee Airport in Leh is one of the highest commercial airports in the world. It is well-connected with major Indian cities like Delhi, Mumbai, Chandigarh, and Srinagar. Flying into Leh offers breathtaking views of the snow-capped Himalayan peaks, making it a memorable start to your journey.',
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
                    text: 'Important Tip: Due to the sudden increase in altitude, we strongly recommend taking at least 24-48 hours to rest and acclimatize in Leh before starting any physical activities or bike tours.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
              },

              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'By Road',
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
                    text: 'A road trip to Ladakh is a dream for many travelers, offering some of the most spectacular landscapes on Earth. There are two main highways leading to Leh:',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
              },

              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '1. Manali-Leh Highway',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                tag: 'h3',
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
                    text: 'The 474 km route is heavily populated with travelers looking to catch a glimpse of beautiful views accompanied with high mountain passes including Baralacha La, and Tanglang La, and experiences like camping at Sarchu. After the circumstances aid, the road should be opened from late May to October.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
              },

              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: '2. Srinagar-Leh Highway',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                tag: 'h3',
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
                    text: 'This route spans about 434 km and is known for its gentler ascent, making it more suitable for those who want to acclimatize gradually.',
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
                    text: 'You may encounter several remarkable sites like Sonamarg, Drass (which is the second coldest region in the world), and Kargil. The entire highway stays functional from April to November. Both of these routes are greatly loved by bikers and motorists due to having magnificent views alongside the sharp turns.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
              },

              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'By Train',
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
                    text: 'Because of how remote and difficult the location is, there isn\'t a train service that can take you to Leh directly. However, the narest railway station is Jammu Tawi, which is somewhat 700 kilometers away from the destination. After reaching Jammu you can always get a taxi or a bus so that you can get an overland journey through Srinagar.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
              },

               {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'By Bus',
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
                    text: 'Private and government buses commute to Leh from Srinagar and Manali. For tourists that are on a budget, these buses tend to be good as they allow you to talk with the locals. There are Deluxe and Semi-Deluxe buses available through HPTDC and JKSRTC, so travelling through these will definitely give you smooth rides.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
              },

               {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'By Motorcycle',
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
                    text: 'For those that are looking for an adventure, travelling with motorbikes is a great experience. You can start your journey from Delhi or Srinagar, crossing through mountain passes and then viewing the beauty of Ladakh would definitely be the highlight. But do remember to prepare in advance so that the ride remains fun and safe.',
                    version: 1,
                  },
                ],
                direction: null,
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
                    text: 'So whether you choose to go on soaring high altitudes, a long-distance bus ride, or even grab a flight, Leh Ladakh is full of adventures waiting for you.',
                    version: 1,
                  },
                ],
                direction: null,
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
                    text: 'Make sure to pick the option that best corresponds with your exploration style and prepare to head towards one of the most beautiful areas of the planet!',
                    version: 1,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
    ],
    meta: {
      description: 'Find the best ways to reach Leh, Ladakh — by air and road, key routes and points, seasonal insights, and travel tips to plan your journey in Ladakh.',
      image: mediaMap['how-to-reach-slide.webp'],
      title: 'How to Reach Ladakh - Travel Routes & Tips | Ladakh Moto',
    },
    title: 'How to Reach Ladakh',
  }
}
