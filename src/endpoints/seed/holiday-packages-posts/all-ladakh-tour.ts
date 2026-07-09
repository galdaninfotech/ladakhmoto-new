


/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
    mediaMap: Record<string, any>
    author: User
    highlightsMap?: Record<string, any>
    hotelsMap: Record<string, any>
}

export const allLadakhTour: (args: PostArgs) => RequiredDataFromCollectionSlug<'holidayPackages'> = ({
    mediaMap,
    author,
    highlightsMap,
}) => {
    return {
        slug: "all-ladakh-tour",
        _status: 'published',
        authors: [author],
        heroImage: mediaMap['all-ladakh-tour-slide.webp'],
        overviewImage: mediaMap['all-ladakh-tour-overview-1.webp'],
        duration: "8N/9D",
        distance: "960",
        highestPeak: "18380",
        difficulty: "medium",
        accommodation: [
            "hotel",
            "gh"
        ],
        meal: [
            "breakfast",
            "dinner"
        ],
        gallery: [
            mediaMap['all-ladakh-tour-overview-2.webp'],
            mediaMap['all-ladakh-tour-overview-3.webp'],
            mediaMap['all-ladakh-tour-overview-4.webp'],
            mediaMap['all-ladakh-tour-overview-5.webp'],
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
                                text: "All Ladakh Tour is a 9-day Ladakh tour package which includes acclimatization, tourism, and adventure in different parts of Ladakh. During the tour, you will spend two days in Leh and adapt to the high altitude while preparing to visit Nubra Valley, Pangong Lake, Hanle village, and Tso Moriri Lake. Such a trip will suit those who want to visit not only the must-see places of Ladakh but also explore places off the beaten path.",
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
        highlights: [
            highlightsMap?.['khardung-la-pass']?.id,
            highlightsMap?.['pangong-lake']?.id,
        ].filter(Boolean),
        summary: {
            root: {
                children: [
                    {
                        children: [
                            {
                                detail: 0,
                                format: 0,
                                mode: "normal",
                                text: "The All Ladakh Tour by Ladakh Moto is a 9-day, 960 km Leh-to-Leh taxi tour exploring Nubra Valley, Pangong Lake, Hanle, and high passes like Khardung La, with stays in hotels/camps, meals, permits, and support included.",
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
                media: mediaMap['all-ladakh-tour-day1.webp'],
                activity: "Acclimatization and rest",
                description: "Arrival in Leh: Meet at Leh Airport and transfer to the hotel. Rest and Acclimatization: The rest day is for adapting to the high altitude of Leh. Optional Evening Leisure: If sufficiently acclimatized, one can explore Leh market, shove off to Shanti Stupa or pay a visit to the magnificent Leh Palace.",
                overnight: "Hotel in Leh",
            },
            {
                title: "Leh Landmarks: Magnetic Hill & Confluence",
                highestPeak: "11000",
                distance: "60",
                duration: "4-5",
                difficulty: "easy",
                accommodation: [
                    "hotel",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['all-ladakh-tour-day2.webp'],
                activity: "",
                description: "Hall of Fame: A place of honor praising the efforts of the Indian Army in this territory. Gurudwara Pathar Sahib: Another holy site for Sikhs.Magnetic Hill: A visual trick which is not normal as the as the hill has a magnetic pull. Sangam Point: Come across the confluence of the Indus and Zanskar Rivers. Return to Leh: No activities planned for the evening enabling sightseeing of local markets and some rest. ",
                overnight: "Hotel in Leh",
            },
            {
                title: "Cross Khardung La: World's Highest Pass",
                highestPeak: "18380",
                distance: "120",
                duration: "4-5",
                difficulty: "medium",
                accommodation: [
                    "hotel",
                    "resort",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['all-ladakh-tour-day3.webp'],
                activity: null,
                structuredHighlights: [
                    highlightsMap?.['khardung-la-pass']?.id,
                ].filter(Boolean),
                description: "Breakfast and Departure: Take off for Nubra Valley, the Khardung La Pass, one of the highest motor able roads – 18,380 feet. Khardung La: A brief stop to take some photos and allow more time for acclimatizing. Diskit Monastery: Proceed to Diskit Monastery, here stands an eye-catching 32 meter high statue of Maitreya Buddha overlooking the wide valley. Hunder Sand Dunes: Go for a double humped Bactrian camel safari on the Sand dunes of Hunder. ",
                overnight: "Hotel/Resort in Hunder, Nubra Valley",
            },
            {
                title: "Dunes to Blue Water: Shyok Valley Crossing",
                highestPeak: "14270",
                distance: "160",
                duration: "5-6",
                difficulty: "easy",
                accommodation: [
                    "cottage",
                    "camp",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['all-ladakh-tour-day4.webp'],
                activity: null,
                structuredHighlights: [
                    highlightsMap?.['pangong-lake']?.id,
                ].filter(Boolean),
                description: "Breakfast and Departure: Drive to Pangong Lake via Shyok valley. Arrival at Pangong Lake: A time to check in the camp beside the stunning lake famous for its colors. Evening at Leisure: Sit by the lake and click images relaxing in the calming environment.",
                overnight: "Cottage at Pangong Lake",
            },
            {
                title: "Ride to the Stars: Remote Hanle Village",
                highestPeak: "14764",
                distance: "250",
                duration: "6-7",
                difficulty: "hard",
                accommodation: [
                    "cottage",
                    "gh",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['all-ladakh-tour-day5.webp'],
                activity: null,
                description: "Breakfast and Departure: From Chushul village head towards Hanle, all while enjoying the breathtaking views from top of the mountains.Chushul Route: There are several pathways that are not as used but that have remote valleys and mountain passes. Arrival in Hanle: The Hanle village has a guest house or homestay style accommodation. Hanle village is a great place for stargazing. Hanle Observatory (Optional): The Indian Astronomical Observatory which is one of the highest observatories in the world.",
                overnight: "Cottages/G.house in Hanle",
            },
            {
                title: "High Plateau Ride: Hanle to Tso Moriri",
                highestPeak: "14836",
                distance: "160",
                duration: "5-6",
                difficulty: "hard",
                accommodation: [
                    "cottage",
                    "gh",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['all-ladakh-tour-day6.webp'],
                activity: null,
                description: "Breakfast and Departure: Drive to Tso Moriri Lake, one of Ladakh’s most scenic high-altitude lakes.Nyoma and Mahe Bridge: Drive through the small village of Nyoma, crossing Mahe Bridge to reach TsoMoriri. Arrival at Tso Moriri: Check into a lakeside camp, then explore the shores of this beautiful, serene lake. Evening at Leisure: Enjoy the peaceful environment of Tso Moriri, ideal for photography and relaxation.",
                overnight: "Cottages/G.house in Tsomoriri",
            },
            {
                title: "Taglang La: Scenic Return Ride back to Leh",
                highestPeak: "14836",
                distance: "220",
                duration: "5-6",
                difficulty: "hard",
                accommodation: [
                    "hotel",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['all-ladakh-tour-day7.webp'],
                activity: null,
                description: "Journey through high-altitude lakes and passes, return to Leh with scenic views. Breakfast and Departure: Start the scenic drive back to Leh, passing through Tso Kar Lake and Taglang La (17,480 feet). Tso Kar Lake: Brief stop at the salt lake, known for its birdlife and desolate beauty. Taglang La Pass: Enjoy panoramic views from one of the highest motorable passes. Arrival in Leh: Evening at leisure to explore local markets or rest.",
                overnight: "Hotel in Leh",
            },
            {
                title: "Leh Heritage: Monasteries & Royal Palaces",
                highestPeak: "11000",
                distance: "50",
                duration: "2-3",
                difficulty: "easy",
                accommodation: [
                    "hotel",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['all-ladakh-tour-day8.webp'],
                activity: null,
                description: "Optional Exploration: Use this day to rest or explore more sites around Leh.Thiksey Monastery: Known for its resemblance to the Potala Palace and beautiful valley views. Shey Palace: Ancient royal residence with unique Buddha statues. Stok Palace Museum: Insight into Ladakhi royal heritage and artifacts. Leisure: Evening free for last-minute shopping or relaxation.",
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
                description: "Breakfast and Check-Out: Transfer to Leh Airport for departure.Departure with memories of Nubra Valley, Pangong Lake, Hanle, Tso Moriri, and the beautiful landscapes of Ladakh",
                overnight: null,
            },
        ],
        cost: [
            {
                travelMode: "own-bike",
                vehicleProvided: "own-bike",
                costPerPerson: 15500
            },
            {
                travelMode: "solo-rider",
                vehicleProvided: "himalayan-411-bs6",
                costPerPerson: 22500
            },
            {
                travelMode: "dual-ride",
                vehicleProvided: "himalayan-411-bs6",
                costPerPerson: 18500
            },
            {
                travelMode: "seat-in-backup-vehicle",
                vehicleProvided: "isuzu-camper",
                costPerPerson: 17500
            },
            {
                travelMode: "suv",
                vehicleProvided: "innova-xylo",
                costPerPerson: 17500
            }
        ],
        isFeatured: true,
        order: 1,
        startEndCity: "Leh - Leh",
        minCost: "20000",
        cutOutCost: "25000",
        meta: {
            description:
                "Leh to Leh | 960 km Trip  - Hotel, Meal, Transportation, Permit, Guide | All Ladakh Tour - including Khardong La, Nubra Valley, Pangong Lake, Hanle & Tsomoriri Lake. 100% Travellers Satisfaction Guaranteed.",
            image: mediaMap['all-ladakh-tour-twitter.webp'],
            title: "All Ladakh Tour - Tour Package, Leh to Leh | 8N/9D, 960 km - @ ₹20,000/-",
        },
        relatedPosts: [],
        title: "All Ladakh Tour",
    }
}
