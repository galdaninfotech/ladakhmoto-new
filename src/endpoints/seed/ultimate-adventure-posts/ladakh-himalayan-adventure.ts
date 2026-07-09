/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
  highlightsMap?: Record<string, any>
  hotelsMap?: Record<string, any>
}

export const ladakhHimalayanAdventure: (
  args: PostArgs,
) => RequiredDataFromCollectionSlug<'ultimateAdventures'> = ({ mediaMap, author, highlightsMap }) => {
  return {
    slug: 'ladakh-himalayan-adventure',
    _status: 'published',
    authors: [author],
    heroImage: mediaMap['ladakh-himalayan-adventure-slide.webp'],
    duration: '14N/15D',
    distance: '1420',
    highestPeak: '19024',
    difficulty: 'hard',
    accommodation: ['hotel', 'resort'],
    meal: ['breakfast', 'dinner'],
    overviewImage: mediaMap['ladakh-himalayan-adventure-overview-1.webp'],
    gallery: [
      mediaMap['ladakh-himalayan-adventure-overview-2.webp'],
      mediaMap['ladakh-himalayan-adventure-overview-3.webp'],
      mediaMap['ladakh-himalayan-adventure-overview-4.webp'],
      mediaMap['ladakh-himalayan-adventure-overview-5.webp'],
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
                text: "The motorbiking tour itinerary is specially curated for our foreign clients to ensure they enjoy a seamless and worry-free experience throughout their journey. From the moment guests arrive in India until their safe return, they are taken care of with attentive hospitality, smooth transfers, and comprehensive support. This exceptional Ladakh Himalayan Adventure spans 14 nights and 15 days, featuring hand-picked accommodations, expert multilingual guides, and well-maintained Royal Enfield motorbikes. Guests will explore breathtaking landscapes, rich Tibetan Buddhist culture, and challenging high-altitude routes with thoughtfully planned acclimatization schedules and safety measures. Every detail, from permits to emergency protocols, is meticulously organized to provide a perfect blend of adventure, comfort, and cultural immersion for a truly memorable journey.",
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
        media: mediaMap['ladakh-himalayan-adventure-day1.webp'],
        activity: 'Acclimatization and rest',
        description:
          "Welcome to India! After landing at Delhi\'s Indira Gandhi International Airport, guests are greeted by Ladakhmoto staff and transferred to a comfortable hotel in the city. Delhi is India\'s vibrant capital, offering a mix of ancient history and modern lifestyle. Most travelers rest after their flight, but those with extra energy can take guided walks around historic sites or sample local cuisine. All logistics for the next journey, including tickets and briefings, are handled by our team.",
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
        media: mediaMap['ladakh-himalayan-adventure-day2.webp'],
        activity: '',
        description:
          'Today you embark on one of the most scenic flights in the world, soaring over the snow-capped Himalayan peaks to the town of Leh—the capital of Ladakh. Ladakh is a high-altitude region, meaning the air is thinner and the climate cooler than most are used to. Upon arrival (3,500 meters), acclimatization is critical. Guests settle into a well-located hotel and receive advice on avoiding altitude sickness: stay hydrated, keep activity light, and eat small, frequent meals. Our staff provides a briefing on Ladakh\'s unique culture, geography, and local customs.',
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
        media: mediaMap['ladakh-himalayan-adventure-day3.webp'],
        activity: null,
        description:
          'Start your day with a healthy breakfast, followed by a gentle motorbike ride. This short route is specifically designed for acclimatization—no strenuous activity, just smooth roads and stunning scenery. Visit Hemis Monastery, famed for its annual festivals and Buddhist culture, then explore Thiksey Monastery with its impressive 12-story structure and giant Maitreya Buddha statue. The ride allows guests to get familiar with their bikes and Himalayan roads. In the evening, stroll Leh\'s peaceful bazaar for souvenirs and enjoy Ladakhi food at a recommended restaurant.',
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
        media: mediaMap['ladakh-himalayan-adventure-day4.webp'],
        activity: null,
        description:
          "This ride follows the Indus River valley toward Alchi Monastery, known for exquisite ancient murals. Along the way, guides explain the history of the Silk Route and Ladakh\'s trading significance. Guests visit village homes, learn about apricot farming, and taste traditional butter tea. Overnight at Temisgham village provides an authentic experience of Ladakh\'s rural lifestyle in eco-friendly guesthouses.",
        overnight: 'Guesthouse in Temisgham',
      },
      {
        title: 'Moonland Terrain: Lamayuru to Kargil',
        highestPeak: '10600',
        distance: '160',
        duration: '5-6',
        difficulty: 'easy',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-adventure-day5.webp'],
        activity: null,
        description:
          'After breakfast, ride through dramatic landscapes to Lamayuru Monastery—famous for its “moonland” terrain. Your guides explain local legends and monastic routines. Continue to Kargil, close to the Kashmir border, with stories about India\'s diverse ethnic groups. Hotel check-in is followed by an evening cultural presentation and Q&A about mountain life.',
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
        media: mediaMap['ladakh-himalayan-adventure-day6.webp'],
        activity: null,
        description:
          'Prepare for a ride into Zanskar Valley—a region so remote that roads are impassable for much of the year. Guests are briefed on riding in wilderness conditions, as support vehicles carry water, snacks, and emergency gear. The road to Padum crosses rivers, rocky paths, and tiny villages. At Padum (center of Zanskar), rest at a family-run hotel and join a campfire to hear stories about living in the Himalayas.',
        overnight: 'Hotel in Padum',
      },
      {
        title: 'Zanskar Culture: Zangla & Karsha Exploration',
        highestPeak: '12037',
        distance: '150',
        duration: '6-7',
        difficulty: 'easy',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-adventure-day7.webp'],
        activity: '',
        description:
          'Explore Zanskar\'s highlights via motorbike: first to Zangla village and fort, then Karsha Monastery, the largest and oldest local monastery. Expect to see spinning prayer wheels and monks in hidden caves. Guides share the unique blend of Tibetan and Ladakhi cultures. Return to Padum for an evening of local music and food.',
        overnight: 'Hotel in Padum',
      },
      {
        title: 'Shinku La Pass: Wild Ride to Jispa',
        highestPeak: '16703',
        distance: '180',
        duration: '5-6',
        difficulty: 'medium',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-adventure-day8.webp'],
        activity: '',
        description:
          'This is a true Himalayan expedition day, crossing the Shinku La Pass at 5,090 meters above sea level. Our support team carries oxygen and safety gear. Riders are trained in spotting symptoms of altitude sickness and take frequent rests. Descend to Jispa, a riverside village in Himachal Pradesh famed for alpine scenery. Accommodation includes a riverside hotel or luxury tent stay.',
        overnight: 'Hotel in Jispa',
      },
      {
        title: 'High Passes: Baralacha La to Tsokar Lake',
        highestPeak: '16040',
        distance: '210',
        duration: '5-6',
        difficulty: 'hard',
        accommodation: ['resort'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-adventure-day9.webp'],
        activity: '',
        description:
          'Travel across sweeping valleys and mountain passes to Tsokar Lake, a saltwater lake that is a haven for migratory birds and wildlife. Guests learn about the fragile Himalayan ecosystem, spot yaks and wild asses, and enjoy simple, locally-sourced meals in a lakeside camp.',
        overnight: 'Resort in Tsokar',
      },
      {
        title: 'Ride to the Stars: Remote Hanle Village',
        highestPeak: '14800',
        distance: '140',
        duration: '4-5',
        difficulty: 'easy',
        accommodation: ['hotel', 'resort'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-adventure-day10.webp'],
        activity: '',
        description:
          'Ride to Hanle village, home to one of the world\'s highest astronomical observatories. Our guides explain stargazing techniques and Ladakh\'s reputation for the clearest night skies in Asia. Hanle\'s remote setting also allows guests to connect with local nomads and understand ancient trade routes.',
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
        media: mediaMap['ladakh-himalayan-adventure-day11.webp'],
        activity: '',
        structuredHighlights: [highlightsMap?.['umling-la-pass']?.id].filter(Boolean),
        description:
          'Today is the adventure\'s crowning achievement: a motorbike ride to Umling La Pass at 19,020 feet (5,798 meters). Bike safety checks, altitude briefings, and guides accompany every guest. Take celebratory photos at the summit before descending for a night of rest in Hanle.',
        overnight: 'Hotel/Resort in Hanle',
      },
      {
        title: 'The Great Traverse: Ride back to Leh',
        highestPeak: '11575',
        distance: '202',
        duration: '5-6',
        difficulty: 'medium',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-adventure-day12.webp'],
        activity: '',
        description:
          'Retrace the route across scenic ridges, rivers, and remote villages. The journey is long but rewarding. Upon arrival in Leh, guests get time to rest, enjoy hot showers, and savor freshly cooked meals in a top-rated hotel.',
        overnight: 'Hotel in Leh',
      },


      {
        title: 'Leisure in Leh: Bazaar & Local Sites',
        highestPeak: '11000',
        distance: '00',
        duration: '0',
        difficulty: 'easy',
        accommodation: ['hotel'],
        meal: ['breakfast', 'dinner'],
        media: mediaMap['ladakh-himalayan-adventure-day13.webp'],
        activity: '',
        description:
          'This no-ride day lets guests truly immerse in Leh\'s culture. Options include guided visits to Leh Palace, Namgyal Tsemo Fort, or the Hall of Fame military museum. Ladakhmoto offers Tibetan handicraft shopping tours and spa visits. Guests can consult with travel specialists for extra sightseeing, meditation classes, or photography walks.',
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
        media: mediaMap['ladakh-himalayan-adventure-day14.webp'],
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
          'Guests are provided airport assistance and farewell gifts—a reminder of Ladakh\'s culture and their adventure with Ladakhmoto. Support in handling visa procedures and local transportation is provided for seamless departure.',
        overnight: null,
      },
    ],
    dates: [
      {
        start: '2026-06-04T11:30:00.000Z',
        end: '2026-06-18T11:30:00.000Z',
        status: 'open',
      },

      {
        start: '2026-06-15T11:30:00.000Z',
        end: '2026-06-29T11:30:00.000Z',
        status: 'closing-soon',
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
        'Join Delhi to Ladakh bike trip with expert guides. All-inclusive Leh Ladakh tour packages with stays, backup & support. Book now.',
      image: mediaMap['ladakh-himalayan-adventure.webp'],
      title: 'Delhi to Ladakh Bike Trip Packages | Ladakh Himalayan Adventure',
    },
    relatedPosts: [],
    title: 'Ladakh Himalayan Adventure',
  }
}
