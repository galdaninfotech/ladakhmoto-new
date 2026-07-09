 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'
       
export type PostArgs = {
    mediaMap: Record<string, any>
    author: User
}

export const zanskarValley: (args: PostArgs) => RequiredDataFromCollectionSlug<'destinations'> = ({
    mediaMap,
    author,
}) => {
    return {
    slug: "zanskar-valley",
    _status: 'published',
    authors: [author],
    subTitle: 'A Hidden Paradise for Every Traveler',
    heroImage: mediaMap['zanskar-valley-slide.webp'],
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
                            text: "Zanskar Valley, located in the Indian Himalayas, is one of the most remote and awe-inspiring destinations in Ladakh. Known for its dramatic landscapes, pristine environment, and unique culture, Zanskar Valley is a must-visit for travelers seeking adventure, serenity, and a deeper connection to nature.",
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
                            text: "Nestled in the remote reaches of Ladakh, Zanskar Valley is a haven for adventurers and nature enthusiasts. Spanning over 7,000 square kilometers, this secluded gem is characterized by rugged landscapes, towering peaks, and deep river gorges. The valley is crisscrossed by the Zanskar River, formed by the confluence of the Doda and Lungnak (Tsarap/Lingti) rivers, eventually merging with the Indus River.",
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
                                    text: "Phugtal Monastery",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": Carved into a cliffside, this ancient monastery offers a glimpse into the region's rich spiritual heritage.",
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
                                    text: "Zangla Palace",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": Once the royal residence, it provides panoramic views of the valley and a peek into its regal past.",
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
                                    text: "Karsha Monastery",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": The largest in Zanskar, known for its stunning architecture and vibrant festivals",
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
                                    text: "Sheela Waterfall",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": A serene spot perfect for relaxation and picnics amidst nature.",
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
                            text: "Adventure and Activities:",
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
                                    text: "Trekking",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": Embark on trails like the Phugtal Monastery Trek, offering unparalleled views and challenging terrains.",
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
                                    text: "Motorbiking",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": Riding in Zanskar is an exhilarating adventure, offering riders a chance to conquer rugged terrains, high mountain passes, and remote valleys. The newly accessible Shinku La Pass route and challenging trails through Pensi La make it a dream destination for thrill-seekers. With breathtaking landscapes and ever-changing terrains, Zanskar promises an unforgettable ride through one of Ladakh’s most untouched regions.",
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
                                    text: "River Rafting",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": Experience the thrill of navigating the rapids of the Zanskar River.",
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
                                    text: "Cultural Tours",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": Engage with local communities to understand their traditions and way of life.",
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
                            text: "Zanskar is emerging as an exciting new gateway to Manali with the development of the Shinku La Pass (5,091 meters) road, offering a more direct and adventurous route into this remote Himalayan region. This newly opened road connects Padum in Zanskar to Darcha in Himachal Pradesh, significantly reducing travel time and making the valley more accessible for travelers. Along this route, adventurers can witness the majestic Gonbo Rangjon, a sacred peak revered by locals and a stunning landmark for trekkers and explorers. This new passage not only enhances connectivity but also opens up breathtaking landscapes and hidden gems for nature lovers and thrill-seekers.",
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
                            text: "The ideal period to explore Zanskar Valley is from June to September, when the weather is favorable, and the roads are accessible. During these months, the valley blooms with alpine flora, and the conditions are perfect for trekking and sightseeing.",
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
                            text: "How to reach Leh:",
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
                            text: "The primary route is from Kargil to Padum, approximately 250 kilometers, taking about two days to traverse. Recent developments have introduced new roads via Shinku La Pass from Manali, offering alternative access points.",
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
                            text: "Accommodation:",
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
                            text: "Options range from guesthouses in Padum to homestays in smaller villages, providing a comfortable stay and a chance to experience local hospitality.",
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
                            text: "While Zanskar Valley doesn't require special permits for Indian tourists, it's advisable to check for any travel advisories or requirements before planning your visit.",
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
                            text: "Head on a journey to Zanskar Valley and immerse yourself in its untouched beauty, rich culture, and thrilling adventures. Whether you're seeking solitude amidst nature or an adrenaline-pumping experience, Zanskar promises memories that will last a lifetime.",
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
        "Explore Zanskar Valley — landscapes, routes, local villages, and travel tips. Plan your Ladakh adventure with expert local guidance from Ladakh Moto.",
        image: mediaMap['zanskar-valley-slide.webp'],
        title: "Zanskar Travel Guide - Routes, Scenery & Tips | Ladakh Moto",
    },
    relatedPosts: [],
    title: "Zanskar Valley",
}
}