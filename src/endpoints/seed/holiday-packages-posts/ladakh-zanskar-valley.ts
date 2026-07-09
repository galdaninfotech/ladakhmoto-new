


/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
    mediaMap: Record<string, any>
    author: User
    highlightsMap?: Record<string, any>
    hotelsMap: Record<string, any>
}


export const ladakhZanskarValley: (args: PostArgs) => RequiredDataFromCollectionSlug<'holidayPackages'> = ({
    mediaMap,
    author,
    highlightsMap,
}) => {
    return {
        slug: "ladakh-zanskar-valley",
        _status: 'published',
        authors: [author],
        heroImage: mediaMap['ladakh-zanskar-valley-slide.webp'],
        overviewImage: mediaMap['ladakh-zanskar-valley-overview-1.webp'],
        duration: "10N/11D",
        distance: "1360",
        highestPeak: "17688",
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
            mediaMap['ladakh-zanskar-valley-overview-2.webp'],
            mediaMap['ladakh-zanskar-valley-overview-3.webp'],
            mediaMap['ladakh-zanskar-valley-overview-4.webp'],
            mediaMap['ladakh-zanskar-valley-overview-5.webp'],
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
                                text: "The culture and the beauty of Ladakh and the Zanskar Valley can be experienced during this 11-day Leh Ladakh holiday package. The entire excursion starts with two days of sightseeing and acclimatization in Leh. You will then travel to the isolated Zanskar Valley which comprises of ancient monasteries, splendid villages and picturesque views. Encounters with high passes, traditional Ladakhi cultures, expansive landscapes of Zanskar makes this one an excellent fit for thrill-seekers and those interested in deep-rooted cultures.",
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
                                text: "The Ladakh Zanskar Valley Tour by Ladakh Moto is an 11-day, 1360 km Leh-to-Leh taxi tour exploring Nubra Valley, Pangong Lake, remote Zanskar Valley with ancient monasteries and villages, high passes, and scenic landscapes, with hotel stays, breakfast/dinner, permits, and support included.",
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
                title: "Arrival in Leh",
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
                media: mediaMap['ladakh-zanskar-valley-day1.webp'],
                activity: "Acclimatization and rest",
                description: "Arrival in Leh: Meet at Leh Airport and transfer to the hotel. Rest and Acclimatization: The rest day is for adapting to the high altitude of Leh. Optional Evening Leisure: If sufficiently acclimatized, one can explore Leh market, shove off to Shanti Stupa or pay a visit to the magnificent Leh Palace.",
                overnight: "Hotel in Leh",
            },
            {
                title: "Local Sightseeing in Leh",
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
                media: mediaMap['ladakh-zanskar-valley-day2.webp'],
                activity: "",
                description: "Thiksey Monastery: A stunning hilltop monastery resembling the Potala Palace, known for its giant Maitreya Buddha statue and panoramic views of the Indus Valley. Shey Palace: The former royal summer residence, featuring a massive copper and gold Buddha statue and picturesque surroundings. Hemis Monastery: The largest and wealthiest monastery in Ladakh, famous for its vibrant annual festival and historic Buddhist relics. Return to Leh: No activities planned for the evening enabling sightseeing of local markets and some rest.",
                overnight: "Hotel in Leh",
            },
            {
                title: "Leh to Kargil via Lamayuru",
                highestPeak: "13478",
                distance: "210",
                duration: "5-6",
                difficulty: "medium",
                accommodation: [
                    "hotel",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['ladakh-zanskar-valley-day3.webp'],
                activity: null,
                description: "Breakfast and Departure: Enjoy your drive to Kargil through Lamayuru and Alchi Monasteries. Lamayuru Monastery: Visit the old age monastery and see the unique “moonland” that is quite famous for its peculiar shaped rocks. Alchi Monastery: Proceed towards Alchi- one of the oldest monasteries in Ladakh famous for its unique Indo-Tibetan art.",
                overnight: "Hotel/Resort in Kargil",
            },
            {
                title: "Kargil to Padum",
                highestPeak: "14500",
                distance: "240",
                duration: "6-7",
                difficulty: "hard",
                accommodation: [
                    "hotel",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['ladakh-zanskar-valley-day4.webp'],
                activity: null,
                description: "Breakfast and Departure: Begin the long and scenic drive to Padum, the heart of Zanskar Valley. Suru Valley: Drive through the lush Suru Valley, passing views of the Nun-Kun Peaks. Rangdum Monastery: Stop at Rangdum, a remote monastery with panoramic mountain views.",
                overnight: "Hotel/resort in Padum",
            },
            {
                title: "Padum - Zangskar valley Exploration",
                highestPeak: "12040",
                distance: "80",
                duration: "5-6",
                difficulty: "easy",
                accommodation: [
                    "cottage",
                    "hotel",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['ladakh-zanskar-valley-day5.webp'],
                activity: null,
                description: "Breakfast and Departure: Begin the long and scenic drive to Padum, the heart of Zanskar Valley. Suru Valley: Drive through the lush Suru Valley, passing views of the Nun-Kun Peaks. Rangdum Monastery: Stop at Rangdum, a remote monastery with panoramic mountain views. ",
                overnight: "Hotel/resort in Padum",
            },
            {
                title: "Padum to Lamayuru via Lingshed village",
                highestPeak: "12040",
                distance: "110",
                duration: "4-5",
                difficulty: "hard",
                accommodation: [
                    "hotel",
                    "gh",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['ladakh-zanskar-valley-day6.webp'],
                activity: null,
                description: "Breakfast and Departure: Depart from Padum early, enjoying the serene morning views of the Zanskar Valley. Lingshed Village, a remote and tranquil hamlet known for its ancient monastery and traditional Ladakhi culture. Cross Singe - La Pass, a very high remote pass. Reach Lamayuru, home to the iconic Lamayuru Monastery, often called the Moonland due to its unique lunar-like terrain.",
                overnight: "Hotel/Guest house in Lamayuru",
            },
            {
                title: "Lamayuru to Leh",
                highestPeak: "12040",
                distance: "110",
                duration: "4-5",
                difficulty: "easy",
                accommodation: [
                    "hotel",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['ladakh-zanskar-valley-day7.webp'],
                activity: null,
                description: "Early Breakfast and Departure: Begin the scenic journey back to Leh, with stops for photos and relaxation. Drive via Indus Valley: Enjoy one last look at Indus Valley’s lush greenery and mountain peaks. Arrival in Leh: Arrive in Leh in the evening with time to rest.",
                overnight: "Hotel in Leh",
            },
            {
                title: "Rest day or optional local sightseeing",
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
                media: mediaMap['ladakh-zanskar-valley-day8.webp'],
                activity: null,
                description: "Optional Exploration: Use this day to rest or explore more sites around Leh.Thiksey Monastery: Known for its resemblance to the Potala Palace and beautiful valley views. Shey Palace: Ancient royal residence with unique Buddha statues. Stok Palace Museum: Insight into Ladakhi royal heritage and artifacts. Leisure: Evening free for last-minute shopping or relaxation.",
                overnight: "Hotel in Leh",
            },
            {
                title: "Leh to Pangong Lake",
                highestPeak: "17688",
                distance: "160",
                duration: "5-6",
                difficulty: "hard",
                accommodation: [
                    "cottage",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['ladakh-zanskar-valley-day9.webp'],
                activity: null,
                structuredHighlights: [
                    highlightsMap?.['pangong-lake']?.id,
                ].filter(Boolean),
                description: "Breakfast and Departure: Drive to Pangong Lake via Chang La Pass (17,688 ft) after enjoying breakfast. Arrival at Pangong Lake: Check into a lakeside cottage, with time to explore the mesmerizing lake and its changing hues. Evening at Leisure: Relax by the lake, take photos, and enjoy the peaceful surroundings.",
                overnight: " Cottage in Pangong",
            },
            {
                title: "Pangong Lake to Leh via Changla Pass",
                highestPeak: "17688",
                distance: "150",
                duration: "5-6",
                difficulty: "medium",
                accommodation: [
                    "hotel",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['ladakh-zanskar-valley-day10.webp'],
                activity: null,
                description: "Breakfast and Departure: Drive back to Leh via Chang La Pass (17,688 ft) after enjoying breakfast. Hemis Monastery: Discover ancient sculptures and detailed paintings by visiting one of the oldest and the wealthiest monastery in Ladakh, Hemis Monastery. Thiksey Monastery (Optional): In addition, admire the great panoramas of the Indus Valley from the Thiksey Monastery located on a hilltop.",
                overnight: "Hotel in Leh",
            },
            {
                title: "Departure From Leh",
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
        order: 4,
        startEndCity: "Leh - Leh",
        minCost: "18200",
        cutOutCost: "22500",
        meta: {
            description:
                "Leh to Leh | 1360 km trip  - Hotel, Meal, Transportation, Permit, Guide | All Ladakh Tour - including Leh, Kargil, Lamayuru, Padum, Phukthal monastery & Pangong Lake . 100% Travellers Satisfaction Guaranteed.",
            image: mediaMap['ladakh-zanskar-valley-twitter.webp'],
            title: "Ladakh Zanskar Valley Tour - Tour package, Leh to Leh | 10N/11D, 1360 km - @ ₹18,200/-",
        },
        relatedPosts: [],
        title: "Ladakh Zanskar Valley",
    }
}
