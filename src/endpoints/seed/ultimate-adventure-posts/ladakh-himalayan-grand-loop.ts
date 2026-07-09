/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
  highlightsMap?: Record<string, any>
  hotelsMap?: Record<string, any>
}

export const ladakhHimalayanGrandLoop: (
  args: PostArgs,
) => RequiredDataFromCollectionSlug<'ultimateAdventures'> = ({ mediaMap, author, highlightsMap, hotelsMap }) => {
  return {
    slug: 'ladakh-himalayan-grand-loop',
    _status: 'published',
    authors: [author],
    heroImage: mediaMap['ladakh-himalayan-grand-loop-slide.webp'],
    duration: '14N/15D',
    distance: '1420',
    highestPeak: '19024',
    difficulty: 'hard',
    accommodation: ['hotel', 'resort'],
    meal: ['breakfast', 'dinner'],
    overviewImage: mediaMap['ladakh-himalayan-grand-loop-overview-1.webp'],
    gallery: [
      mediaMap['ladakh-himalayan-grand-loop-overview-2.webp'],
      mediaMap['ladakh-himalayan-grand-loop-overview-3.webp'],
      mediaMap['ladakh-himalayan-grand-loop-overview-4.webp'],
      mediaMap['ladakh-himalayan-grand-loop-overview-5.webp'],
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
                text: "The Delhi to Ladakh bike trip itinerary is specially curated for our foreign clients to ensure they enjoy a seamless and worry-free experience throughout their journey. From the moment guests arrive in India until their safe return, they are taken care of with attentive hospitality, smooth transfers, and comprehensive support. This exceptional Ladakh Himalayan Adventure spans 14 nights and 15 days, featuring hand-picked accommodations, expert multilingual guides, and well-maintained Royal Enfield motorbikes. Guests will explore breathtaking landscapes, rich Tibetan Buddhist culture, and challenging high-altitude routes with thoughtfully planned acclimatization schedules and safety measures. Every detail, from permits to emergency protocols, is meticulously organized to provide a perfect blend of adventure, comfort, and cultural immersion for a truly memorable journey.",
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
    highlights: [],
    summary: {
      root: {
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                text: 'Ladakh is an isolated region in northern India, bordered by Tibet and Kashmir, famed for dramatic mountain scenery and deep-rooted Tibetan Buddhist traditions. Guests encounter vast deserts at high altitude, sparkling lakes, prayer-flag adorned villages, and ancient monasteries perched on cliffs. Locals offer heartfelt hospitality – expect genuine warmth and chances for immersive experiences. ',
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
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                text: 'The region\'s limited infrastructure means you\'ll be traveling both paved and off-road routes (approx. 20% unpaved), with some days featuring gravel, sand, and steep hairpin turns. All routes are carefully chosen for safety and scenic value.',
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
        title: 'Welcome to India: Arrival in Delhi',
        highestPeak: '11000',
        distance: '20',
        duration: '3-4',
        difficulty: 'easy',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-grand-loop-day1.webp'],
        activity: 'Acclimatization and rest',
        description:
          "Welcome to India! After landing at Delhi\'s Indira Gandhi International Airport, guests are greeted by Ladakhmoto staff and transferred to a comfortable hotel in the city. Delhi is India\'s vibrant capital, offering a mix of ancient history and modern lifestyle. Most travelers rest after their flight before starting this Delhi to Ladakh and back to Delhi Bike trip, but those with extra energy can take guided walks around historic sites or sample local cuisine. All logistics for the next journey, including tickets and briefings, are handled by our team.",
        overnight: 'Hotel in Delhi',
      },
      {
        title: 'Fly to the Himalayas: Arrival in Leh',
        highestPeak: '11000',
        distance: '60',
        duration: '4-5',
        difficulty: 'easy',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-grand-loop-day2.webp'],
        activity: '',
        description:
          'Today you will board on one of the most scenic flights in the world, soaring over the snow-capped Himalayan peaks to the town of Leh—the capital of Ladakh. Ladakh is a high-altitude region, meaning the air is thinner and the climate cooler than most are used to. Upon arrival (3,500 meters), acclimatization is critical. Guests settle into a well-located hotel and receive advice on avoiding altitude sickness: stay hydrated, keep activity light, and eat small, frequent meals. Our staff provides a briefing on Ladakh\'s unique culture, geography, and local customs.​',
        overnight: 'Hotel in Leh',
      },
      {
        title: 'First Ride: Hemis & Thiksey Monasteries',
        highestPeak: '11000',
        distance: '45',
        duration: '3-4',
        difficulty: 'easy',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-grand-loop-day3.webp'],
        activity: null,
        description:
          'Start your day with a healthy breakfast, followed by a gentle motorbike ride. This short route is specifically designed for acclimatization — no strenuous activity, just smooth roads and stunning scenery. Visit Hemis Monastery, famed for its annual festivals and Buddhist culture, then explore Thiksey Monastery with its impressive 12-story structure and giant Maitreya Buddha statue. The ride allows guests to get familiar with their bikes and Himalayan roads. In the evening, stroll Leh\'s peaceful bazaar for souvenirs and enjoy Ladakhi food at a recommended restaurant.​',
        overnight: 'Hotel in Leh',
      },
      {
        title: 'Indus Valley Ride: Alchi & Temisgham',
        highestPeak: '10600',
        distance: '170',
        duration: '4-5',
        difficulty: 'medium',
        accommodation: ['gh'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-grand-loop-day4.webp'],
        activity: null,
        description:
          "This ride follows the Indus River valley toward Alchi Monastery, known for exquisite ancient murals. Along the way, guides explain the history of the Silk Route and Ladakh\'s trading significance. Guests visit village homes, learn about apricot farming, and taste traditional butter tea. Overnight at Temisgham village provides an authentic experience of Ladakh\'s rural lifestyle in eco-friendly guesthouses.",
        overnight: 'Guesthouse in Temisgham',
      },
      {
        title: 'Aryan Valley: Journey to Historic Kargil',
        highestPeak: '10600',
        distance: '160',
        duration: '5-6',
        difficulty: 'hard',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-grand-loop-day5.webp'],
        activity: null,
        description:
          'Travel north to the renowned Aryan Valley—home to the unique Brokpa Dard community. Learn about ancient traditions and striking Himalayan flora before heading to Kargil, for a cultural presentation in the evening.',
        overnight: 'Hotel in Kargil',
      },
      {
        title: 'Zanskar Gateway: High Pass Ride to Padum',
        highestPeak: '14400',
        distance: '230',
        duration: '6-7',
        difficulty: 'hard',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-grand-loop-day6.webp'],
        activity: null,
        description:
          'Cross wild passes and narrow river gorges to remote Padum, center of the mystical Zanskar Valley. Enjoy challenging riding and support from backup teams for remote stretches. Overnight in a family-run guesthouse; dinner around the fire with local stories.',
        overnight: 'Hotel in Padum',
      },
      {
        title: 'The Zanskar Loop: Return Voyage to Leh',
        highestPeak: '11000',
        distance: '180',
        duration: '5-6',
        difficulty: 'hard',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-grand-loop-day7.webp'],
        activity: '',
        description:
          'Retrace your route with morning visits to Karsha Monastery and the remote village of Zangla, experiencing more of Zanskar’s stunning landscapes and hidden cultural gems. Continue the long return journey to Leh, with scenic rest stops and support vehicles ensuring comfort and safety throughout.',
        overnight: 'Hotel in Leh',
      },
      {
        title: 'Cross Khardung La: World\'s Highest Pass',
        highestPeak: '18380',
        distance: '130',
        duration: '4-5',
        difficulty: 'medium',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-grand-loop-day8.webp'],
        activity: '',
        structuredHighlights: [highlightsMap?.['khardung-la-pass']?.id].filter(Boolean),
        description:
          'Ascend the famous Khardong La (18,380 ft), one of the highest motorable passes on earth. Descend into the dunes and orchards of Nubra, where dramatic landscapes meet frontier culture. Evening at leisure in Hunder village.',
        overnight: 'Hotel in Hunder Village',
      },
      {
        title: 'Dunes to Blue Water: Shyok Valley Crossing',
        highestPeak: '14270',
        distance: '170',
        duration: '5-6',
        difficulty: 'medium',
        accommodation: ['resort'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-grand-loop-day9.webp'],
        activity: '',
        structuredHighlights: [highlightsMap?.['pangong-lake']?.id].filter(Boolean),
        description:
          'Spectacular riverside riding through the dramatic landscapes of Shyok Valley leads to the turquoise waters of Pangong Lake. Along the way, you’ll experience vast open terrain and quiet, untouched nature. Remote, windswept cottages offer a peaceful stay with great opportunities for stargazing and wildlife spotting.',
        overnight: 'Resort in Pangong Lake',
      },
      {
        title: 'Ride to the Stars: Remote Hanle Village',
        highestPeak: '14800',
        distance: '170',
        duration: '5-6',
        difficulty: 'hard',
        accommodation: ['hotel', 'resort'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-grand-loop-day10.webp'],
        activity: '',
        description:
          'Another high-altitude adventure awaits as you traverse rugged, unpaved roads to Hanley, known for its renowned astronomical observatory and vast, open night skies. Along the way, discover the unique lifestyle of Ladakh’s nomadic communities and learn about the region’s deep-rooted traditions in astronomy.',
        overnight: 'Hotel/Resort in Hanle',
      },

      {
        title: 'Umling La: Reaching the 19,024ft Peak',
        highestPeak: '19040',
        distance: '180',
        duration: '5-6',
        difficulty: 'hard',
        accommodation: ['hotel', 'resort'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-grand-loop-day11.webp'],
        activity: '',
        structuredHighlights: [highlightsMap?.['umling-la-pass']?.id].filter(Boolean),
        description:
          'Ride to the world’s highest motorable road at Umling La (19,020 ft). Take photos at the summit and absorb sweeping Himalayan panoramas. Return to Hanley for well-earned rest and celebration.',
        overnight: 'Hotel/Resort in Hanle',
      },
      {
        title: 'The Alpine Frontier: Ride to Tsomoriri',
        highestPeak: '14836',
        distance: '140',
        duration: '5-6',
        difficulty: 'hard',
        accommodation: ['hotel', 'resort'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-grand-loop-day12.webp'],
        activity: '',
        description:
          'Journey south through wild highland terrain to Tsomoriri, Ladakh’s largest alpine lake, surrounded by vast, untouched landscapes. Along the way, keep an eye out for migratory birds and rare Himalayan wildlife. Enjoy a peaceful stay at a lakeside eco-camp or a cozy boutique guesthouse.',
        overnight: 'Hotel/Resort in Tsomoriri',
      },

      {
        title: 'Taglang La: High Pass Journey back to Leh',
        highestPeak: '17582',
        distance: '140',
        duration: '5-6',
        difficulty: 'hard',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-grand-loop-day13.webp'],
        activity: '',
        description:
          'Cross Taglang La, one of the world’s highest motorable passes, before descending through scenic mountain roads toward Leh. As the landscape softens, enjoy a relaxed evening exploring Leh’s vibrant bazaar or unwinding at a peaceful spa.',
        overnight: 'Hotel in Leh',
      },
      {
        title: 'Return Flight: Leh back to Delhi',
        highestPeak: '750',
        distance: '00',
        duration: '0',
        difficulty: 'hard',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-grand-loop-day14.webp'],
        activity: '',
        description:
          'After breakfast, transfer to Leh airport for the return flight to Delhi. Our airport assistants manage all check-in needs. A final celebratory dinner is arranged in Delhi for reflections and sharing stories with fellow travelers.',
        overnight: 'Hotel in Delhi',
      },
      
      {
        title: 'Farewell India: Final Departure from Delhi',
        highestPeak: null,
        distance: null,
        duration: null,
        difficulty: null,
        accommodation: [],
        meal: [],
        activity: null,
        description:
          'Guests are provided airport assistance and farewell gifts—a reminder of Ladakh\'s culture and their adventure with Ladakhmoto on this Delhi to Delhi bike trip. Support in handling visa procedures and local transportation is provided for seamless departure.',
        overnight: null,
      },
    ],
    dates: [
      {
        start: '2026-06-04T11:30:00.000Z',
        end: '2026-06-18T11:30:00.000Z',
        status: 'closing-soon',
      },

      {
        start: '2026-06-15T11:30:00.000Z',
        end: '2026-06-29T11:30:00.000Z',
        status: 'open',
      },

      {
        start: '2026-07-13T11:30:00.000Z',
        end: '2026-07-27T11:30:00.000Z',
        status: 'open',
      },

      {
        start: '2026-07-28T11:30:00.000Z',
        end: '2026-08-11T11:30:00.000Z',
        status: 'open',
      },

      {
        start: '2026-08-11T11:30:00.000Z',
        end: '2026-08-25T11:30:00.000Z',
        status: 'open',
      },

      {
        start: '2026-08-24T11:30:00.000Z',
        end: '2026-09-07T11:30:00.000Z',
        status: 'open',
      },

      {
        start: '2026-09-05T11:30:00.000Z',
        end: '2026-09-19T11:30:00.000Z',
        status: 'open',
      },

    ],
    cost: [
      {
        travelMode: 'solo-rider',
        vehicleProvided: 'himalayan-452-bs6',
        costPerPerson: 4100,
      },
      {
        travelMode: 'dual-ride',
        vehicleProvided: 'himalayan-452-bs6',
        costPerPerson: 3290,
      },
    ],
    privateRoomUpgrade: '350',
    bikeUpgrade: null,
    isFeatured: true,
    order: null,
    startEndCity: 'Delhi - Delhi',
    minCost: '3290',
    cutOutCost: '4100',
    meta: {
      description:
        'Ladakh Himalayan Grand Loop',
      image: mediaMap['ladakh-himalayan-grand-loop.webp'],
      title: 'Delhi to Ladakh Bike Trip Packages | Ladakh Himalayan Grand Loop',
    },
    relatedPosts: [],
    title: 'Ladakh Himalayan Grand Loop',
  }
}
