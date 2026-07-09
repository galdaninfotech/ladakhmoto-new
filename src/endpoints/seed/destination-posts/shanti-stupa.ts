 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'
       
export type PostArgs = {
    mediaMap: Record<string, any>
    author: User
}

export const shantiStupa: (args: PostArgs) => RequiredDataFromCollectionSlug<'destinations'> = ({
    mediaMap,
    author,
}) => {
    return {
    slug: "shanti-stupa",
    _status: 'published',
    authors: [author],
    subTitle: 'A Symbol of Peace and Serenity in Ladakh',
    heroImage: mediaMap['shanti-stupa-slide.webp'],
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
                            text: "Perched atop the serene hills of Chanspa in Leh, Ladakh, the Shanti Stupa stands as a luminous beacon of peace and unity. This white-domed Buddhist monument not only showcases architectural splendor but also offers visitors a tranquil retreat with panoramic vistas of the surrounding Himalayan landscape.",
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
                            text: "Historical Significance",
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
                            text: "The inception of Shanti Stupa dates back to 1991, a collaborative endeavor between Japanese Buddhist monk Gyomyo Nakamura and local Ladakhi craftsmen. This initiative was part of the Peace Pagoda mission, aiming to commemorate 2,500 years of Buddhism and promote global harmony. The stupa enshrines relics of Lord Buddha, sanctified by the 14th Dalai Lama, enhancing its spiritual importance.",
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
                            text: "Architectural Marvel",
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
                            text: "The stupa's architecture is a harmonious blend of Japanese and Ladakhi styles. Its two-tiered structure is adorned with intricate carvings: the first level showcases a central golden Buddha statue in the Dharmachakra posture, symbolizing the teaching phase of Buddha's life, while the second level illustrates pivotal events such as Buddha's birth, enlightenment, and death (Mahaparinirvana). Encircling the stupa are numerous smaller meditative Buddha reliefs, enhancing the site's serene ambiance.",
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
                            text: "Breathtaking Panoramas",
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
                            text: "At an elevation of 3,609 meters (11,841 feet), Shanti Stupa offers unparalleled panoramic views of Leh and its environs. Visitors can gaze upon the sprawling Indus Valley, the majestic Stok Kangri peak, and the quaint town of Leh nestled amidst rugged mountains. The site is particularly enchanting during sunrise and sunset, when the interplay of light and shadow paints the landscape in mesmerizing hues.",
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
                            text: "Spiritual Oasis",
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
                            text: "Beyond its visual allure, Shanti Stupa serves as a sanctuary for meditation and introspection. The tranquil environment, punctuated by the gentle flutter of prayer flags and the distant murmur of chants, provides an ideal setting for spiritual seekers and peace enthusiasts. The stupa's construction aimed to promote world peace and prosperity, symbolizing the enduring ties between Japan and India.",
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
                            text: "Accessibility",
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
                            text: "Reaching Shanti Stupa is both an adventure and a pilgrimage. Visitors can embark on a short drive from Leh city or undertake a more invigorating ascent via a flight of 555 steps, a journey that offers moments for reflection and anticipation. The stupa is accessible year-round, but the period between May and September is ideal, offering pleasant weather and clear skies.",
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
                            text: "Visitor Information",
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
                                    text: "Timings:",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": Open daily from 8:00 AM to 8:00 PM.",
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
                                    text: "Entry Fee:",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": No admission charge.",
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
                                    text: "Best Time to Visit:",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ":Early mornings or late afternoons to witness the captivating sunrise or sunset.",
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
                            text: "In essence, a visit to Shanti Stupa is more than a sightseeing excursion; it's an immersion into the serene spirituality and rich cultural tapestry of Ladakh. Whether you're seeking inner peace, architectural beauty, or breathtaking landscapes, Shanti Stupa promises an experience that lingers long after you've descended its sacred steps.",
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
        "Explore Shanti Stupa Ladakh — history, visiting tips, scenic viewpoint, travel insights & tips. Plan your visit to this iconic stupa with Ladakh Moto.",
        image: mediaMap['shanti-stupa-slide.webp'],
        title: "Shanti Stupa - Travel Tips, Scenic Viewpoint - Ladakh Moto",
    },
    relatedPosts: [],
    title: "Shanti Stupa",
}
}