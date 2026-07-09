 
 
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  mediaMap: Record<string, any>
}

export const ourServices: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap
}) => {
  return {
    slug: 'our-services',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      slides: [
        {
          title: 'Our Services',
          subtitle: 'Comprehensive travel solutions in Ladakh.',
          image: mediaMap['our-services-slide.webp'],
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
                  text: 'Our Services',
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
            version: 1,
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
                    text: 'Welcome to Ladakh Moto - The Ultimate Ladakh Motorbiking Experience',
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
                format: 1,  // Bold root paragraph
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,  // 1 = bold, 2 = italic, 4 = underline, add bitwise (e.g. 3 = bold+italic)
                    mode: 'normal',
                    style: '',  // Inline styles
                    text: 'At Ladakh Moto, we believe in offering more than just a tour; we deliver an adventure that stays with you forever. Based in the heart of Ladakh, we specialize in motorbiking tours that allow you to explore this breathtaking region in the most exhilarating way possible. Whether you\'re a seasoned rider or a beginner, our tours are tailored to provide an unforgettable experience.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
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
                    text: 'Motorbiking Tours in Ladakh',
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
                format: 1,  // Bold root paragraph
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,  // 1 = bold, 2 = italic, 4 = underline, add bitwise (e.g. 3 = bold+italic)
                    mode: 'normal',
                    style: '',  // Inline styles
                    text: 'Ladakh has everything that a motorbike lover could ever ask for, and our tours have the right mix of adventure, as well as some tranquillity. From the scenic vistas of Nubra Valley to the untainted magnificence of Pangong Lake, we guide you to the core of Ladakh\'s most remarkable sites. Our trained personnel facilitate your rides assuring personal safety while providing exhilarating moments and reminiscences for years to come.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                indent: 0,
              },

              {
                type: 'list',
                listType: 'bullet',
                start: 1,
                tag: 'ul',
                version: 1,
                direction: 'ltr',
                format: '',
                indent: 0,
                children: [
                  {
                    type: 'listitem',
                    value: 1,
                    version: 1,
                    indent: 0,
                    children: [
                      {
                        type: 'paragraph',
                        version: 1,
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,  // 1=bold + 4=underline
                            mode: 'normal',
                            style: '',
                            text: 'Tailored Itineraries: We offer out customized itineraries to fit your needs; be it a few days or in case a 2 week trip suits you more!',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                      },
                    ],
                  },
                  {
                    type: 'listitem',
                    value: 2,
                    version: 1,
                    indent: 0,
                    children: [
                      {
                        type: 'paragraph',
                        version: 1,
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 1,  // Italic
                            mode: 'normal',
                            style: '',
                            text: 'Off-Road Adventures: Weather endurance is a must as you ride across rugged terrains, cross high mountains, and thunder through villages for a phenomenal off-road motorbiking experience.',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                      },
                    ],
                  },
                  {
                    type: 'listitem',
                    value: 2,
                    version: 1,
                    indent: 0,
                    children: [
                      {
                        type: 'paragraph',
                        version: 1,
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,  // Italic
                            mode: 'normal',
                            style: '',
                            text: 'Experienced Guides: These sights are as off the beaten path as one can imagine - leverage our experienced local guides who are passionate about the region to truly uncover the hidden stories.',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                      },
                    ],
                  },
                ],
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
                    text: 'Tour Packages',
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
                format: 1,  // Bold root paragraph
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 1,  // 1 = bold, 2 = italic, 4 = underline, add bitwise (e.g. 3 = bold+italic)
                    mode: 'normal',
                    style: '',  // Inline styles
                    text: 'If you are someone who has a preference on packaged tour then we have lots of all inclusive packages that are on offer. Every package is planned in such a way that it complements the adventure, culture, and nature tourism of Ladakh. Our offered tour packages include the following:',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                indent: 0,
              },

              {
                type: 'list',
                listType: 'bullet',
                start: 1,
                tag: 'ul',
                version: 1,
                direction: 'ltr',
                format: '',
                indent: 0,
                children: [
                  {
                    type: 'listitem',
                    value: 1,
                    version: 1,
                    indent: 0,
                    children: [
                      {
                        type: 'paragraph',
                        version: 1,
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,  // 1=bold + 4=underline
                            mode: 'normal',
                            style: '',
                            text: 'Group Tours:You are able to meet and travel with other visitors with similar interests as you making your stay in Ladakh even better. Travel in groups as you desire.',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                      },
                    ],
                  },
                  {
                    type: 'listitem',
                    value: 2,
                    version: 1,
                    indent: 0,
                    children: [
                      {
                        type: 'paragraph',
                        version: 1,
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,  // Italic
                            mode: 'normal',
                            style: '',
                            text: 'Private Tours: This is specially created for the ones interested in tour all by themselves and have the total freedom when it comes to deciding their plan.',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                      },
                    ],
                  },
                  {
                    type: 'listitem',
                    value: 2,
                    version: 1,
                    indent: 0,
                    children: [
                      {
                        type: 'paragraph',
                        version: 1,
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,  // Italic
                            mode: 'normal',
                            style: '',
                            text: 'Cultural & Scenic Tours: Places such as Leh, Pangong, Nubra, Tsomoriri and Zanskar are one of the stops on the tour that give you the chance to experience the culture, monasteries and beautiful landscapes of Ladakh.',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                      },
                    ],
                  },
                   {
                    type: 'listitem',
                    value: 2,
                    version: 1,
                    indent: 0,
                    children: [
                      {
                        type: 'paragraph',
                        version: 1,
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,  // Italic
                            mode: 'normal',
                            style: '',
                            text: 'Luxury Options: In the case with us relaxation can be accompanied by luxury and comfort because we have premium packages that offer good hotels, high quality food, and expensive cars to those of you who like to enjoy finer things in life.',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                      },
                    ],
                  },
                ],
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
                    text: 'Bike Rentals',
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
                format: 1,  // Bold root paragraph
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,  // 1 = bold, 2 = italic, 4 = underline, add bitwise (e.g. 3 = bold+italic)
                    mode: 'normal',
                    style: '',  // Inline styles
                    text: 'If you wish to self-generate the experience of Ladakh, we have a collection of high quality bikes available on rent. All our bikes, whether its a Royal Enfield or a Himalayan, are well maintained for safety and comfort.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                indent: 0,
              },

              {
                type: 'list',
                listType: 'bullet',
                start: 1,
                tag: 'ul',
                version: 1,
                direction: 'ltr',
                format: '',
                indent: 0,
                children: [
                  {
                    type: 'listitem',
                    value: 1,
                    version: 1,
                    indent: 0,
                    children: [
                      {
                        type: 'paragraph',
                        version: 1,
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,  // 1=bold + 4=underline
                            mode: 'normal',
                            style: '',
                            text: 'Fleet of Bikes: We boast a collection of bikes with a wide range of themes such as Royal Enfield\'s Himalayan, Classic 350cc, Standard 500cc, KTM Adventure and much more. All bikes come fitted with the right parameters for extensive touring.',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                      },
                    ],
                  },
                  {
                    type: 'listitem',
                    value: 2,
                    version: 1,
                    indent: 0,
                    children: [
                      {
                        type: 'paragraph',
                        version: 1,
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,  // Italic
                            mode: 'normal',
                            style: '',
                            text: 'Flexible Rental Packages: Our rates are competitive and offer a wide spectrum of options, starting with daily rent patterns to weekly tours.',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                      },
                    ],
                  },
                  {
                    type: 'listitem',
                    value: 2,
                    version: 1,
                    indent: 0,
                    children: [
                      {
                        type: 'paragraph',
                        version: 1,
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,  // Italic
                            mode: 'normal',
                            style: '',
                            text: 'Safety First: Helmet, Riding jackets and other safety accessories and gears are included in the rental charge as a precaution to ensure your safety.',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                      },
                    ],
                  },
                ],
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
                    text: 'Why Choose Us?',
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
                type: 'list',
                listType: 'bullet',
                start: 1,
                tag: 'ul',
                version: 1,
                direction: 'ltr',
                format: '',
                indent: 0,
                children: [
                  {
                    type: 'listitem',
                    value: 1,
                    version: 1,
                    indent: 0,
                    children: [
                      {
                        type: 'paragraph',
                        version: 1,
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,  // 1=bold + 4=underline
                            mode: 'normal',
                            style: '',
                            text: 'Local Expertise: Being a local tour company in Leh, Ladakh we are well informed about the people and culture, the roads, and of course the weather. This knowledge adds another layer of security and travelling confidence that you are well cared for and will have a wonderful experience.',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                      },
                    ],
                  },
                  {
                    type: 'listitem',
                    value: 2,
                    version: 1,
                    indent: 0,
                    children: [
                      {
                        type: 'paragraph',
                        version: 1,
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,  // Italic
                            mode: 'normal',
                            style: '',
                            text: 'Personalized Service: Each traveler is a valuable customer. You have an opportunity to tailor make your journey with us, be it only for a weekend, or you are planning to spend a month depending on your specific requirements. All aspects of your trip are adapted to your needs.',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                      },
                    ],
                  },
                  {
                    type: 'listitem',
                    value: 2,
                    version: 1,
                    indent: 0,
                    children: [
                      {
                        type: 'paragraph',
                        version: 1,
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,  // Italic
                            mode: 'normal',
                            style: '',
                            text: 'Safety & Comfort: It is our duty to always keep you safe and comfortable during your journey, make sure you have good bikes, be it well maintained, have qualifed support personnel and backup collection through all means for possible emergencies or unforeseen circumstances.',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                      },
                    ],
                  },
                  {
                    type: 'listitem',
                    value: 2,
                    version: 1,
                    indent: 0,
                    children: [
                      {
                        type: 'paragraph',
                        version: 1,
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,  // Italic
                            mode: 'normal',
                            style: '',
                            text: 'Environmental Responsibility: The picturesque place that is Ladakh deserves to be protected. Once again, we support the green tourism industry and hope to undertake green travelling practices.',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                      },
                    ],
                  },
                ],
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
                    text: 'Ready to Ride??',
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
                format: 1,  // Bold root paragraph
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,  // 1 = bold, 2 = italic, 4 = underline, add bitwise (e.g. 3 = bold+italic)
                    mode: 'normal',
                    style: '',  // Inline styles
                    text: 'Join us for a journey of a lifetime in one of the world\'s most awe-inspiring destinations. Explore the high-altitude deserts, traverse winding mountain roads, and experience the rich culture of Ladakh on two wheels. Whether you\'re renting a bike or booking a tour, your adventure awaits!',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                indent: 0,
              },
              {
                type: 'paragraph',
                version: 1,
                format: 1,  // Bold root paragraph
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,  // 1 = bold, 2 = italic, 4 = underline, add bitwise (e.g. 3 = bold+italic)
                    mode: 'normal',
                    style: '',  // Inline styles
                    text: 'For inquiries or to book your motorbiking tour, contact us today. Let\'s hit the road and make memories in Ladakh!',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                indent: 0,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
          },
        }
        
      },
    ],
    meta: {
      description: 'Explore premium services at Ladakh Moto - expertly guided bike tours, custom itineraries, support & logistics for unforgettable adventures. Book Now!',
      image: mediaMap['our-services-slide.webp'],
      title: 'Our Services - Bike Tours & Adventure Trips with Ladakh Moto',
    },
    title: 'Our Services',
  }
}
