 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'
       
export type PostArgs = {
    mediaMap: Record<string, any>
    author: User
}

export const thikseyMonastery: (args: PostArgs) => RequiredDataFromCollectionSlug<'destinations'> = ({
    mediaMap,
    author,
}) => {
    return {
    slug: "thiksey-monastery",
    _status: 'published',
    authors: [author],
    subTitle: 'A Majestic Cultural and Spiritual Experience in Ladakh',
    heroImage: mediaMap['thiksey-monastery-slide.webp'],
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
                            text: "Perched on a hilltop at an altitude of 3,600 meters, Thiksey Monastery is one of the most stunning and largest monasteries in Ladakh. Often compared to Tibet's Potala Palace, this 12-story monastery offers breathtaking views of the Indus Valley and houses a treasure trove of Buddhist art, statues, stupas, and ancient scriptures. Founded in the 15th century, Thiksey is a thriving center of Buddhist learning, attracting monks, pilgrims, and travelers from around the world.",
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
                            text: "Things to see Inside Thiksey Monastery",
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
                                    text: "Maitreya Buddha Statue",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": One of the most iconic attractions of Thiksey Monastery, this 49-foot-tall statue of Maitreya Buddha (the Future Buddha) spans two floors and is adorned with gold and vibrant colors. It was built in 1970 to commemorate the 14th Dalai Lama's visit.",
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
                                    text: "Assembly Hall (Dukhang)",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": The main prayer hall, where monks gather for daily prayers and religious ceremonies. The hall is beautifully decorated with intricate murals, thangkas (Buddhist paintings), and ancient scriptures.",
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
                                    text: "3Tara Temple",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": This sacred space is dedicated to Goddess Tara, the female Bodhisattva of compassion. Inside, you'll find 21 statues of Tara, each representing a different aspect of her divine presence.",
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
                                    text: "Lamokhang Temple",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": This section houses sacred Buddhist scriptures, including rare manuscripts written in gold and silver ink. It also serves as a learning center where young monks study Buddhist philosophy and literature.",
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
                                    text: "Rooftop Viewpoint",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": One of the highlights of the monastery is its panoramic rooftop, offering stunning views of the surrounding mountains, the Indus River, and the lush valleys of Ladakh. Sunset and sunrise from this point are particularly mesmerizing.",
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
                        {
                            children: [
                                {
                                    detail: 0,
                                    format: 1,
                                    mode: "normal",
                                    style: "",
                                    text: "Prayer Wheels & Chortens",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": As you walk around the monastery, you will find giant prayer wheels and white stupas (chortens), symbolizing peace and enlightenment. Spinning the prayer wheels while chanting mantras is a common spiritual practice.",
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
                            value: 6
                        },
                        {
                            children: [
                                {
                                    detail: 0,
                                    format: 1,
                                    mode: "normal",
                                    style: "",
                                    text: "Monks Living Quarters ",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": The monastery is home to over 100 monks, and visitors can observe their daily routines, including morning prayer chants, meditation sessions, and traditional rituals.",
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
                            value: 7
                        },
                        {
                            children: [
                                {
                                    detail: 0,
                                    format: 1,
                                    mode: "normal",
                                    style: "",
                                    text: "Cham Dance Hall  ",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": During festivals like Gustor, the monastery hosts elaborate masked dance performances, where monks perform the Cham dance to depict Buddhist teachings and the victory of good over evil.",
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
                            value: 8
                        }
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
                            text: "Things to See Around Thiksey Monastery",
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
                                    text: "Shey Palace & Monastery (5 km away)",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": The former royal residence of Ladakh's kings, this historic palace features a 15-meter-tall copper statue of Shakyamuni Buddha, one of the largest in Ladakh.",
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
                                    text: "Stakna Monastery (9 km away)",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": Known as the Tiger's Nose Monastery due to its location on a rocky hill, this monastery offers incredible views of the Indus River and houses beautiful paintings and scriptures.",
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
                                    text: "Hemis Monastery (35 km away)",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": The largest and wealthiest monastery in Ladakh, Hemis is famous for its Hemis Festival, celebrated with vibrant mask dances and traditional rituals.",
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
                                    text: "Indus River Rafting",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": Adventure seekers can experience white-water rafting on the Indus River, offering thrilling rapids and scenic landscapes along the way.",
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
                                    text: "Leh City (19 km away)",
                                    type: "text",
                                    version: 1
                                },
                                {
                                    detail: 0,
                                    format: 0,
                                    mode: "normal",
                                    style: "",
                                    text: ": The capital of Ladakh, Leh is home to Leh Palace, Shanti Stupa, bustling markets, and vibrant cafés, making it a perfect stop before or after visiting Thiksey.",
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
                        }
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
                            text: "Festivals at Thiksey Monastery:",
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
                            text: "Thiksey Monastery is known for hosting two major Buddhist festivals:.",
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
                            text: "Gustor Festival (October-November) - A two-day festival featuring sacred Cham dances (masked dances), ritual prayers, and spiritual ceremonies, celebrating the victory of good over evil.",
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
                            text: "Ladakh Festival (September) - The monastery participates in this grand cultural festival, showcasing traditional music, dance, and Ladakhi heritage.",
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
                            text: "The ideal time to visit Thiksey Monastery is from May to September, when Ladakh's weather is pleasant, and all roads remain accessible. The early morning prayer ceremony, held around 6:00 AM, is a must-experience for visitors seeking a deeper spiritual connection.",
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
                            text: "Visitors can find accommodations in Leh, Shey, or nearby guesthouses around Thiksey. For a truly immersive experience, some guesthouses offer monastery stays, where you can live among the monks and experience their daily routines.",
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
                            text: "Experience the Spiritual Grandeur of Thiksey With its majestic architecture, deep-rooted Buddhist traditions, and breathtaking views, Thiksey Monastery is a must-visit destination in Ladakh. Whether you're a spiritual seeker, an architecture enthusiast, or a traveler looking for peace and tranquility, Thiksey offers an unforgettable experience.",
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
        "Explore the heritage and architecture of Thiksey Monastery, what to see, how to reach, and practical advice for your Ladakh trip with Ladakh Moto.",
        image: mediaMap['thiksey-monastery-slide.webp'],
        title: "Thiksey Monastery - Travel Guide & Visit Info | Ladakh Moto",
    },
    relatedPosts: [],
    title: "Thiksey Monastery",
}
}