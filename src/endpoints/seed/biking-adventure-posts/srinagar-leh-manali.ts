


/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
    mediaMap: Record<string, any>
    author: User
    highlightsMap?: Record<string, any>
    hotelsMap?: Record<string, any>
}

export const srinagarLehManali: (args: PostArgs) => RequiredDataFromCollectionSlug<'bikingAdventures'> = ({
    mediaMap,
    author,
    highlightsMap,
    hotelsMap,
}) => {
    return {
        slug: "srinagar-leh-manali",
        _status: 'published',
        authors: [author],
        heroImage: mediaMap['srinagar-leh-manali-slide.webp'],
        overviewImage: mediaMap['srinagar-leh-manali-overview-1.webp'],
        duration: "9N/10D",
        distance: "1525",
        highestPeak: "18380",
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
            mediaMap['srinagar-leh-manali-overview-2.webp'],
            mediaMap['srinagar-leh-manali-overview-3.webp'],
            mediaMap['srinagar-leh-manali-overview-4.webp'],
            mediaMap['srinagar-leh-manali-overview-5.webp'],
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
                                text: "Srinagar Leh Manali is a 10-day tour that takes us through the great Himalayan mountain ranges. Beginning with the beautiful city of Srinagar, one will conquer the highest motorable passes, the beautiful lakes and remote Ladakh villages. The trip is tailor-made for explorers and thrill-seekers as it combines exciting rides, unforgettable cultural experiences, and some of the finest sights in the world. This is not merely just a ride, but an adventure through the high passes, serene plains, silent lakes, old aged monasteries and the twinkling stars in the skies of Pangong.",
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
                                text: "This Srinagar Leh Manali motorbiking tour is a harmonious combination of thrill, picturesque landscapes and diverse cultures, crafted specifically for expert bikers who have the epic desire to travel in one of the most remote and breathtaking areas of the globe.",
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
                title: "Welcome to Srinagar: Altitude Acclimatization",
                highestPeak: "5200",
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
                media: mediaMap['srinagar-leh-manali-day1.webp'],
                structuredHighlights: [
                    highlightsMap?.['acclimatization']?.id,
                    highlightsMap?.['dal-lake']?.id,
                    highlightsMap?.['mughal-gardens']?.id,
                ].filter(Boolean),
                activity: "Bike check-up, Acclimatization and Local Sightseeing",
                description: "Arrival in Srinagar and take a day for the body to get used to the changes in altitude. After checking in your hotel, you will be escorted to your bikes where you will receive safety instructions and briefing for the tour. In the afternoon, you are free to visit a few of the local sites such as Dal Lake, the Mughal Gardens, and take a Shikara ride.",
                overnight: "Hotel in Srinagar",
                hotel: hotelsMap?.['asia-park-hotel']?.id,
            },
            {
                title: "Zoji La Challenge: Ride to the Kargil town",
                highestPeak: "11575",
                distance: "202",
                duration: "5-6",
                difficulty: "hard",
                accommodation: [
                    "hotel",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['srinagar-leh-manali-day2.webp'],
                structuredHighlights: [
                    highlightsMap?.['zojila-pass']?.id,
                    highlightsMap?.['drass']?.id,
                    highlightsMap?.['sonmarg']?.id,
                ].filter(Boolean),
                activity: "",
                description: "The adventure begins with a ride through the famous Zoji La pass, offering stunning views of the Himalayan mountain range. After crossing the pass, you'll descend into the Drass Valley, the second coldest place on earth, and continue to Kargil town. The ride is thrilling, with changing landscapes from green valleys to barren high-altitude deserts.",
                overnight: "Hotel in Kargil",
                hotel: hotelsMap?.['royal-gasho-hotel']?.id,
            },
            {
                title: "Moonland Terrain: Crossing Namika La and Fotu La to Leh",
                highestPeak: "13479",
                distance: "216",
                duration: "5-6",
                difficulty: "medium",
                accommodation: [
                    "hotel",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['srinagar-leh-manali-day3.webp'],
                structuredHighlights: [
                    highlightsMap?.['namkila-pass']?.id,
                    highlightsMap?.['fotula-pass']?.id,
                    highlightsMap?.['indus-valley']?.id,
                    highlightsMap?.['lamayuru-monastery']?.id,
                ].filter(Boolean),
                activity: null,
                description: "After breakfast, head towards Leh, riding through stunning landscapes and crossing Namika La and Fotu La. The route offers breathtaking views of the mountains and valleys. Visit the ancient Lamayuru Monastery and the Magnetic Hill, known for its gravity-defying illusion. Arrive in Leh by evening.",
                overnight: "Hotel in Leh",
                hotel: hotelsMap?.['mandalchan-hotel']?.id,
            },
            {
                title: "Cross Khardung La: World's Highest Pass",
                highestPeak: "18380",
                distance: "120",
                duration: "4-5",
                difficulty: "easy",
                accommodation: [
                    "gh",
                    "camp",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['srinagar-leh-manali-day4.webp'],
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
                title: "Turtuk Village: Ride to the Border",
                highestPeak: "10000",
                distance: "170",
                duration: "4-5",
                difficulty: "medium",
                accommodation: [
                    "camp",
                    "gh",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['srinagar-leh-manali-day5.webp'],
                structuredHighlights: [
                    highlightsMap?.['turtuk-village']?.id,
                    highlightsMap?.['indo-pak-border-thang']?.id,
                    highlightsMap?.['balti-culture']?.id,
                ].filter(Boolean),
                activity: null,
                description: "Today, we will go on an excursion to Turtuk, a remote and isolated village located close to the protected India Pakistan border, which is culturally diverse. Turtuk portrays the vividness of esteemed culture of balti, which is quite different from rest of Ladakh. This part of the ride lets you explore the village, interact with locals, and savor the views of the Apricot orchid's farms before heading back to Hunder for an overnight stay.",
                overnight: "Camp/Guesthouse in Hunder, Nubra valley",
                hotel: hotelsMap?.['fossil-resort']?.id,
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
                media: mediaMap['srinagar-leh-manali-day6.webp'],
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
                title: "Chang La Challenge: Return Ride to Leh",
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
                media: mediaMap['srinagar-leh-manali-day7.webp'],
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
                title: "Gata Loops: Crossing Tanglang La to Serchu",
                highestPeak: "17582",
                distance: "251",
                duration: "5-6",
                difficulty: "hard",
                accommodation: [
                    "camp",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['srinagar-leh-manali-day8.webp'],
                structuredHighlights: [
                    highlightsMap?.['gata-loops']?.id,
                    highlightsMap?.['tanglangla-pass']?.id,
                ].filter(Boolean),
                activity: null,
                description: "After breakfast, head towards Serchu, riding through stunning landscapes and crossing Tanglang La. The route offers breathtaking views of the mountains and valleys. The hairpin bends (Gata Loops) on the Leh to Manali route offer a thrilling and challenging ride, winding through steep mountainsides with dramatic views of the surrounding valleys. Overnight stay in Serchu.",
                overnight: "Camp in Serchu",
                hotel: hotelsMap?.['gold-drop-camp']?.id,
            },
            {
                title: "Atal Tunnel: Ride into Manali Valley",
                highestPeak: "16575",
                distance: "223",
                duration: "5-6",
                difficulty: "medium",
                accommodation: [
                    "hotel",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['srinagar-leh-manali-day9.webp'],
                structuredHighlights: [
                    highlightsMap?.['baralacha-la-pass']?.id,
                    highlightsMap?.['atal-tunnel']?.id,
                    highlightsMap?.['keylong']?.id,
                ].filter(Boolean),
                activity: null,
                description: "The final day of riding takes you over the majestic Baralacha La Pass and through the famous Atal Tunnel. The transition from the barren high-altitude desert to the lush green hills of Manali is truly spectacular. Arrive in Manali by evening and celebrate the completion of your epic journey. Look forward to enjoying a farewell dinner whilst reminiscing all the good times you had in your tour.",
                overnight: "Hotel in Manali",
                hotel: hotelsMap?.['kenilworth-international']?.id,
            },
            {
                title: "Farewell Manali: Transfer to Manali Bus Stand",
                highestPeak: null,
                distance: null,
                duration: null,
                difficulty: null,
                accommodation: [],
                meal: [],
                activity: null,
                description: "After breakfast, bid farewell to the mesmerizing landscapes of Ladakh and Himachal. Transfer to Manali Bus Stand for your onward journey, carrying with you unforgettable memories of your motor biking adventure package across the Himalayas.",
                overnight: null,
            },
        ],
        dates: [
            {
                start: "2026-06-30T11:30:00.000Z",
                end: "2026-07-09T11:30:00.000Z",
                status: "closing-soon"
            },

            {
                start: "2026-07-20T11:30:00.000Z",
                end: "2026-07-29T11:30:00.000Z",
                status: "closing-soon"
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
            }
        ],
        cost: [
            {
                travelMode: "own-bike",
                vehicleProvided: "own-bike",
                costPerPerson: 23000
            },
            {
                travelMode: "solo-rider",
                vehicleProvided: "himalayan-411-bs6",
                costPerPerson: 43000
            },
            {
                travelMode: "dual-ride",
                vehicleProvided: "himalayan-411-bs6",
                costPerPerson: 33000
            },
            {
                travelMode: "seat-in-backup-vehicle",
                vehicleProvided: "isuzu-camper",
                costPerPerson: 35500
            },
            {
                travelMode: "suv",
                vehicleProvided: "innova-xylo",
                costPerPerson: 35500
            }
        ],
        privateRoomUpgrade: '10000',
        bikeUpgrade: '15000',
        isFeatured: true,
        order: 4,
        startEndCity: "Srinagar - Manali",
        minCost: "23000",
        cutOutCost: "29000",
        meta: {
            description:
                "1525 km trip - Hotel, Meal, Fuel & Mechanic included | Srinagar, Kargil, Leh, Khardong la, Nubra, Turtuk, Pangong, & Manali. SATISFACTION GUARANTEED",
            image: mediaMap['srinagar-leh-manali-twitter.webp'],
            title: "Srinagar Leh Manali | 10 Day, 1525 km, 411 BSVI @ ₹23,000/-",
        },
        relatedPosts: [],
        title: "Srinagar Leh Manali",
    }
}
