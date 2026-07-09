
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const acclimatization: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'High Altitude Acclimatization',
    slug: 'acclimatization',
    publishedAt: "2026-06-21T04:33:56.549Z",
    generateSlug: false,
    updatedAt: "2026-06-21T04:41:56.520Z",
    createdAt: "2026-06-21T04:33:52.363Z",
    _status: "published",
    intro: {
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
                text: 'High Altitude Acclimatization',
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
                text: 'One of the most important aspects of traveling in Ladakh and the Himalayas is proper acclimatization. With many destinations located above 3,000 meters (10,000 feet) and several mountain passes exceeding 5,000 meters (16,400 feet), your body needs time to adjust to the reduced oxygen levels found at high altitudes.',
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
                text: 'At Ladakh Moto, the safety and well-being of our travelers are our highest priorities. Understanding and respecting the acclimatization process can significantly improve your comfort, health, and overall travel experience.',
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
    description: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,

        children: [
          {
            tag: 'h2',
            type: 'heading',
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                mode: 'normal',
                text: 'What is Acclimatization?',
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
                text: 'Acclimatization is the natural process through which your body adapts to lower oxygen levels at higher elevations. As altitude increases, the air becomes thinner, making it more difficult for your body to obtain the oxygen it needs.',
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
                text: 'This adjustment takes time, and every traveler responds differently based on factors such as age, fitness level, health condition, and previous high-altitude experience.',
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
                text: 'Proper acclimatization helps reduce the risk of altitude-related illnesses and allows you to enjoy your journey safely.',
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
                text: 'Why Acclimatization is Important in Ladakh',
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
                text: 'Most travelers arrive in Leh at an altitude of approximately 3,500 meters (11,500 feet), significantly higher than most cities around the world. Since many visitors arrive by air, the body has little time to gradually adjust to the change in elevation.',
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
                text: 'Without adequate acclimatization, travelers may experience symptoms of Acute Mountain Sickness (AMS), which can affect comfort, safety, and the enjoyment of the trip.',
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
                text: 'For this reason, acclimatization should never be rushed.',
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
                text: 'Recommended Acclimatization Guidelines',
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
                text: 'Rest on Arrival',
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
                text: 'Upon arriving in Leh, it is strongly recommended that you spend at least 24 to 48 hours resting and allowing your body to adapt to the altitude.',
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
                text: 'During this period:',
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
                    text: 'Avoid strenuous physical activity',
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
                    text: 'Walk slowly and avoid overexertion',
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
                    text: 'Get adequate sleep',
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
                    text: 'Stay hydrated',
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
                    text: 'Eat light and nutritious meals',
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
                    text: 'Limit alcohol consumption',
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
                    text: 'Avoid smoking',
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
                text: 'This initial adjustment period is essential for a safe and enjoyable journey.',
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
                text: 'Stay Hydrated',
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
                text: 'High-altitude environments can lead to increased dehydration.',
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
                text: 'We recommend:',
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
                    text: 'Drinking plenty of water throughout the day',
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
                    text: 'Consuming warm fluids when possible',
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
                    text: 'Avoiding excessive caffeine and alcohol',
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
                    text: 'Monitoring hydration levels regularly',
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
                text: 'Proper hydration supports the acclimatization process and helps reduce common altitude-related symptoms.',
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
                text: 'Eat Light and Healthy Meals',
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
                text: 'Heavy meals can place additional stress on the body at high altitudes.',
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
                text: 'Choose:',
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
                    text: 'Light, nutritious foods',
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
                    text: 'Fresh fruits and vegetables',
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
                    text: 'Carbohydrate-rich meals',
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
                    text: 'Easily digestible foods',
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
                text: 'Maintaining a balanced diet helps provide energy while supporting adaptation to altitude.',
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
                text: 'Common Symptoms of Altitude Sickness',
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
                text: 'Some travelers may experience mild symptoms during the acclimatization process.',
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
                text: 'Common symptoms include:',
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
                    text: 'Headache',
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
                    text: 'Fatigue',
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
                    text: 'Dizziness',
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
                    text: 'Loss of appetite',
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
                    text: 'Nausea',
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
                    text: 'Difficulty sleeping',
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
                    text: 'Shortness of breath during exertion',
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
                text: 'Mild symptoms are relatively common and often improve with rest, hydration, and proper acclimatization.',
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
                text: 'Recognizing Serious Symptoms',
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
                text: 'While most travelers acclimatize successfully, severe altitude illness can occasionally occur and requires immediate attention.',
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
                text: 'Seek medical assistance if you experience:',
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
                    text: 'Severe headache that does not improve',
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
                    text: 'Persistent vomiting',
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
                    text: 'Confusion or disorientation',
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
                    text: 'Difficulty walking normally',
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
                    text: 'Severe shortness of breath at rest',
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
                    text: 'Chest tightness',
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
                    text: 'Extreme weakness',
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
                text: 'These symptoms should never be ignored and may require immediate medical evaluation or descent to a lower altitude.',
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
                text: 'Acclimatization for Motorcycle Riders',
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
                text: 'Motorcycle touring in the Himalayas combines high altitudes with long riding days, making acclimatization especially important.',
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
                text: 'Riders should:',
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
                    text: 'Spend adequate time acclimatizing before long rides',
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
                    text: 'Avoid pushing beyond personal limits',
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
                    text: 'Stay hydrated throughout the journey',
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
                    text: 'Take regular breaks',
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
                    text: 'Monitor their physical condition daily',
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
                    text: 'Inform tour leaders about any symptoms',
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
                text: 'A well-acclimatized rider enjoys a safer and more enjoyable adventure.',
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
                text: 'Acclimatization During Your Tour',
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
                text: 'Our itineraries are designed with acclimatization in mind. Whenever possible, we schedule gradual altitude gains and appropriate rest periods to help travelers adjust safely.',
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
                text: 'Our experienced team monitors conditions and provides guidance throughout the journey to help ensure your well-being.',
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
                text: 'Who is at Risk?',
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
                text: 'Altitude sickness can affect anyone, regardless of age or physical fitness.',
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
                text: 'Even experienced athletes can experience altitude-related symptoms. Factors that may influence susceptibility include:',
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
                    text: 'Rapid ascent to high altitude',
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
                    text: 'Previous history of altitude sickness',
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
                    text: 'Insufficient acclimatization',
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
                    text: 'Dehydration',
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
                    text: 'Overexertion',
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
                    text: 'Existing medical conditions',
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
                text: "The best prevention remains proper acclimatization and careful attention to your body's signals.",
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
                text: 'Before You Travel',
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
                text: 'Before visiting Ladakh or other high-altitude destinations, we recommend:',
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
                    text: 'Consulting your physician if you have pre-existing medical conditions',
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
                    text: 'Carrying any prescribed medications',
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
                    text: 'Purchasing comprehensive travel insurance',
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
                    text: 'Understanding altitude-related risks',
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
                    text: 'Preparing physically for your journey',
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
                text: 'Being informed and prepared helps ensure a smoother travel experience.',
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
                text: 'Travel Smart, Travel Safe',
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
                text: "The landscapes of Ladakh are among the most spectacular in the world, but the region's high altitude demands respect and preparation. Taking the time to acclimatize properly allows you to fully appreciate the beauty, culture, and adventure that the Himalayas have to offer.",
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
                text: 'At Ladakh Moto, we encourage every traveler to prioritize health, listen to their body, and follow recommended acclimatization practices throughout their journey.',
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
                text: 'Acclimatize Well. Travel Safely. Experience the Himalayas at Their Best.',
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
    gallery: [
      {
        image: mediaMap['acclimatization-gallery-image-1.webp'],
        caption: 'Acclimatizing in Leh',
      },
      {
        image: mediaMap['acclimatization-gallery-image-2.webp'],
        caption: 'Acclimatizing in Leh',
      },
      {
        image: mediaMap['acclimatization-gallery-image-3.webp'],
        caption: 'Acclimatizing in Leh',
      },
      {
        image: mediaMap['acclimatization-gallery-image-4.webp'],
        caption: 'Acclimatizing in Leh',
      },
      {
        image: mediaMap['acclimatization-gallery-image-5.webp'],
        caption: 'Acclimatizing in Leh',
      },
      {
        image: mediaMap['acclimatization-gallery-image-6.webp'],
        caption: 'Acclimatizing in Leh',
      },
      {
        image: mediaMap['acclimatization-gallery-image-7.webp'],
        caption: 'Acclimatizing in Leh',
      },
      {
        image: mediaMap['acclimatization-gallery-image-8.webp'],
        caption: 'Acclimatizing in Leh',
      },
      {
        image: mediaMap['acclimatization-gallery-image-9.webp'],
        caption: 'Acclimatizing in Leh',
      },
      {
        image: mediaMap['acclimatization-gallery-image-10.webp'],
        caption: 'Acclimatizing in Leh',
      },
    ],
  }
}
