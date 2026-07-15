 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'
       
export type PostArgs = {
    mediaMap: Record<string, any>
    author: User
    highlightsMap?: Record<string, any>
    hotelsMap?: Record<string, any>
    categoriesMap?: Record<string, any>
}

export const lehZanskarLeh: (args: PostArgs) => RequiredDataFromCollectionSlug<'bikingAdventures'> = ({
    mediaMap,
    author,
    highlightsMap,
    categoriesMap,
}) => {
    return {
    slug: "leh-zanskar-leh",
    _status: 'published',
    authors: [author],
    heroImage: mediaMap['leh-zanskar-leh-slide.webp'],
    overviewImage: mediaMap['leh-zanskar-leh-overview-1.webp'],
    duration: "9N/10D",
    distance: "1525",
    highestPeak: "16703",
    difficulty: "hard",
    accommodation: [
        "hotel",
        "camp"
    ],
    meal: [
        "breakfast",
        "dinner"
    ],
    gallery: [
      mediaMap['leh-zanskar-leh-overview-2.webp'],
      mediaMap['leh-zanskar-leh-overview-3.webp'],
      mediaMap['leh-zanskar-leh-overview-4.webp'],
      mediaMap['leh-zanskar-leh-overview-5.webp'],
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
                mode: "normal",
                text: "Leh Zanskar Leh, a heart-thumping motorbike ride, lasts 10 days and takes you through the unspoiled Zanskar Valley. You ride through treacherous mountain passes, travel to secluded monasteries, and navigate some of the roughest but breathtaking areas in the foothills of the Himalayas. As you will get to see some of the hidden beauty of Zanskar and Ladakh, this journey is the perfect combination of thrill, art, as well as the environment.",
                type: "text",
                version: 1,
            },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "paragraph",
            version: 1,
        },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "root",
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
                            mode: "normal",
                            text: "This tour is ideal for you if you are a biking fanatic as its a perfect mix of challenging mountain passes, and untouched valleys and lakes.",
                            type: "text",
                            version: 1,
                        },
                    ],
                    direction: "ltr",
                    format: "",
                    indent: 0,
                    type: "paragraph",
                    version: 1,
                },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1,
        },
    },
    itineraries: [
        {
            title: "Welcome to Leh: Altitude Acclimatization",
            highestPeak: "11000",
            distance: "20",
            duration: "3-4",
            difficulty: "easy",
            accommodation: [
                "hotel",
            ],
            meal: [
                "breakfast",
                "dinner",
            ],
            media: mediaMap['leh-zanskar-leh-day1.webp'],
            activity: "Bike Checkup, acclimatization and rest",
            description: "For your convenience, we recommend that clients arrange their taxi to reach Leh hotel. Once you arrive at Leh, please get to the designated hotel, where our team will be ready to welcome you. We can provide guidance on trusted taxi services if needed, ensuring a smooth and hassle-free journey to the hotel. Spend the day acclimatizing to Leh's high altitude. Take a light walk around Leh Market, or, if you feel comfortable, visit Leh Palace for panoramic town views.",
            overnight: "Hotel in Leh",
        },
        {
            title: "High Road to Moonland: Ride to Lamayuru",
            highestPeak: "11500",
            distance: "125",
            duration: "4-5",
            difficulty: "easy",
            accommodation: [
                "hotel",
            ],
            meal: [
                "breakfast",
                "dinner",
            ],
            media: mediaMap['leh-zanskar-leh-day2.webp'],
            activity: "",
            description: "Begin your motorbiking journey by heading west towards Lamayuru, one of the most ancient and iconic monasteries in Ladakh. En route, stop at Magnetic Hill, a spot where vehicles appear to roll uphill against gravity. Visit the ruins of Basgo Fort, a former seat of Ladakhi kings. Reach Lamayuru Monastery, known for its unique lunar-like landscape called Moonland.",
            overnight: "Hotel in Lamayuru",
        },
        {
            title: "Singey La Pass: High Altitude Ride to Padum",
            highestPeak: "16703",
            distance: "200",
            duration: "6-7",
            difficulty: "hard",
            accommodation: [
                "hotel",
                "gh",
            ],
            meal: [
                "breakfast",
                "dinner",
            ],
            media: mediaMap['leh-zanskar-leh-day3.webp'],
            activity: "",
            description: "Start early from Lamayuru via Wanla and Photoksar and get over bumpy roads with breathtaking views. Cross Singey La pass(16,703 ft). Arrive at Padum by evening after an exhilarating but arduous ride.",
            overnight: "Hotel/Guesthouse in Padum",
        },
        {
            title: "Zanskar River Valley: Journey to Purne",
            highestPeak: "12000",
            distance: "65",
            duration: "2-3",
            difficulty: "medium",
            accommodation: [
                "hotel",
            ],
            meal: [
                "breakfast",
                "dinner",
            ],
            media: mediaMap['leh-zanskar-leh-day4.webp'],
            activity: null,
            description: "Head to Purne, a remote village that is the starting point for the Phuktal Monastery trek, after breakfast. Follow the beautiful Zanskar River road to visit the beautiful Bardan Monastery, home to largest of the region's prayer wheels. The ride is a combination of dirt, and tough terrain, which leads to the tranquil village of Purne.",
            overnight: "Camp/Guest house in Purne",
        },
        {
            title: "Hiking Phuktal: The Cliffside Monastery",
            highestPeak: "12000",
            distance: "14",
            duration: "4-5",
            difficulty: "medium",
            accommodation: [
                "gh",
                "camp",
            ],
            meal: [
                "breakfast",
                "dinner",
            ],
            media: mediaMap['leh-zanskar-leh-day5.webp'],
            activity: null,
            description: "Hike to the spectacular Phuktal Monastery, which is built into the cliffs of a gorge and overlooks the Tsarap River. This 12th-century monastery is one of the most remote in the world and offers stunning views of the surrounding valley. After spending time at the monastery, hike back to Purne.",
            overnight: "Camp/Guest house in Purne",
        },
        {
            title: "Shinku La Challenge: Crossing to Sarchu",
            highestPeak: "16703",
            distance: "250",
            duration: "7-8",
            difficulty: "hard",
            accommodation: [
                "camp",
            ],
            meal: [
                "breakfast",
                "dinner",
            ],
            media: mediaMap['leh-zanskar-leh-day6.webp'],
            activity: null,
            description: "Today's ride is challenging as you cross the high-altitude Shingo La Pass, which connects Zanskar to Lahaul Valley. The pass offers panoramic views of the Himalayas, with glaciers and snow-capped peaks surrounding you. Descend into the beautiful Lahaul Valley and continue to Sarchu, a popular stopover for travelers on the Manali-Leh highway.",
            overnight: "Camp in serchu",
        },
        {
            title: "Gata Loops: Ride through High Desert Passes",
            highestPeak: "16616",
            distance: "130",
            duration: "4-5",
            difficulty: "medium",
            accommodation: [
                "cottage",
                "camp",
            ],
            meal: [
                "breakfast",
                "dinner",
            ],
            media: mediaMap['leh-zanskar-leh-day7.webp'],
            activity: null,
            description: "Pass through the famous Gata Loops, a series of 21 hairpin bends that lead to Nakee La and Lachulung La passes. This journey through spectacular barren high-altitude desert. Tso Kar, a saltwater lake with its shores, attracts diverse wildlife, particularly migratory birds, after descending from the passes.",
            overnight: "Camp/Cottage in Tsokar",
        },
        {
            title: "Geothermal Springs: Puga to Tsomoriri Lake",
            highestPeak: "14836",
            distance: "97",
            duration: "3-4",
            difficulty: "easy",
            accommodation: [
                "camp",
                "gh",
            ],
            meal: [
                "breakfast",
                "dinner",
            ],
            media: mediaMap['leh-zanskar-leh-day8.webp'],
            activity: null,
            description: "After breakfast, continue your journey across the desolate Changthang Plateau to reach the beautiful Tso Moriri Lake, one of the largest high-altitude lakes in India. En route, visit the scenic Puga Valley, known for its geothermal springs and vast landscapes after reaching Tsomoriri visit Korzok Village, located along the lake, where you can interact with local nomadic herders. Spend the afternoon exploring the shores of Tso Moriri, with its turquoise waters and surrounding snow-capped peaks.",
            overnight: "Guest House/Camp in Korzok Tsomoriri Lake",
        },
        {
            title: "Taglang La: High Pass Return Ride to Leh",
            highestPeak: "14836",
            distance: "220",
            duration: "5-6",
            difficulty: "medium",
            accommodation: [
                "hotel",
            ],
            meal: [
                "breakfast",
                "dinner",
            ],
            media: mediaMap['leh-zanskar-leh-day9.webp'],
            activity: "",
            description: "Ride back to Leh through the spectacular Thiksey Monastery, one of Ladakh's largest and most beautiful monasteries, built on a hill resembling the Potala Palace in Lhasa. Reach Leh by evening, where you can relax and explore the local markets. Look forward to enjoying a farewell dinner whilst reminiscing all the good times you had in your tour.",
            overnight: "Hotel in Leh",
        },
        {
            title: "Farewell Ladakh: Transfer to Leh Airport",
            highestPeak: null,
            distance: null,
            duration: null,
            difficulty: null,
            accommodation: [],
            meal: [],
            activity: null,
            description: "After breakfast, bid farewell to the mesmerizing landscapes of Ladakh and transfer to Leh Airport for your onward journey, carrying with you unforgettable memories of your motor biking adventure package across the Himalayas.",
            overnight: null,
        },
    ],
    dates: [
        {
            start: "2026-05-02T11:30:00.000Z",
            end: "2026-05-11T11:30:00.000Z",
            status: "closed"
        },
            
        {
            start: "2026-05-21T11:30:00.000Z",
            end: "2026-06-30T11:30:00.000Z",
            status: "closing-soon"
        },
            
        {
            start: "2026-06-10T11:30:00.000Z",
            end: "2026-06-19T11:30:00.000Z",
            status: "closing-soon"
        },
            
        {
            start: "2026-06-30T11:30:00.000Z",
            end: "2026-07-09T11:30:00.000Z",
            status: "open"
        },

        {
            start: "2026-07-20T11:30:00.000Z",
            end: "2026-07-29T11:30:00.000Z",
            status: "open"
        },

        {
            start: "2026-08-09T11:30:00.000Z",
            end: "2026-08-18T11:30:00.000Z",
            status: "open"
        },

        {
            start: "2026-08-29T11:30:00.000Z",
            end: "2026-09-07T11:30:00.000Z",
            status: "open"
        },

        {
            start: "2026-09-09T11:30:00.000Z",
            end: "2026-09-18T11:30:00.000Z",
            status: "open"
        },
    ],
    cost: [
        {
            travelMode: "own-bike",
            vehicleProvided: "own-bike",
            costPerPerson: 28500
        },
        {
            travelMode: "solo-rider",
            vehicleProvided: "himalayan-411-bs6",
            costPerPerson: 46500
        },
        {
            travelMode: "dual-ride",
            vehicleProvided: "himalayan-411-bs6",
            costPerPerson: 38500
        },  
        {
            travelMode: "seat-in-backup-vehicle",
            vehicleProvided: "isuzu-camper",
            costPerPerson: 36000
        },
        {
            travelMode: "suv",
            vehicleProvided: "innova-xylo",
            costPerPerson: 36000
        }
    ],
    privateRoomUpgrade: '10000',
    bikeUpgrade: '15000',
    isFeatured: false,
    startEndCity: "Leh - Leh",
    minCost: "28500",
    cutOutCost: "32000",
    categories: [
        categoriesMap?.['bike-tour'],
        categoriesMap?.['extreme'],
        categoriesMap?.['leh-ladakh'],
    ].filter(Boolean),
    meta: {
        description:
        "Leh to Leh trip - Hotel, Meal, Fuel & Mechanic included. Lamayuru, Padum, Phuktal, Shingo La, Serchu, Tsokar & Tsomoriri SATISFACTION GUARANTEED",
        image: mediaMap['leh-zanskar-leh-twitter.webp'],
        title: "Leh Zanskar Leh | 10 Day, 1485 km, 411cc BSVI @ ₹28,500/-",
    },
    relatedPosts: [],
    title: "Leh Zanskar Leh",
}
}
