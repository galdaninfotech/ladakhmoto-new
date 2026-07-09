 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'
       
export type PostArgs = {
    mediaMap: Record<string, any>
    author: User
}

export const hanleVillage: (args: PostArgs) => RequiredDataFromCollectionSlug<'destinations'> = ({
    mediaMap,
    author,
}) => {
    return {
    slug: "hanle-village",
    _status: 'published',
    authors: [author],
    subTitle: 'A Tranquil Retreat in Ladakh for Every Traveler',
    heroImage: mediaMap['hanle-village-slide.webp'],
    description: {
        root: {
            children: [
                {
                    children: [
                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "Tucked away in Ladakh's remote Changthang region, Hanle Village is a paradise for those seeking serenity, adventure, and a cosmic spectacle like no other. Situated at an altitude of 4,500 meters (14,763 feet), Hanle is a mesmerizing blend of vast open landscapes, rugged mountain backdrops, and a peaceful atmosphere that feels like a world untouched by time.",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: null,
                    format: "justify",
                    indent: 0,
                    type: "paragraph",
                    version: 1,
                    textFormat: 0,
                    textStyle: ""
                },
                {
                    children: [
                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "Hanle is a destination that embodies solitude, spirituality, and celestial beauty. Far from bustling tourist circuits, this remote village is surrounded by vast barren landscapes, rolling hills, and an endless expanse of open skies. The village is also home to the resilient Changpa nomads, whose traditional way of life remains unchanged for generations. Whether you come to witness the Milky Way in its full glory, explore Ladakh's untouched wilderness, or simply embrace the silence of the mountains, Hanle offers a truly surreal and unforgettable experience.",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: null,
                    format: "justify",
                    indent: 0,
                    type: "paragraph",
                    version: 1,
                    textFormat: 0,
                    textStyle: ""
                },
                {
                    children: [
                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "Why Visit Hanle?",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: null,
                    format: "start",
                    indent: 0,
                    type: "heading",
                    version: 1,
                    tag: "h2"
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    detail: 0,
                                    format: 1,
                                    mode: "normal",
                                    style: "",
                                    text: "Stargazing Haven",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": Home to the Indian Astronomical Observatory, one of the world's highest observatories, Hanle offers an unparalleled view of the night sky. With minimal light pollution, it's the perfect spot for astrophotography and gazing at galaxies, constellations, and shooting stars.",
                                    type: "text",
                                    version: 1
                                }
                            ],
                            direction: null,
                            format: "start",
                            indent: 0,
                            type: "listitem",
                            version: 1,
                            textFormat: 1,
                            value: 1
                        },
                        {
                            children: [
                                {
                                    detail: 0,
                                    format: 1,
                                    mode: "normal",
                                    style: "",
                                    text: "Hanle Monastery",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": Perched on a hill, this 17th-century Buddhist gompa belongs to the Drukpa Kagyu sect and exudes a sense of spiritual calm. The monastery offers stunning panoramic views of the surrounding valley.",
                                    type: "text",
                                    version: 1
                                }
                            ],
                            direction: null,
                            format: "start",
                            indent: 0,
                            type: "listitem",
                            version: 1,
                            textFormat: 1,
                            value: 2
                        },
                        {
                            children: [
                                {
                                    detail: 0,
                                    format: 1,
                                    mode: "normal",
                                    style: "",
                                    text: "Breathtaking Landscapes",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": Hanle's high-altitude desert, rolling plains, and distant snow-capped peaks create a surreal, picture-perfect setting. It's an ideal destination for offbeat travelers and photographers.",
                                    type: "text",
                                    version: 1
                                }
                            ],
                            direction: null,
                            format: "start",
                            indent: 0,
                            type: "listitem",
                            version: 1,
                            textFormat: 1,
                            value: 3
                        },
                        {
                            children: [
                                {
                                    detail: 0,
                                    format: 1,
                                    mode: "normal",
                                    style: "",
                                    text: "Nomadic Encounters",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": The region is home to the Changpa nomads, who live in traditional yak wool tents and herd pashmina goats. A visit to Hanle offers a glimpse into their unique way of life.",
                                    type: "text",
                                    version: 1
                                }
                            ],
                            direction: null,
                            format: "start",
                            indent: 0,
                            type: "listitem",
                            version: 1,
                            textFormat: 1,
                            value: 4
                        },
                    ],
                    direction: null,
                    format: "",
                    indent: 0,
                    type: "list",
                    version: 1,
                    "listType": "bullet",
                    "start": 1,
                    tag: "ul"
                },
                {
                    children: [
                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "Best Time to Visit",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: null,
                    format: "start",
                    indent: 0,
                    type: "heading",
                    version: 1,
                    tag: "h2"
                },
                {
                    children: [
                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "The ideal time to visit Hanle is from May to September, when the weather is pleasant, and the roads are accessible. The nights are cold even in summer, so pack warm clothing.",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: null,
                    format: "justify",
                    indent: 0,
                    type: "paragraph",
                    version: 1,
                    textFormat: 0,
                    textStyle: ""
                },
                {
                    children: [

                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "How to Reach Hanle",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: null,
                    format: "start",
                    indent: 0,
                    type: "heading",
                    version: 1,
                    tag: "h2"
                },
                {
                    children: [

                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "By Road: Hanle is approximately 250 km from Leh, accessible via Umling La (the world's highest motorable pass) or via Nyoma and Loma. The journey offers stunning views of the Changthang plateau.",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: null,
                    format: "justify",
                    indent: 0,
                    type: "paragraph",
                    version: 1,
                    textFormat: 0,
                    textStyle: ""
                },
                {
                    children: [

                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "Permits",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: null,
                    format: "start",
                    indent: 0,
                    type: "heading",
                    version: 1,
                    tag: "h2"
                },
                {
                    children: [
                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "Since Hanle is close to the Indo-China border, Inner Line Permits (ILP) are required for both Indian and foreign travelers, which can be obtained in Leh.",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: null,
                    format: "justify",
                    indent: 0,
                    type: "paragraph",
                    version: 1,
                    textFormat: 0,
                    textStyle: ""
                },
                {
                    children: [

                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "Where to Stay",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: null,
                    format: "start",
                    indent: 0,
                    type: "heading",
                    version: 1,
                    tag: "h2"
                },
                {
                    children: [
                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "Accommodation options in Hanle include homestays and guesthouses, offering basic yet comfortable facilities along with warm Ladakhi hospitality.",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: null,
                    format: "justify",
                    indent: 0,
                    type: "paragraph",
                    version: 1,
                    textFormat: 0,
                    textStyle: ""
                },
                {
                    children: [

                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "Experience the Magic of Hanle",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: null,
                    format: "start",
                    indent: 0,
                    type: "heading",
                    version: 1,
                    tag: "h2"
                },
                {
                    children: [
                        {
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "Whether you're an adventure seeker, a nature lover, or a stargazing enthusiast, Hanle Village promises an unforgettable journey into the mystical heart of Ladakh. Come, witness the magic of an endless sky, the silence of the mountains, and the warmth of Ladakh's remote beauty.",
                            type: "text",
                            version: 1
                        }
                    ],
                    direction: null,
                    format: "justify",
                    indent: 0,
                    type: "paragraph",
                    version: 1,
                    textFormat: 0,
                    textStyle: ""
                }
            ],
            direction: null,
            format: "",
            indent: 0,
            type: "root",
            version: 1
        }
    },
    meta: {
        description:
        "Explore Hanle Village — serene landscapes, culture, high-altitude stargazing, & travel tips. Plan your Ladakh adventure with insights from Ladakh Moto.",
        image: mediaMap['hanle-village-slide.webp'],
        title: "Hanle Travel Guide - Remote Village, Stargazing | Ladakh Moto",
    },
    relatedPosts: [],
    title: "Hanle Village",
}
}
