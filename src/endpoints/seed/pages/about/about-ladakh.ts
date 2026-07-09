 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequiredDataFromCollectionSlug } from 'payload'

type PageArgs = {
  mediaMap: Record<string, any>
}

export const aboutLadakh:(args:PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap
}) => {
  return {
    slug: 'about-ladakh',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      slides: [
        {
          title: 'About Ladakh',
          subtitle: 'The Land of High Passes.',
          image: mediaMap['about-ladakh-slide.webp'],
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
                  text: 'About Ladakh',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h2',
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
        // media: mediaMap['about-ladakh-content.webp'],
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
                    text: 'About Ladakh - The Land of High Passes',
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
                    text: 'Ladakh is one of the most beautiful places located in northern India and is often called \'The Land of High Passes\'. This area is situated between two of the wosd\'s biggest mountain ranges - The Himalayas and the Karakoram. Combining a stunning landscape with diverse culture and rich history, it is the ultimate destination to visit. It doesn\'t matter if you\'re a lover of adventure, nature, or if you are a sucker for culture, Ladakh will leave you spellbound always.',
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
                    text: 'Geography and Climate',
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
                    text: 'Ladakh sits in the Himalayas north of India and in comparrison to the rest of the country, is arid due to being a high altitude desert. The altitude ranges from 2,700 to 7,600 meters above sea level and is in close proximity to snow-capped mountains and crystalline lakes. The winter temperatures rarely go above -30 degrees celcius while the summer provides and warm escape from the rest of the country.',
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
                    text: 'Cultural Heritage',
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
                    text: 'Ladakh is a place rich in history due to its abundance of stupas, monasteries and prayer flags slowly scattered throughout its landscape. The predominant religion in the region is Tibetan Buddhism which beautifully marries with our history and culture, with the Shanti Stupa, Leh Palace and Hemis Monastery being just a few examples of what we have to offer. Agriculture, livestock rearing and traditional crafts define Ladakh culture beautifully, and our festivals such as the Hemis Festival are a perfect depiction of that, featuring vibrant dances, music and florid processions that show off our rich heritage.',
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
                    text: 'Adventure and Exploration',
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
                    text: 'Ladakh is a utopia for adventurers looking for an adrenaline rush. The frozen river winter trek, the Chadar trek, the Markha Valley Trek and the off road jeep tours make the region a hub for adventure. The Khardung La Pass is the perfect place to visit if you are seeking new thrills; it is one of the highest roads worldwide and due to this, is quite famous among people.',
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
                    text: 'Ladakh is unlike any other region; it offers breathtaking sceneries which makes it the ideal spot for photographers and is a place one must visit at least once. The stunning mountains and colorful monasteries are just a few of many things that can be captured while motorcycling on the Manali-Leh Highway and the Leh-Zanskar road.',
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
                    text: 'When we talk about beauty, the untouched, unexploited Pangong Lake and Tso Moriri Lake not only boast of breathtaking views, but also create the most vigorous contrast of blues. In addition to that camels and sand dunes are a must see in Nubra Valley, as they are rich in culture and history solely based off the area they are in.',
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
                    text: 'Aside from the landscapes, the unique wildlife such as Tibetan antelopes, wild yaks and the majestic snow leopard are a sight to behold as they inhabit this region.',
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
                    text: 'The migratory birds add to the already existing ecosystem and contributes a great deal to the region that is Ladakh and summer specifically adds to the influx of migratory birds and the presence of such diversity makes it a great destination for bird watchers.',
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
                    text: 'Travel Tips',
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
                    text: 'To access Ladakh, one can opt for road travel through Manali or Srinagar which has good connectivity with the rest of India. Leh is the location of the nearest airport which has frequent flights from Delhi and other major cities. This exposure is recommended because of the warnings associated with high altitudes as travelers are advised against altitude sickness with proper measures.',
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
                    text: 'Best months to visit Ladakh are May and September. The region has pleasant weather with clear skies. On the other hand, harsh cold and snowfall prevail during winter months however, the frozen Chadar Trek is best experienced during this time.',
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
                    text: 'Conclusion',
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
                    text: 'All visitors have been left with awe after discovering Ladakh\'s natural beauty, history, and environment and it is the most perfect blend of intrigue. If you are searching for a corner of the world that is truly one of a kind, be it nature\'s serenity, thrill, or spiritual enrichment - ladakh will certainly feel like magic to you due to how unique every moment feels. Come and experience the sheer thrill of the Ladakh region along with its many splendid views. You can also call/email us to have more information about Ladakh',
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
      description: 'Discover About Ladakh — its unique culture, stunning high-altitude landscapes, ancient monasteries, and epic adventure experiences with Ladakh Moto',
      image: mediaMap['about-ladakh-slide.webp'],
      title: 'About Ladakh - Culture, Landscapes & Adventure | Ladakh Moto',
    },
    title: 'About Ladakh',
  }
}
