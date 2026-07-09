


/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
    mediaMap: Record<string, any>
    author: User
    highlightsMap?: Record<string, any>
    hotelsMap: Record<string, any>
}

export const amazingLadakhTour: (args: PostArgs) => RequiredDataFromCollectionSlug<'holidayPackages'> = ({
    mediaMap,
    author,
    highlightsMap,
}) => {
    return {
        slug: "amazing-ladakh-tour",
        _status: 'published',
        authors: [author],
        heroImage: mediaMap['amazing-ladakh-tour-slide.webp'],
        overviewImage: mediaMap['amazing-ladakh-tour-overview-1.webp'],
        duration: "5N/6D",
        distance: "530",
        highestPeak: "18380",
        difficulty: "medium",
        accommodation: [
            "hotel",
            "resort"
        ],
        meal: [
            "breakfast",
            "dinner"
        ],
        gallery: [
            mediaMap['amazing-ladakh-tour-overview-2.webp'],
            mediaMap['amazing-ladakh-tour-overview-3.webp'],
            mediaMap['amazing-ladakh-tour-overview-4.webp'],
            mediaMap['amazing-ladakh-tour-overview-5.webp'],
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
                                text: "Amazing Ladakh Tour is a 6-day tour package in Ladakh which is an ideal holiday package for individuals trying to explore the beauty of Ladakh’s regions and its culture. It includes travel tours through the Nubra Valley via Khardung La Pass, Pangong Lake, visit to monasteries and deserts. One can imagine such a vast region to have so much to offer, from tours to comfortable hotels.",
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
                                text: "The Amazing Ladakh Tour by Ladakh Moto is a 6-day, 530 km Leh-to-Leh taxi tour exploring Nubra Valley via Khardung La, Pangong Lake, monasteries, and Hunder dunes with camel safari, featuring hotel/camp stays, breakfast/dinner, permits, and support included.",
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
                media: mediaMap['amazing-ladakh-tour-day1.webp'],
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
                media: mediaMap['amazing-ladakh-tour-day2.webp'],
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
                media: mediaMap['amazing-ladakh-tour-day3.webp'],
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
                media: mediaMap['amazing-ladakh-tour-day4.webp'],
                activity: null,
                structuredHighlights: [
                    highlightsMap?.['pangong-lake']?.id,
                ].filter(Boolean),
                description: "Breakfast and Departure: Drive to Pangong Lake via Shyok valley. Arrival at Pangong Lake: A time to check in the camp beside the stunning lake famous for its colors. Evening at Leisure: Sit by the lake and click images relaxing in the calming environment.",
                overnight: "Cottage at Pangong Lake",
            },
            {
                title: "Chang La Challenge: Return Ride to Leh",
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
                media: mediaMap['amazing-ladakh-tour-day5.webp'],
                activity: null,
                description: "Breakfast and Departure: Drive back to Leh via Chang La Pass (17,688 ft) after enjoying breakfast. Hemis Monastery: Discover ancient sculptures and detailed paintings by visiting one of the oldest and the wealthiest monastery in Ladakh, Hemis Monastery. Thiksey Monastery (Optional): In addition, admire the great panoramas of the Indus Valley from the Thiksey Monastery located on a hilltop.",
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
        order: 2,
        startEndCity: "Leh - Leh",
        minCost: "12500",
        cutOutCost: "18000",
        meta: {
            description:
                "Leh to Leh | 530 km Trip  - Hotel, Meal, Transportation, Permit, Guide | Amazing Ladakh Tour - including Khardong La, Nubra Valley, Pangong Lake. 100% Travellers Satisfaction Guaranteed.",
            image: mediaMap['amazing-ladakh-tour-twitter.webp'],
            title: "Amazing Ladakh Tour - Tour Package, Leh to Leh | 5N/6D, 530 km - @ ₹12,500/-",
        },
        relatedPosts: [],
        title: "Amazing Ladakh Tour",
    }
}
