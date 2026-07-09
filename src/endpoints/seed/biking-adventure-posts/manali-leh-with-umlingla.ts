


/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
    mediaMap: Record<string, any>
    author: User
    highlightsMap?: Record<string, any>
    hotelsMap?: Record<string, any>
}

export const manaliLehWithUmlingla: (args: PostArgs) => RequiredDataFromCollectionSlug<'bikingAdventures'> = ({
    mediaMap,
    author,
    highlightsMap,
    hotelsMap,
}) => {
    return {
        slug: "manali-leh-with-umlingla",
        _status: 'published',
        authors: [author],
        heroImage: mediaMap['manali-leh-with-umlingla-slide.webp'],
        overviewImage: mediaMap['manali-leh-with-umlingla-overview-1.webp'],
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
            mediaMap['manali-leh-with-umlingla-overview-2.webp'],
            mediaMap['manali-leh-with-umlingla-overview-3.webp'],
            mediaMap['manali-leh-with-umlingla-overview-4.webp'],
            mediaMap['manali-leh-with-umlingla-overview-5.webp'],
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
                                text: "Manali Leh With Umlingla, an exciting motorbiking journey, will take us through the great Himalayan mountain ranges. Beginning with the lush green hills and valleys of Manali, one will conquer the highest motorable passes, the beautiful lakes and remote Ladakh villages. The trip is tailor-made for explorers and thrill-seekers as it combines exciting rides, unforgettable cultural experiences, and some of the finest sights in the world. This is not merely just a ride, but an adventure through the high pray, serene plains, silent lakes, old aged monasteries and the twinkling stars in the skies of Pangong",
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
                                text: "This Manali Leh With Umlingla motorbiking tour is a harmonious combination of thrill, picturesque landscapes and diverse cultures, crafted specifically for expert bikers who have the epic desire to travel in one of the most remote and breathtaking areas of the globe.",
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
                title: "Welcome to Manali: Altitude Acclimatization",
                highestPeak: "6725",
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
                media: mediaMap['manali-leh-with-umlingla-day1.webp'],
                structuredHighlights: [
                    highlightsMap?.['acclimatization']?.id,
                    highlightsMap?.['mall-road']?.id,
                    highlightsMap?.['hadimba-temple']?.id,
                ].filter(Boolean),
                activity: "Bike check-up, Acclimatization and Local Sightseeing",
                description: "Arrival in Manali and take a day for the body to get used to the changes in altitude. After checking in your hotel, you will be escorted to your bikes where you will receive safety instructions and briefing for the tour. In the afternoon, you are free to visit a few of the local sites such as Mall Road, the Hadimba Temple, and the Vashisht Hot Springs.",
                overnight: "Hotel in Manali",
                hotel: hotelsMap?.['kenilworth-international']?.id,
            },
            {
                title: "Atal Tunnel: Ride to the Serchu High Desert",
                highestPeak: "16575",
                distance: "223",
                duration: "4-5",
                difficulty: "medium",
                accommodation: [
                    "camp",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['manali-leh-with-umlingla-day2.webp'],
                structuredHighlights: [
                    highlightsMap?.['baralacha-la-pass']?.id,
                    highlightsMap?.['atal-tunnel']?.id,
                    highlightsMap?.['keylong']?.id,
                ].filter(Boolean),
                activity: "",
                description: "The adventure begins with a ride through the famous Atal tunnel, offering stunning views of the lush Kullu Valley. After crossing the tunnel, you'll descend into the Lahaul Valley, passing Keylong, and continue the ascent to the majestic Baralacha La Pass. The ride is thrilling, with changing landscapes from green valleys to barren high-altitude deserts.",
                overnight: "Camp in Serchu",
                hotel: hotelsMap?.['golddrop-camp']?.id,
            },
            {
                title: "Gata Loops: Crossing Tanglang La to Leh",
                highestPeak: "17582",
                distance: "251",
                duration: "5-6",
                difficulty: "hard",
                accommodation: [
                    "hotel",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['manali-leh-with-umlingla-day3.webp'],
                structuredHighlights: [
                    highlightsMap?.['tanglangla-pass']?.id,
                    highlightsMap?.['gata-loops']?.id,
                ].filter(Boolean),
                activity: null,
                description: "After breakfast, head towards Leh, riding through stunning landscapes and crossing Tanglang la. The route offers breathtaking views of the mountains and valleys. The hairpin bends (Gataloops) on the Manali to Leh route offer a thrilling and challenging ride, winding through steep mountainsides with dramatic views of the surrounding valleys.",
                overnight: " Hotel in Leh",
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
                media: mediaMap['manali-leh-with-umlingla-day4.webp'],
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
                media: mediaMap['manali-leh-with-umlingla-day5.webp'],
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
                media: mediaMap['manali-leh-with-umlingla-day6.webp'],
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
                title: "Ride to the Stars: Remote Hanle Village",
                highestPeak: "17842",
                distance: "230",
                duration: "6-7",
                difficulty: "medium",
                accommodation: [
                    "camp",
                    "home-stay",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['manali-leh-with-umlingla-day7.webp'],
                structuredHighlights: [
                    highlightsMap?.['changthang-plateau']?.id,
                    highlightsMap?.['remote-village-hanle']?.id,
                    highlightsMap?.['hanle-observatory']?.id,
                ].filter(Boolean),
                activity: null,
                description: "Start your trip to Hanle, one of the most isolated places in Ladakh. You will ride through the arid Changthang Plateau which is known for the expansive scenery and some wildlife. Arriving at Hanle, the ones who are fond of astronomy may visit the Hanle Telescope, among the highest telescopes in the world. To sum up, Hanle is a small undisturbed quiet village with clear dark nights ideal for stargazing and away from the tourist crowd.",
                overnight: "Camp/Home-stay in Hanle",
                hotel: hotelsMap?.['gua-homestay']?.id,
            },
            {
                title: "Umling La: Reaching the 19,024ft Peak",
                highestPeak: "19024",
                distance: "150",
                duration: "5-6",
                difficulty: "hard",
                accommodation: [
                    "camp",
                    "home-stay",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['manali-leh-with-umlingla-day8.webp'],
                structuredHighlights: [
                    highlightsMap?.['umlingla-pass']?.id,
                ].filter(Boolean),
                activity: null,
                description: "Today is among the most difficult and exciting days of this tour. Ride up to Umling La Pass which has the distinction of being the highest motor able road in the whole world which stands at an astounding 19,024 feet. The ascent towards the Umling La pass is not easy with high altitudes and harsh weather conditions but once on top, you can see some great views. After reaching the top, ride back to Hanle and enjoy your evening.",
                overnight: "Camp/Home-stay in Hanle",
                hotel: hotelsMap?.['gua-homestay']?.id,
            },
            {
                title: "Puga Valley: Scenic Return Ride back to Leh",
                highestPeak: "14763",
                distance: "254",
                duration: "5-6",
                difficulty: "medium",
                accommodation: [
                    "hotel",
                ],
                meal: [
                    "breakfast",
                    "dinner",
                ],
                media: mediaMap['manali-leh-with-umlingla-day9.webp'],
                structuredHighlights: [
                    highlightsMap?.['thiksey-monastery']?.id,
                ].filter(Boolean),
                activity: null,
                description: "The return journey into the Leh is through Puga Valley, which is beautiful and secluded; this valley has many hot springs and mesmerizing scenery. Visit Thiksey monastery along the way, which is one of the most photogenic in Ladakh. The monastery built on a mountain top look and feel like the Potala Palace of Lhasa. Then afterwards, further proceed down to Leh, where you will have time free to spend the evenings. Look forward to enjoying a farewell dinner whilst reminiscing all the good times you had in your tour.",
                overnight: "Hotel in Leh",
                hotel: hotelsMap?.['mandalchan-hotel']?.id,
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
                start: "2026-06-20T11:30:00.000Z",
                end: "2026-06-29T11:30:00.000Z",
                status: "closed"
            },

            {
                start: "2026-07-10T11:30:00.000Z",
                end: "2026-07-19T11:30:00.000Z",
                status: "closing-soon"
            },

            {
                start: "2026-07-30T11:30:00.000Z",
                end: "2026-08-08T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2026-08-19T11:30:00.000Z",
                end: "2026-08-28T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2026-09-09T11:30:00.000Z",
                end: "2026-09-18T11:30:00.000Z",
                status: "open"
            },

            {
                start: "2026-09-29T11:30:00.000Z",
                end: "2026-10-08T11:30:00.000Z",
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
        isFeatured: false,
        startEndCity: "Manali - Leh",
        minCost: "23000",
        cutOutCost: "27000",
        meta: {
            description:
                "1525 km trip on Himalayan 411 BSVI bike - Hotel, Meal, Fuel & Mechanic included | Manali, Leh, Khardong la, Nubra, Turtuk, Pangong, Kargil & Srinagar.",
            image: mediaMap['manali-leh-with-umlingla-twitter.webp'],
            title: "Manali Leh With Umling La - 9N/10D, 1525 km @ ₹23,000/-",
        },
        relatedPosts: [],
        title: "Manali Leh With Umlingla",
    }
}
