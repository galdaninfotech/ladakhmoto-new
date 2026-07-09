 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'
       
export type PostArgs = {
    mediaMap: Record<string, any>
    author: User
}

export const pangongLake: (args: PostArgs) => RequiredDataFromCollectionSlug<'destinations'> = ({
    mediaMap,
    author,
}) => {
    return {
    slug: "pangong-lake",
    _status: 'published',
    authors: [author],
    subTitle: 'A Stunning Destination for Every Traveler',
    heroImage: mediaMap['pangong-lake-slide.webp'],
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
                            text: "Pangong Lake, also known as Pangong Tso, is a breathtaking endorheic lake nestled in the Himalayas at an elevation of 4,225 meters. Spanning approximately 134 kilometers, this pristine lake extends from India's Ladakh region into Tibet, with about 40 percent of its length in India and the remaining 60 percent in Tibet. Despite its saline waters, Pangong Lake freezes completely during winter, offering a unique spectacle of nature. Pangong Lake is a must-visit spot for nature lovers, adventure seekers, and anyone looking to experience the serene and untouched landscapes of Ladakh. Its unique color-changing waters, surrounded by barren mountains, offer a surreal and unforgettable experience for every tourist visiting Pangong Lake.",
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
                            text: "Top Attractions:",
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
                                    text: "Color-Changing Waters",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": Witness the lake's mesmerizing hues shift from azure to deep blue and even green, depending on the time of day and weather conditions.",
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
                                    text: "Wildlife Spotting",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": The lake is a haven for birdwatchers, especially during the summer months when migratory birds, including the rare black-necked crane, make it their temporary home.",
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
                                    text: "Camping",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": Experience the serenity of the lake by camping along its shores, under a canopy of stars, and immerse yourself in the tranquil ambiance of the surrounding landscapes.",
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
                                    text: "The Journey",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": A visit to Pangong Lake is also an adventure in itself. While the lake is the primary attraction, the journey to Pangong Lake is equally fascinating. The road to Pangong Lake takes travelers through some of the most stunning landscapes of Ladakh, including high mountain passes like Chang La. The drive offers panoramic views of the surrounding hills, valleys, and villages, making it a memorable experience. For those seeking a bit of adventure, the road journey to Pangong Lake is sure to excite and inspire.",
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
                        {
                            children: [
                                {
                                    detail: 0,
                                    format: 1,
                                    mode: "normal",
                                    style: "",
                                    text: "Chang La Pass",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": Standing at 5,360 meters (17,590 feet), one of the highest motorable passes in the world and a gateway to the stunning Pangong Lake. Surrounded by snow-covered peaks, this high-altitude pass offers breathtaking views and a thrilling ride for adventure seekers. Due to its extreme elevation, the air is thin and chilly, making short stops ideal for acclimatization. The pass is also home to the Changla Baba Temple, believed to protect travelers on their journey. A visit to Chang La is an unforgettable experience for those exploring the rugged beauty of Ladakh.",
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
                            value: 5
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
                            text: "Best Time to Visit:",
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
                            text: "The ideal time to explore Pangong Lake is from May to September, when the weather is pleasant, and the lake\'s vivid colors are at their peak. During these months, the access roads are clear, making the journey to the lake more comfortable and enjoyable.",
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
                            text: "How to Reach:",
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
                            text: "Pangong Lake is approximately 160 kilometers from Leh, the capital of Ladakh. The journey takes you through the scenic Chang La Pass, one of the world's highest motorable roads, offering panoramic views of the rugged Himalayan terrain.",
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
                            text: "Permits:",
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
                            text: "Visitors are required to obtain an Inner Line Permit to access Pangong Lake, as it is located near the sensitive Line of Actual Control between India and China. These permits can be acquired in Leh and are mandatory for both domestic and international tourists.",
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
                            text: "Embarking on a journey to Pangong Lake promises an unforgettable experience, blending natural beauty with a sense of adventure. Whether you're a nature enthusiast, a photography lover, or simply seeking tranquility, Pangong Lake offers a slice of paradise in the heart of the Himalayas..",
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
        "Explore Pangong Lake — scenic beauty, travel tips, when to visit, how to reach,  travel insights, itinerary tips, and travel advice from Ladakh Moto.",
        image: mediaMap['pangong-lake-slide.webp'],
        title: "Pangong Lake Guide - Travel Info & Tips | Ladakh Moto",
    },
    relatedPosts: [],
    title: "Pangong Lake",
}
}