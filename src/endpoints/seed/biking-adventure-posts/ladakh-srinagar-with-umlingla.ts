/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
  highlightsMap?: Record<string, any>
  hotelsMap?: Record<string, any>
}

export const ladakhSrinagarWithUmlingla: (
  args: PostArgs,
) => RequiredDataFromCollectionSlug<'bikingAdventures'> = ({ mediaMap, author, highlightsMap, hotelsMap }) => {
  return {
    slug: 'ladakh-srinagar-with-umlingla',
    _status: 'published',
    authors: [author],
    heroImage: mediaMap['ladakh-srinagar-with-umlingla-slide.webp'],
    duration: '10N/11D',
    distance: '1576',
    highestPeak: '19024',
    difficulty: 'hard',
    accommodation: ['hotel', 'camp'],
    meal: ['breakfast', 'dinner'],
    overviewImage: mediaMap['ladakh-srinagar-with-umlingla-overview-1.webp'],
    gallery: [
      mediaMap['ladakh-srinagar-with-umlingla-overview-2.webp'],
      mediaMap['ladakh-srinagar-with-umlingla-overview-3.webp'],
      mediaMap['ladakh-srinagar-with-umlingla-overview-4.webp'],
      mediaMap['ladakh-srinagar-with-umlingla-overview-5.webp'],
    ],
    overviewMap: "<iframe src=\"https://www.google.com/maps/d/embed?mid=1wyENQv96A4_ISVclVFNnOO6H6MdHuE4&ehbc=2E312F\" width=\"640\" height=\"480\"></iframe>",
    overviewVideo: {
      url: "https://www.youtube.com/watch?v=G7a_tPbcELY",
      video: null
    },
    description: {
      root: {
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                text: "Ladakh Srinagar With Umlingla is a tour where you will be riding across the interesting places in Ladakh and Kashmir for its 11 exciting days. You will be enthralled by countless mountain passes, tranquil lakes, secluded villages as well as towns full of history. Before we start with Nubra Valley, this tour will take us to the impressive Pangong Lake, Hanle, the world's highest motorable road Umling La and picturesque regions of Kargil and Srinagar, beginning from Leh.",
                type: 'text',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'paragraph',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'root',
        version: 1,
      },
    },
    summary: {
      root: {
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                text: 'This tour combines high-altitude adventure with serene cultural exploration, making it perfect for motorbiking enthusiasts looking to challenge themselves while experiencing the beauty of Ladakh.',
                type: 'text',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'paragraph',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'root',
        version: 1,
      },
    },
    itineraries: [
      {
        title: 'Welcome to Leh: Altitude Acclimatization',
        highestPeak: '11000',
        distance: '20',
        duration: '3-4',
        difficulty: 'easy',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-srinagar-with-umlingla-day1.webp'],
        structuredHighlights: [
          highlightsMap?.['acclimatization']?.id,
          highlightsMap?.['leh-market']?.id,
        ].filter(Boolean),
        activity: 'Bike Checkup, acclimatization and rest',
        description:
          "For your convenience, we recommend that clients arrange their taxi to reach Leh hotel. Once you arrive at Leh, please get to the designated hotel, where our team will be ready to welcome you. We can provide guidance on trusted taxi services if needed, ensuring a smooth and hassle-free journey to the hotel. Spend the day acclimatizing to Leh's high altitude. Take a light walk around Leh Market, or, if you feel comfortable, visit Leh Palace for panoramic town views.",
        overnight: 'Hotel in Leh',
        hotel: hotelsMap?.['mandalchan-hotel']?.id,
      },
      {
        title: 'Exploring Leh: Shanti Stupa & Heritage',
        highestPeak: '11000',
        distance: '60',
        duration: '4-5',
        difficulty: 'easy',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-srinagar-with-umlingla-day2.webp'],
        structuredHighlights: [
          highlightsMap?.['shanti-stupa']?.id,
          highlightsMap?.['leh-palace']?.id,
          highlightsMap?.['magnetic-hill']?.id,
          highlightsMap?.['hall-of-fame']?.id,
          highlightsMap?.['pathar-sahib']?.id,
        ].filter(Boolean),
        activity: '',
        description:
          'After your breakfast today, ride to visit the Magnetic Hill which is also enthralling as it generates an illusion and on the way visit Gurudwara Pathar Sahib which is a serene Sikh shrine. Later, visit out the Shanti Stupa to take stunning views of the Leh town and then venture out to the UNESCO recognized Leh Palace. End your day with a trip to the Hall of Fame, a memorial for the Indian Army and recollects the history with its specific gallery.',
        overnight: 'Hotel in Leh',
        hotel: hotelsMap?.['mandalchan-hotel']?.id,
      },
      {
        title: 'Cross Khardung La: World\'s Highest Pass',
        highestPeak: '18380',
        distance: '120',
        duration: '4-5',
        difficulty: 'easy',
        accommodation: ['gh', 'camp'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-srinagar-with-umlingla-day3.webp'],
        structuredHighlights: [
          highlightsMap?.['khardong-la-pass']?.id,
          highlightsMap?.['diskit-monastery']?.id,
          highlightsMap?.['hunder-sand-dunes']?.id,
        ].filter(Boolean),
        activity: null,
        description:
          'This trip will take you to the highest point on the route, Khardung La (one of the highest passes in the world). After crossing the pass, you will ride towards the beautiful valley of Nubra. You can visit the Diskit Monastery, which has a large Maitreya Buddha statue. After that, you will continue your trip to the Hunder Sand Dunes, where you could ride camels that have two humps, known as Bactrian camels.',
        overnight: 'Camps/Guesthouse in Hunder, Nubra Valley',
        hotel: hotelsMap?.['fossil-resort']?.id,
      },
      {
        title: 'Turtuk Village: Cultural Border Expedition',
        highestPeak: '10000',
        distance: '170',
        duration: '4-5',
        difficulty: 'medium',
        accommodation: ['camp', 'gh'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-srinagar-with-umlingla-day4.webp'],
        structuredHighlights: [
          highlightsMap?.['turtuk-village']?.id,
          highlightsMap?.['indo-pak-border-thang']?.id,
          highlightsMap?.['balti-culture']?.id,
        ].filter(Boolean),
        activity: null,
        description:
          "Today, we will go on an excursion to Turtuk, a remote and isolated village located close to the protecetd India Pakistan border, which is culturally diverse. Turtuk portrays the vividness of esteemed culture of balti, which is quite different from rest of Ladakh. This part of the ride lets you explore the village, interact with locals, and savor the views of the Apricot orchid's farms before heading back to Hunder for an overnight stay.",
        overnight: 'Camp/Guesthouse in Hunder, Nubra valley',
        hotel: hotelsMap?.['fossil-resort']?.id,
      },
      {
        title: 'Dunes to Blue Water: Shyok Valley Crossing',
        highestPeak: '14270',
        distance: '160',
        duration: '5-6',
        difficulty: 'easy',
        accommodation: ['cottage', 'camp'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-srinagar-with-umlingla-day5.webp'],
        structuredHighlights: [
          highlightsMap?.['shyok-river']?.id,
          highlightsMap?.['pangong-lake']?.id,
        ].filter(Boolean),
        activity: null,
        description:
          'So, Prepare for a spectacular trip that will take you along the breathtaking and exciting route of the Shyok river to reach the exquisite Pangong Lake. The trip will take you across rough mountain landscapes and periodically tiny rural settlements of the Ladakhi people. Before long, once you have reached the lake, you will see its numerous blue waters gets refracted and scattered by sunlight. The lake is spread across of India and Tibet and ranks among the highest salt water lakes in the world.',
        overnight: 'Cottage at Pangong Lake',
        hotel: hotelsMap?.['mountain-chalet']?.id,
      },
      {
        title: 'Ride to the Stars: Remote Hanle Village',
        highestPeak: '14763',
        distance: '230',
        duration: '6-7',
        difficulty: 'easy',
        accommodation: ['camp'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-srinagar-with-umlingla-day6.webp'],
        structuredHighlights: [
          highlightsMap?.['changthang-plateau']?.id,
          highlightsMap?.['remote-village-hanle']?.id,
          highlightsMap?.['hanle-observatory']?.id,
        ].filter(Boolean),
        activity: null,
        description:
          'Start your trip to Hanle, one of the most isolated places in Ladakh. You will ride through the arid Changthang Plateau which is known for the expansive scenery and some wildlife. Arriving at Hanle, the ones who are fond of astronomy may visit the Hanle Telescope, among the highest telescopes in the world. To sum up, Hanle is a small undisturbed quiet village with clear dark nights ideal for stargazing and away from the tourist crowd.',
        overnight: 'Camp/Homestay in Hanle',
        hotel: hotelsMap?.['gua-homestay']?.id,
      },
      {
        title: 'Umling La: Reaching the 19,024ft Peak',
        highestPeak: '19024',
        distance: '150',
        duration: '6-7',
        difficulty: 'hard',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-srinagar-with-umlingla-day7.webp'],
        structuredHighlights: [
          highlightsMap?.['umlingla-pass']?.id,
        ].filter(Boolean),
        activity: null,
        description:
          'Today is among the most difficult and exciting days of this tour. Ride up to Umling La Pass which has the distinction of being the highest motor able road in the whole world which stands at an astounding 19,024 feet. The ascent towards the Umling La pass is not easy with high altitudes and harsh weather conditions but once on top, you can see some great views. After reaching the top, ride back to Hanle and enjoy your evening.',
        overnight: 'Camp/Homestay in Hanle',
        hotel: hotelsMap?.['gua-homestay']?.id,
      },
      {
        title: 'The Return Journey: Puga & Thiksey',
        highestPeak: '14763',
        distance: '254',
        duration: '5-6',
        difficulty: 'medium',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-srinagar-with-umlingla-day8.webp'],
        structuredHighlights: [
          highlightsMap?.['thiksey-monastery']?.id,
        ].filter(Boolean),
        activity: '',
        description:
          'The return journey into the Leh is through Puga Valley, which is beautiful and secluded; this valley has many hot springs and mesmerizing scenery. Visit Thiksey monastery along the way, which is one of the most photogenic in Ladakh. The monastery built on a mountain top look and feel like the Potala Palace of Lhasa. Then afterwards, further proceed down to Leh, where you will have time free to spend the evenings.',
        overnight: 'Hotel in Leh',
        hotel: hotelsMap?.['mandalchan-hotel']?.id,
      },
      {
        title: 'Kargil Journey: Ancient Lamayuru Monastery',
        highestPeak: '12139',
        distance: '210',
        duration: '5-6',
        difficulty: 'easy',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-srinagar-with-umlingla-day9.webp'],
        structuredHighlights: [
          highlightsMap?.['lamayuru-monastery']?.id,
          highlightsMap?.['kargil-war-memorial']?.id,
        ].filter(Boolean),
        activity: '',
        description:
          'Today ride towards Kargil, a town of great antiquity in Ladakh. On the way, visit the Lamayuru Gompa, which is regarded as one of the oldest and most exquisite monasteries in Ladakh. From Lamayuru, move ahead to Kargil War Memorial, a homage paying place for the soldiers who died during Kargil War. Be in Kargil by sunset.',
        overnight: 'Hotel in Kargil',
        hotel: hotelsMap?.['royal-gasho-hotel']?.id,
      },
      {
        title: 'Zoji La Challenge: Ride into Srinagar Valley',
        highestPeak: '11575',
        distance: '202',
        duration: '5-6',
        difficulty: 'hard',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-srinagar-with-umlingla-day10.webp'],
        structuredHighlights: [
          highlightsMap?.['zojila-pass']?.id,
          highlightsMap?.['drass']?.id,
          highlightsMap?.['sonmarg']?.id,
        ].filter(Boolean),
        activity: '',
        description:
          'We were going to start off the ride to Srinagar through the arduous and picturesque Zoji La Pass that has breathtaking views of the Himalayan mountain range. Get on the bikes and go to Drass, which is the second coldest place on earth. After a descent of the Zoji La, one will cross over the vast green plains of Sonamarg after which the alluring city of Srinagar is finally reached. Look forward to enjoying a farewell dinner whilst reminiscing all the good times you had in your tour.',
        overnight: 'Hotel in Srinagar',
        hotel: hotelsMap?.['asia-park-hotel']?.id,
      },

      {
        title: 'Farewell Tour: Departure from Srinagar',
        highestPeak: null,
        distance: null,
        duration: null,
        difficulty: null,
        accommodation: [],
        meal: [],
        activity: null,
        description:
          'After breakfast, bid farewell to the mesmerizing landscapes of Ladakh and Kashmir. Transfer to Srinagar Airport for your onward journey, carrying with you unforgettable memories of your motor biking adventure package across the Himalayas.',
        overnight: null,
      },
    ],
    dates: [
      {
        start: "2026-06-10T11:30:00.000Z",
        end: "2026-06-20T11:30:00.000Z",
        status: "closed"
      },

      {
        start: "2026-06-30T11:30:00.000Z",
        end: "2026-07-10T11:30:00.000Z",
        status: "closing-soon"
      },

      {
        start: "2026-07-20T11:30:00.000Z",
        end: "2026-07-30T11:30:00.000Z",
        status: "closing-soon"
      },

      {
        start: "2026-08-09T11:30:00.000Z",
        end: "2026-08-19T11:30:00.000Z",
        status: "open"
      },

      {
        start: "2026-08-29T11:30:00.000Z",
        end: "2026-09-08T11:30:00.000Z",
        status: "open"
      },

      {
        start: "2026-09-09T11:30:00.000Z",
        end: "2026-09-19T11:30:00.000Z",
        status: "open"
      }
    ],
    cost: [
      {
        travelMode: 'own-bike',
        vehicleProvided: 'own-bike',
        costPerPerson: 25000,
      },
      {
        travelMode: 'solo-rider',
        vehicleProvided: 'himalayan-411-bs6',
        costPerPerson: 46000,
      },
      {
        travelMode: 'dual-ride',
        vehicleProvided: 'himalayan-411-bs6',
        costPerPerson: 36000,
      },
      {
        travelMode: 'seat-in-backup-vehicle',
        vehicleProvided: 'isuzu-camper',
        costPerPerson: 33500,
      },
      {
        travelMode: 'suv',
        vehicleProvided: 'innova-xylo',
        costPerPerson: 33500,
      },
    ],
    privateRoomUpgrade: '10000',
    bikeUpgrade: '17000',
    isFeatured: true,
    order: 4,
    startEndCity: 'Leh - Srinagar',
    minCost: '25000',
    cutOutCost: '29000',
    meta: {
      description:
        'Hotel, Meal, Fuel & Mechanic included | Khardongla, Nubra, Turtuk, Pangong, Hanle, Kargil & Umling La pass. 100% TRAVELLERS SATISFACTION GUARANTEED!',
      image: mediaMap['ladakh-srinagar-with-umlingla-twitter.webp'],
      title:
        'Ladakh Srinagar & Umlingla | 11 Day, 1576 km, 411cc BSVI @ ₹25,000',
    },
    relatedPosts: [],
    title: 'Ladakh Srinagar With Umlingla',
  }
}
