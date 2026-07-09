


/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
    mediaMap: Record<string, any>
    author: User
    highlightsMap?: Record<string, any>
    hotelsMap: Record<string, any>
}

export const ladakhTourWithHanle: (args: PostArgs) => RequiredDataFromCollectionSlug<'holidayPackages'> = ({
    mediaMap,
    author,
    highlightsMap,
}) => {
    return {
        slug: "ladakh-tour-with-hanle",
        _status: 'published',
        authors: [author],
        heroImage: mediaMap['ladakh-tour-with-hanle-slide.webp'],
        overviewImage: mediaMap['ladakh-tour-with-hanle-overview-1.webp'],
        duration: "7N/8D",
        distance: "930",
        highestPeak: "18380",
        difficulty: "hard",
        accommodation: [
            "hotel",
            "resort"
        ],
        meal: [
            "breakfast",
            "dinner"
        ],
        gallery: [
            mediaMap['ladakh-tour-with-hanle-overview-2.webp'],
            mediaMap['ladakh-tour-with-hanle-overview-3.webp'],
            mediaMap['ladakh-tour-with-hanle-overview-4.webp'],
            mediaMap['ladakh-tour-with-hanle-overview-5.webp'],
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
                                text: "Ladakh Tour With Hanle is a 8-day holiday packagewhich is a mix of culture, exploration and adventure providing a thorough culture insight to its travelers. It will start with a duration of 2 full days acclimatization in Leh, extending to Nubra Valley sand dunes and Monasteries, Pangong Lake and its appealing water, and Hanle village for its top notch astronomy center and breathtaking night skies Hanle is famous off. Encompassing of all the beautiful locations, it is a perfect fit to people looking for a complete glimpse of Ladakh’s unique culture and natural beauty.",
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
                                text: "The Ladakh Tour with Hanle by Ladakh Moto is an 8-day, 930 km Leh-to-Leh taxi tour covering Nubra Valley, Pangong Lake, Hanle observatory, Khardung La pass, Diskit Monastery, and Hunder camel safari, with hotel/resort stays, breakfast/dinner, permits, and support",
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
                media: mediaMap['ladakh-tour-with-hanle-day1.webp'],
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
                media: mediaMap['ladakh-tour-with-hanle-day2.webp'],
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
                media: mediaMap['ladakh-tour-with-hanle-day3.webp'],
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
                media: mediaMap['ladakh-tour-with-hanle-day4.webp'],
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
                media: mediaMap['ladakh-tour-with-hanle-day5.webp'],
                activity: null,
                description: "Breakfast and Departure: From Chushul village head towards Hanle, all while enjoying the breathtaking views from top of the mountains.Chushul Route: There are several pathways that are not as used but that have remote valleys and mountain passes. Arrival in Hanle: The Hanle village has a guest house or homestay style accommodation. Hanle village is a great place for stargazing. Hanle Observatory (Optional): The Indian Astronomical Observatory which is one of the highest observatories in the world.",
                overnight: "Cottages/G.house in Hanle",
            },
            {
                title: "High Plateau Ride: Return Journey to Leh",
                highestPeak: "14760",
                distance: "250",
                duration: "6-7",
                difficulty: "medium",
                accommodation: [
                    "hotel",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['ladakh-tour-with-hanle-day6.webp'],
                activity: null,
                description: "Breakfast and Departure: Post breakfast, return to Leh through Nyoma and Mahey bridge with a short drive around. Scenic Drive: Desert, mountains and some unique rock formations will accompany us during the trip. Arrival in Leh: Reach during the late afternoon, followed by leisure time in Leh with rest and shopping at the end.",
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
                media: mediaMap['ladakh-tour-with-hanle-day7.webp'],
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
        order: 3,
        startEndCity: "Leh - Leh",
        minCost: "18000",
        cutOutCost: "22000",
        meta: {
            description:
                "Leh to Leh | 930 km Trip  - Hotel, Meal, Transportation, Permit, Guide | All Ladakh Tour - including Khardong La, Nubra Valley, Pangong Lake, Hanle. 100% Travellers Satisfaction Guaranteed.",
            image: mediaMap['ladakh-tour-with-hanle-twitter.webp'],
            title: "Ladakh Tour With Hanle - Tour package, Leh to Leh | 7N/8D, 930 km - @ ₹18,000/-",
        },
        relatedPosts: [],
        title: "Ladakh Tour With Hanle",
    }
}
