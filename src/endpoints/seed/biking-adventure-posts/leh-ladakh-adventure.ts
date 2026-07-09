


/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
    mediaMap: Record<string, any>
    author: User
    highlightsMap?: Record<string, any>
    hotelsMap?: Record<string, any>
}

export const lehLadakhAdventure: (args: PostArgs) => RequiredDataFromCollectionSlug<'bikingAdventures'> = ({
    mediaMap,
    author,
    highlightsMap,
    hotelsMap,
}) => {
    return {
        slug: "leh-ladakh-adventure",
        _status: 'published',
        authors: [author],
        heroImage: mediaMap['leh-ladakh-adventure-slide.webp'],
        duration: "5N/6D",
        distance: "460",
        highestPeak: "18380",
        difficulty: "easy",
        accommodation: [
            "hotel",
            "camp"
        ],
        meal: [
            "breakfast",
            "dinner"
        ],
        overviewImage: mediaMap['leh-ladakh-adventure-overview-1.webp'],
        gallery: [
            mediaMap['leh-ladakh-adventure-overview-2.webp'],
            mediaMap['leh-ladakh-adventure-overview-3.webp'],
            mediaMap['leh-ladakh-adventure-overview-4.webp'],
            mediaMap['leh-ladakh-adventure-overview-5.webp'],
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
                                text: "Leh Ladakh Adventure is a 6-day tour will take you on a motorbike trip across the stunning sceneries of Ladakh, including the gorgeous Nubra Valley and enchanting Pangong Lake. Get ready for an incredible adventure experience filled with leisurely rides, cultural visits, and once in a lifetime experiences of bike tour in the Himalayan region.",
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
        highlights: [],
        summary: {
            root: {
                children: [
                    {
                        children: [
                            {
                                detail: 0,
                                format: 0,
                                mode: "normal",
                                text: "This bike tour package combines high-altitude adventure with serene cultural exploration, making it perfect for motor biking enthusiasts looking to challenge themselves while experiencing the beauty of Ladakh.",
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
                title: "Welcome to Leh: High Altitude Acclimatization",
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
                media: mediaMap['leh-ladakh-adventure-day1.webp'],
                structuredHighlights: [
                    highlightsMap?.['acclimatization']?.id,
                    highlightsMap?.['leh-market']?.id,
                ].filter(Boolean),
                activity: "Bike Checkup, acclimatization and rest",
                description: "For your convenience, we recommend that clients arrange their taxi to reach Leh hotel. Once you arrive at Leh, please get to the designated hotel, where our team will be ready to welcome you. We can provide guidance on trusted taxi services if needed, ensuring a smooth and hassle-free journey to the hotel. Spend the day acclimatizing to Leh's high altitude. Take a light walk around Leh Market, or, if you feel comfortable, visit Leh Palace for panoramic town views.",
                overnight: "Hotel in Leh",
                hotel: hotelsMap?.['mandalchan-hotel']?.id,
            },
            {
                title: "Explore Leh: Magnetic Hill, Gurudwara, Stupa & Palace",
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
                media: mediaMap['leh-ladakh-adventure-day2.webp'],
                structuredHighlights: [
                    highlightsMap?.['shanti-stupa']?.id,
                    highlightsMap?.['leh-palace']?.id,
                    highlightsMap?.['magnetic-hill']?.id,
                    highlightsMap?.['hall-of-fame']?.id,
                    highlightsMap?.['pathar-sahib']?.id,
                ].filter(Boolean),
                activity: "",
                description: "After your breakfast today, ride to visit the Magnetic Hill which is also enthralling as it generates an illusion and on the way visit Gurudwara Pathar Sahib which is a serene Sikh shrine. Later, visit out the Shanti Stupa to take stunning views of the Leh town and then venture out to the UNESCO recognized Leh Palace. End your day with a trip to the Hall of Fame, a memorial for the Indian Army and recollects the history with its specific gallery.",
                overnight: "Hotel in Leh",
                hotel: hotelsMap?.['mandalchan-hotel']?.id,
            },
            {
                title: "Conquer Khardung La: World's Highest Motorable Pass",
                highestPeak: "18380",
                distance: "120",
                duration: "4-5",
                difficulty: "easy",
                accommodation: [
                    "hotel",
                    "camp",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['leh-ladakh-adventure-day3.webp'],
                structuredHighlights: [
                    highlightsMap?.['khardong-la-pass']?.id,
                    highlightsMap?.['diskit-monastery']?.id,
                    highlightsMap?.['hunder-sand-dunes']?.id,
                ].filter(Boolean),
                activity: null,
                description: "This trip will take you to the highest point on the route, Khardung La (one of the highest passes in the world). After crossing the pass, you will ride towards the beautiful valley of Nubra. You can visit the Diskit Monastery, which has a large Maitreya Buddha statue. After that, you will continue your trip to the Hunder Sand Dunes, where you could ride camels that have two humps, known as Bactrian camels.",
                overnight: "Camps/Guesthouse in Hunder, Nubra Valley",
                hotel: hotelsMap?.['fossil-resort']?.id,
            },
            {
                title: "From Sand Dunes to Blue Waters: Crossing the Shyok Valley",
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
                media: mediaMap['leh-ladakh-adventure-day4.webp'],
                structuredHighlights: [
                    highlightsMap?.['shyok-river']?.id,
                    highlightsMap?.['pangong-lake']?.id,
                ].filter(Boolean),
                activity: null,
                description: "So, Prepare for a spectacular trip that will take you along the breathtaking and exciting route of the Shyok river to reach the exquisite Pangong Lake. The trip will take you across rough mountain landscapes and periodically tiny rural settlements of the Ladakhi people. Before long, once you have reached the lake, you will see its numerous blue waters gets refracted and scattered by sunlight. The lake is spread across of India and Tibet and ranks among the highest salt water lakes in the world.",
                overnight: "Cottage at Pangong Lake",
                hotel: hotelsMap?.['mountain-chalet']?.id,
            },
            {
                title: "Crossing Changla Pass: Journey Back to Leh",
                highestPeak: "17688",
                distance: "140",
                duration: "4-5",
                difficulty: "easy",
                accommodation: [
                    "hotel",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['leh-ladakh-adventure-day5.webp'],
                structuredHighlights: [
                    highlightsMap?.['chang-la-pass']?.id,
                    highlightsMap?.['thiksey-monastery']?.id,
                ].filter(Boolean),
                activity: null,
                description: "The return trip to Leh may commence after breakfast, during which you will get to cross Changla Pass, one of the Highest passes and it is also possible to stop for some sightseeing including one of the best monasteries in Ladakh, Thiksey Monastery which is beautiful in its architecture style and its surrounding views. Proceed with riding back to Leh and this time you could opt for some rest and sightseeing for all the places that you might have left earlier. Look forward to enjoying a farewell dinner whilst reminiscing all the good times you had in this bike tour.",
                overnight: "Hotel in Leh",
                hotel: hotelsMap?.['mandalchan-hotel']?.id,
            },
            {
                title: "Farewell Ladakh: Final Departure from Leh",
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
                start: "2026-06-20T11:30:00.000Z",
                end: "2026-06-25T11:30:00.000Z",
                status: "closed"
            },

            {
                start: "2026-06-27T11:30:00.000Z",
                end: "2026-07-02T11:30:00.000Z",
                status: "closing-soon"
            },

            {
                start: "2026-07-04T11:30:00.000Z",
                end: "2026-07-09T11:30:00.000Z",
                status: "closing-soon"
            },

            {
                start: "2026-07-11T11:30:00.000Z",
                end: "2026-07-16T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2026-07-18T11:30:00.000Z",
                end: "2026-07-23T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2026-07-25T11:30:00.000Z",
                end: "2026-07-30T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2026-08-01T11:30:00.000Z",
                end: "2026-08-06T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2026-08-08T11:30:00.000Z",
                end: "2026-08-13T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2026-08-15T11:30:00.000Z",
                end: "2026-08-20T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2026-08-22T11:30:00.000Z",
                end: "2026-08-27T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2026-08-28T11:30:00.000Z",
                end: "2026-09-02T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2026-09-05T11:30:00.000Z",
                end: "2026-09-10T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2026-09-12T11:30:00.000Z",
                end: "2026-09-17T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2026-09-19T11:30:00.000Z",
                end: "2026-09-24T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2026-09-26T11:30:00.000Z",
                end: "2026-10-01T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2027-04-17T11:30:00.000Z",
                end: "2027-04-22T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2027-04-24T11:30:00.000Z",
                end: "2027-04-29T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2027-05-01T11:30:00.000Z",
                end: "2027-05-06T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2027-05-08T11:30:00.000Z",
                end: "2027-05-13T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2027-05-15T11:30:00.000Z",
                end: "2027-05-20T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2027-05-29T11:30:00.000Z",
                end: "2027-06-03T11:30:00.000Z",
                status: "open"
            }
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
        privateRoomUpgrade: '4500',
        bikeUpgrade: '8000',
        isFeatured: true,
        order: 1,
        startEndCity: "Leh - Leh",
        minCost: "15500",
        cutOutCost: "21000",
        meta: {
            description:
                "Leh to Leh, 550 km tour, Himalayan 411cc BSVI bike - Hotel, Meal, Fuel & Mechanic included | Khardongla, Nubra & Pangong. 100% SATISFACTION GUARANTEED",
            image: mediaMap['leh-ladakh-adventure-twitter.webp'],
            title: "Leh Ladakh Adventure | 6 Day, 550 km, 411cc BSVI @ ₹15,500",
        },
        relatedPosts: [],
        title: "Leh Ladakh Adventure",
    }
}
