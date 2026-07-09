 
 
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  mediaMap: Record<string, any>
}

export const guidesAndStaffs:(args:PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap
}) => {
  return {
    slug: 'guides-and-staffs',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      slides: [
        {
          title: 'Guides & Staffs',
          subtitle: '',
          image: mediaMap['guides-and-staffs-slide.webp'],
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
                  text: 'Guides & Staffs',
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
                    text: 'At Ladakh Moto, we believe that the success of every adventure lies in the hands of our skilled and dedicated team. Our staff is more than just a support crew; they are the heart and soul of every tour, ensuring that your experience is safe, enjoyable, and unforgettable.',
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
                    text: 'Guides',
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
                    text: 'Our expert guides are locals of Ladakh and have extensive knowledge of the region, from its hidden trails to its cultural history. With years of experience leading riders through Ladakh\'s challenging terrains, they ensure that every rider is not only guided safely but also enriched with the beauty and stories of the region. They are trained to handle all situations, ensuring that your journey is as smooth and insightful as possible.',
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
                    text: 'Bike Marshals',
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
                    text: 'Our professional bike marshals are there to keep the group together, maintain pace, and assist in any technical or logistical needs on the road. Whether you are a seasoned rider or a beginner, they will provide the necessary support and guidance to ensure you can focus on enjoying the ride. Their experience with the terrain and ability to handle any situation on the road make them an essential part of our team.',
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
                    text: 'Mechanics',
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
                    text: 'Our team of highly skilled mechanics is always on standby to handle any mechanical issues that may arise during the tour. They are trained to work with various bike models, ensuring that all our bikes are in top condition and can withstand the challenges of Ladakh’s rugged landscapes. If you face any issues along the way, our mechanics will be there to get you back on track without delay.',
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
                    text: 'Support Staff',
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
                    text: 'Our support staff works tirelessly behind the scenes to make sure everything runs smoothly. From managing logistics and ensuring that riders’ needs are met to providing on-road assistance, they ensure that every aspect of the tour is well-organized. They handle everything from food arrangements to first aid, giving you peace of mind as you focus on the adventure ahead.',
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
                    text: 'At Ladakh Moto, we pride ourselves on our highly trained and dedicated team who go above and beyond to ensure you have an exceptional experience. Whether you\'re riding through the majestic passes or exploring the beauty of Ladakh, our team is with you every step of the way, making sure your journey is safe, memorable, and filled with adventure.',
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
      description: 'Learn about our skilled guides and crew — local experience, safety focus, and personalized service with deep terrain knowledge and passion for tours.',
      image: mediaMap['guides-and-staffs-slide.webp'],
      title: 'Our Guides - Expert Local Riders  & Support Staff in Ladakh',
    },
    title: 'Our Guides',
  }
}
