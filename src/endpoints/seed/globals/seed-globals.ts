



/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Payload, PayloadRequest } from 'payload'
import { getPageBySlug } from './utilities'

export const seedGlobals = async ({ payload, req, mediaMap }: { payload: Payload; req: PayloadRequest, mediaMap: Record<string, any> }) => {
  payload.logger.info(`— Seeding globals...`)

  // Get pages for Links
  const homePage = await getPageBySlug('pages', 'home', req)
  const aboutPage = await getPageBySlug('pages', 'about', req)
  const aboutLadakhPage = await getPageBySlug('pages', 'about-ladakh', req)
  const ourServicesPage = await getPageBySlug('pages', 'our-services', req)
  const ourTeamPage = await getPageBySlug('pages', 'our-team', req)
  const galleryPage = await getPageBySlug('pages', 'gallery', req)
  const contactPage = await getPageBySlug('pages', 'contact', req)
  const whyTravelWithUsPage = await getPageBySlug('pages', 'why-travel-with-us', req)
  const guidesAndStaffsPage = await getPageBySlug('pages', 'guides-and-staffs', req)
  const howToReachPage = await getPageBySlug('pages', 'how-to-reach', req)
  const ourCoreValuesPage = await getPageBySlug('pages', 'our-core-values', req)

  await Promise.all([
    // ------------------------- HEADER
    payload.updateGlobal({
      slug: 'header',
      data: {
        // navItems: finalNavItems,
        navItems: [
          {
            link: {
              label: 'Home',
              reference: {
                relationTo: 'pages',
                value: homePage?.id,
              },
            },
          },
          {
            link: {
              label: 'About',
              reference: {
                relationTo: 'pages',
                value: aboutPage?.id,
              },
            },
            subLinks: [
              {
                link: {
                  label: 'About Us',
                  reference: {
                    relationTo: 'pages',
                    value: aboutPage?.id,
                  },
                },
              },
              {
                link: {
                  label: 'About Ladakh',
                  reference: {
                    relationTo: 'pages',
                    value: aboutLadakhPage?.id,
                  },
                },
              },
              {
                link: {
                  label: 'Our Services',
                  reference: {
                    relationTo: 'pages',
                    value: ourServicesPage?.id,
                  },
                },
              },
              {
                link: {
                  label: 'Our Team',
                  reference: {
                    relationTo: 'pages',
                    value: ourTeamPage?.id,
                  },
                },
              },
            ],
          },
          {
            link: {
              label: 'Ultimate Adventures',
              url: '/ultimate-adventures',
              type: 'custom',
            },
            subLinks: [
              {
                link: {
                  label: 'Ladakh Himalayan Adventure',
                  url: '/ultimate-adventures/ladakh-himalayan-adventure',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Ladakh Himalayan Grand Loop',
                  url: '/ultimate-adventures/ladakh-himalayan-grand-loop',
                  type: 'custom',
                },
              },
            ],
          },
          {
            link: {
              label: 'Biking Adventures',
              url: '/bike-tours',
              type: 'custom',
            },
            subLinks: [
              {
                link: {
                  label: 'Leh Ladakh Adventure',
                  url: '/bike-tours/leh-ladakh-adventure',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Leh Ladakh With Turtuk',
                  url: '/bike-tours/leh-ladakh-with-turtuk',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Ladakh With Umlingla',
                  url: '/bike-tours/ladakh-with-umlingla',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Manali Leh With Umlingla',
                  url: '/bike-tours/manali-leh-with-umlingla',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Ladakh Srinagar With Umlingla',
                  url: '/bike-tours/ladakh-srinagar-with-umlingla',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Manali Leh Srinagar',
                  url: '/bike-tours/manali-leh-srinagar',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Srinagar Leh Manali',
                  url: '/bike-tours/srinagar-leh-manali',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Leh Zanskar Leh',
                  url: '/bike-tours/leh-zanskar-leh',
                  type: 'custom',
                },
              },
            ],
          },
          {
            link: {
              label: 'Holiday Packages',
              url: '/holiday-packages',
              type: 'custom',
            },
            subLinks: [
              {
                link: {
                  label: 'All Ladakh Tour',
                  url: '/holiday-packages/all-ladakh-tour',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Amazing Ladakh Tour',
                  url: '/holiday-packages/amazing-ladakh-tour',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Ladakh Tour With Hanle',
                  url: '/holiday-packages/ladakh-tour-with-hanle',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Ladakh Zanskar Valley',
                  url: '/holiday-packages/ladakh-zanskar-valley',
                  type: 'custom',
                },
              },
            ],
          },
          {
            link: {
              label: 'Destinations',
              url: '/destinations',
              type: 'custom',
            },
            subLinks: [
              {
                link: {
                  label: 'Leh City',
                  url: '/destinations/leh-city',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Nubra Valley',
                  url: '/destinations/nubra-valley',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Pangong Lake',
                  url: '/destinations/pangong-lake',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Tsomoriri Lake',
                  url: '/destinations/tsomoriri-lake',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Zanskar Valley',
                  url: '/destinations/zanskar-valley',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Hanle Village',
                  url: '/destinations/hanle-village',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Shanti Stupa',
                  url: '/destinations/shanti-stupa',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Thiksey Monastery',
                  url: '/destinations/thiksey-monastery',
                  type: 'custom',
                },
              },
              {
                link: {
                  label: 'Lamayuru Monastery',
                  url: '/destinations/lamayuru-monastery',
                  type: 'custom',
                },
              },
            ],
          },
          {
            link: {
              label: 'Blogs',
              url: '/posts',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Gallery',
              reference: {
                relationTo: 'pages',
                value: galleryPage?.id,
              },
            },
          },
          {
            link: {
              label: 'Contact Us',
              reference: {
                relationTo: 'pages',
                value: contactPage?.id,
              },
            },
          },
        ],
      },
      context: req.context,
    }),

    // ------------------------- FOOTER
    payload.updateGlobal({
      slug: 'footer',
      data: {
        about: {
          title: null,
          description:
            'Ladakh Moto is a locally based Ladakhi company with dedicated local employees working under the supervision of Local managers who are acquainted with the years of experience in handling and organizing such motorbiking expeditions.',
        },

        quickLinks: [
          {
            link: {
              label: 'About Us',
              reference: {
                relationTo: 'pages',
                value: aboutPage?.id,
              },
            },
          },
          {
            link: {
              label: 'Why Travel With Us?',
              reference: {
                relationTo: 'pages',
                value: whyTravelWithUsPage?.id,
              },
            },
          },
          {
            link: {
              label: 'Guides & Staffs',
              reference: {
                relationTo: 'pages',
                value: guidesAndStaffsPage?.id,
              },
            },
          },
          {
            link: {
              label: 'Contact Us',
              reference: {
                relationTo: 'pages',
                value: contactPage?.id,
              },
            },
          },
          {
            link: {
              label: 'How To Reach',
              reference: {
                relationTo: 'pages',
                value: howToReachPage?.id,
              },
            },
          },
          {
            link: {
              label: 'Our Core Values',
              reference: {
                relationTo: 'pages',
                value: ourCoreValuesPage?.id,
              },
            },
          },
        ],

        adventureRides: [
          {
            link: {
              label: 'Leh Ladakh Adventure',
              url: '/bike-tours/leh-ladakh-adventure',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Ladakh With Umlingla',
              url: '/bike-tours/ladakh-with-umlingla',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Manali Leh With Umlingla',
              url: '/bike-tours/manali-leh-with-umlingla',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Ladakh Srinagar With Umlingla',
              url: '/bike-tours/ladakh-srinagar-with-umlingla',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Leh Zanskar Leh',
              url: '/bike-tours/leh-zanskar-leh',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Manali Leh Srinagar',
              url: '/bike-tours/manali-leh-srinagar',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Srinagar Leh Manali',
              url: '/bike-tours/srinagar-leh-manali',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Leh Ladakh With Turtuk',
              url: '/bike-tours/leh-ladakh-with-turtuk',
              type: 'custom',
            },
          },
        ],
        destinations: [
          {
            link: {
              label: 'Nubra Valley',
              url: '/destinations/nubra-valley',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Pangong Lake',
              url: '/destinations/pangong-lake',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Tsomoriri Lake',
              url: '/destinations/tsomoriri-lake',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Leh City',
              url: '/destinations/leh-city',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Zanskar Valley',
              url: '/destinations/zanskar-valley',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Shanti Stupa',
              url: '/destinations/shanti-stupa',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Lamayuru Monastery',
              url: '/destinations/lamayuru-monastery',
              type: 'custom',
            },
          },
        ],
        highlights: [
          {
            link: {
              label: 'Pangong Lake',
              url: '/highlights/pangong-lake',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Hunder Sand Dunes',
              url: '/highlights/hunder-sand-dunes',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Leh Palace',
              url: '/highlights/leh-palace',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Leh City',
              url: '/highlights/leh-city',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Hall of Fame',
              url: '/highlights/hall-of-fame',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Hanle Observatory',
              url: '/highlights/hanle-observatory',
              type: 'custom',
            },
          },
          {
            link: {
              label: 'Sangam Point',
              url: '/highlights/sangam-point',
              type: 'custom',
            },
          },
        ],
      },
      context: req.context,
    }),

    // Ladakh Moto
    payload.updateGlobal({
      slug: 'ladakhMoto',
      data: {
        name: 'Ladakh Moto',
        slogan: 'the true local adventure companion',
        regNo: '6087-B-LEH',
        gstNo: '38BUPPG9731E2Z8',
        contactPerson: 'Thinles Gyatso',
        designation: 'Director',
        phone1: '+91-9622958013',
        phone2: '+91-9906989962',
        phone3: '+91-9419393330',
        phone4: '+91-8899537311',
        email1: 'info@ladakhmoto.com',
        email2: 'ladakhmototour@gmail.com',
        addressline1: 'DB2 Zangsti, Nr. MCL Vehicle Parking, Leh',
        addressline2: '194101, Ladakh India',
        website: 'https://ladakhmoto.com',
        facebook: 'https://www.facebook.com/ladakhmotos/',
        twitter: 'https://x.com/LadakhMoto',
        instagram: 'https://www.instagram.com/ladakhmotos/',
        youtube: 'https://www.youtube.com/@LadakhMotoTour',
        linkedin: 'https://www.linkedin.com/company/ladakhmoto/',
        whatsapp: 'https://api.whatsapp.com/send?phone=919622958013',
      },
      context: req.context,
    }),

    payload.updateGlobal({
      slug: 'inclusionExclusion',
      data: {
        inclusions: [
          {
            inclusion: 'Royal Enfield Himalayan 411 Bike BSVI',
          },
          {
            inclusion: 'Fuel for tour',
          },
          {
            inclusion: 'Road Captain/Marshal',
          },
          {
            inclusion: 'Experienced motor bike Mechanic during the trip',
          },
          {
            inclusion: 'Riding Jacket, Gloves and Knee Guard for Bikers',
          },
          {
            inclusion: 'Tempo/Innova Vehicle (For seat in vehicle Option)',
          },
          {
            inclusion:
              'Sharing-based accommodation in Hotels/Camps/Guest houses (Double Sharing for Couples)',
          },
          {
            inclusion: 'Breakfast + Dinner as per the tour Itinerary',
          },
          {
            inclusion: 'Pangong, Nubra Permission Fees',
          },
          {
            inclusion: 'Wildlife & Environmental Fees',
          },
          {
            inclusion: 'Oxygen Cylinder, Oximeter & Basic First Aid Kit',
          },

          {
            inclusion: 'Backup Vehicle to Carry Luggage',
          },

          {
            inclusion: 'All tolls during the Leh Ladakh Bike Trip',
          },
          {
            inclusion: 'Achievement Certificate',
          },
          {
            inclusion: 'Memories of Life Time',
          },
        ],
        exclusions: [
          {
            exclusion: 'GST 5% (Service Tax)',
          },
          {
            exclusion:
              'Lunch is not included and any other meal than mentioned in the tour itinerary',
          },
          {
            exclusion: 'Any insurance',
          },
          {
            exclusion: 'Early check-in or late checkout rooms at any Guest House/Camps',
          },
          {
            exclusion: 'Any entry fees or Personal Expenses',
          },
          {
            exclusion: 'Airport Transfers',
          },
          {
            exclusion: 'Additional stays at any place except Itinerary will be chargeable.',
          },
          {
            exclusion: 'Tips to driver, guide, hotel staff & representative.',
          },
          {
            exclusion: 'Camera/video camera fee at monuments',
          },
        ],
      },
      context: req.context,
    }),

    payload.updateGlobal({
      slug: 'inclusionExclusionPackage',
      data: {
        inclusions: [
          {
            inclusion:
              'Accommodation: Comfortable stays in Leh, Nubra Valley, Pangong Lake, and Hanle (hotels, camps, and homestays).',
          },
          {
            inclusion: 'Meals: Daily breakfast and dinner.',
          },
          {
            inclusion:
              'Transportation: Private SUV or Tempo Traveler (for groups) with an experienced driver.',
          },
          {
            inclusion: 'Permits: Inner Line Permits for Nubra, Pangong, and Hanle.',
          },
          {
            inclusion: 'Oxygen Cylinder, Oximeter & Basic First Aid Kit',
          },
          {
            inclusion:
              'Guides: Knowledgeable local guides for cultural sites and monastery visits.',
          },
        ],
        exclusions: [
          {
            exclusion: 'GST 5% (Service Tax)',
          },
          {
            exclusion:
              'Lunch is not included and any other meal than mentioned in the tour itinerary',
          },
          {
            exclusion: 'Any insurance',
          },
          {
            exclusion: 'Early check-in or late checkout rooms at any Guest House/Camps',
          },
          {
            exclusion: 'Any entry fees or Personal Expenses',
          },
          {
            exclusion: 'Airport Transfers',
          },
          {
            exclusion: 'Fuel for own Vehicle Option',
          },
          {
            exclusion: 'Additional stays at any place except Itinerary will be chargeable.',
          },
          {
            exclusion: 'Tips to driver, guide, hotel staff & representative.',
          },
          {
            exclusion: 'Camera/video camera fee at monuments',
          },
        ],
      },
      context: req.context,
    }),

    payload.updateGlobal({
      slug: 'inclusionExclusionUltimateAdventure',
      data: {
        inclusions: [
          {
            inclusion: 'Flight from Delhi To Leh, and Leh To Delhi'
          },
          {
            inclusion: 'Royal Enfield Himalayan 452 Bike BSVI',
          },
          {
            inclusion: 'Fuel for tour',
          },
          {
            inclusion: 'Road Captain/Marshal',
          },
          {
            inclusion: 'Experienced motor bike Mechanic during the trip',
          },
          {
            inclusion:
              'Sharing-based accommodation in Hotels/Resort/Guest houses',
          },
          {
            inclusion: 'Breakfast + Dinner as per the tour Itinerary',
          },
          {
            inclusion: 'Pangong, Nubra Permission Fees',
          },
          {
            inclusion: 'Wildlife & Environmental Fees',
          },
          {
            inclusion: 'Oxygen Cylinder, Oximeter & Basic First Aid Kit',
          },

          {
            inclusion: 'Backup Vehicle to Carry Luggage',
          },

          {
            inclusion: 'All tolls during the Leh Ladakh Bike Trip',
          },
          {
            inclusion: 'Achievement Certificate',
          },
          {
            inclusion: 'Memories of Life Time',
          },
        ],
        exclusions: [
          {
            exclusion:
              'Lunch is not included and any other meal than mentioned in the tour itinerary',
          },
          {
            exclusion: 'Any insurance',
          },
          {
            exclusion: 'Early check-in or late checkout rooms at any Guest House/Camps',
          },
          {
            exclusion: 'Any entry fees or Personal Expenses',
          },
          {
            exclusion: 'Additional stays at any place except Itinerary will be chargeable.',
          },
          {
            exclusion: 'Tips to driver, guide, hotel staff & representative.',
          },
          {
            exclusion: 'Camera/video camera fee at monuments',
          },
        ],
      },
      context: req.context,
    }),

    payload.updateGlobal({
      slug: 'tourPolicies',
      data: {
        bookingAndPayment: {
          root: {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Advance Payment',
                        type: 'text',
                        version: 1,
                      },
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ': Full payment or an advance must be made at the time of booking the tour.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 1,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Remaining Payment',
                        type: 'text',
                        version: 1,
                      },
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ': The balance payment is required at least 15 days before the trip departure date.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 2,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Booking Methods',
                        type: 'text',
                        version: 1,
                      },
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ': Payments can be made via NEFT, RTGS, SWIFT, Bank Transfer, or Cash.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 3,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'GST Charges',
                        type: 'text',
                        version: 1,
                      },
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ': A 5% GST (Service Tax) will be added to all bookings.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 4,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Booking Deadline',
                        type: 'text',
                        version: 1,
                      },
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ": The final date for booking is 10 days prior to the trip's departure.",
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 5,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Seat Availability',
                        type: 'text',
                        version: 1,
                      },
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ': Before making any online reservations, please verify the trip dates and seat availability by contacting our team via email or phone.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 6,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'TCS Applicability',
                        type: 'text',
                        version: 1,
                      },
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ': For invoices above ₹2 lakhs, if any portion of the payment is made in cash (either at the counter or deposited into a bank), an additional 1% TCS will apply. A PAN card copy must also be provided.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 7,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                textFormat: 1,
                listType: 'bullet',
                start: 1,
                tag: 'ul',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        cancellation: {
          root: {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'In case of trip or adventure activity cancellation due to any avoidable or unavoidable reasons, notification must be sent via email to ',
                        type: 'text',
                        version: 1,
                      },
                      {
                        children: [
                          {
                            detail: 0,
                            format: 0,
                            mode: 'normal',
                            style: '',
                            text: 'info@ladakhmoto.com',
                            type: 'text',
                            version: 1,
                          },
                        ],
                        direction: null,
                        format: '',
                        indent: 0,
                        type: 'link',
                        version: 3,
                        fields: {
                          linkType: 'custom',
                          newTab: false,
                          url: 'mailto:info@ladakhmoto.com',
                        },
                      },
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 1,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Cancellation charges will apply from the date we receive the cancellation request by email. The charges are as follows:',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 2,
                  },
                  {
                    children: [
                      {
                        children: [
                          {
                            children: [
                              {
                                detail: 0,
                                format: 0,
                                mode: 'normal',
                                style: '',
                                text: '30 days or more before departure: 90% of the total Land Package Cost will be refunded.',
                                type: 'text',
                                version: 1,
                              },
                            ],
                            direction: null,
                            format: '',
                            indent: 1,
                            type: 'listitem',
                            version: 1,
                            value: 1,
                          },
                          {
                            children: [
                              {
                                detail: 0,
                                format: 0,
                                mode: 'normal',
                                style: '',
                                text: '15-29 days before departure: 50% of the total Land Package Cost will be refunded.',
                                type: 'text',
                                version: 1,
                              },
                            ],
                            direction: null,
                            format: '',
                            indent: 1,
                            type: 'listitem',
                            version: 1,
                            value: 2,
                          },
                          {
                            children: [
                              {
                                detail: 0,
                                format: 0,
                                mode: 'normal',
                                style: '',
                                text: 'Less than 15 days before departure: No refund will be issued.',
                                type: 'text',
                                version: 1,
                              },
                            ],
                            direction: null,
                            format: '',
                            indent: 1,
                            type: 'listitem',
                            version: 1,
                            value: 3,
                          },
                        ],
                        direction: null,
                        format: '',
                        indent: 0,
                        type: 'list',
                        version: 1,
                        listType: 'bullet',
                        start: 1,
                        tag: 'ul',
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 3,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Refund Process:',
                        type: 'text',
                        version: 1,
                      },
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Refunds will be processed within 10 working days after the cancellation date.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 3,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                textFormat: 1,
                listType: 'bullet',
                start: 1,
                tag: 'ul',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Note:',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: null,
                format: 'start',
                indent: 0,
                type: 'heading',
                version: 1,
                tag: 'h4',
              },
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Cancellation charges are calculated on the total tour cost and depend on the date of departure and the date of cancellation.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 1,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'The Booking Amount is non-refundable.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 2,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'bullet',
                start: 1,
                tag: 'ul',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'No refunds will be granted in the following cases:',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: null,
                format: 'start',
                indent: 0,
                type: 'heading',
                version: 1,
                tag: 'h4',
              },
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'For any missed or unused services during the bike tour, including meals, for any reason.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 1,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'If the tour services are modified, changed, cancelled, or not utilized.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 2,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'If the client cancels the tour due to any alterations in the itinerary or trip details.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 3,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'If the client is dissatisfied with any service provided during the tour.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 4,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'bullet',
                start: 1,
                tag: 'ul',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        otherTermsAndPolicies: {
          root: {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'The sequence of the day-wise tour program or itinerary may be changed by Ladakh Moto without prior notice.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 1,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'The tour itinerary is subject to alterations due to traffic restrictions, weather conditions, flight changes, landslides, or other unforeseen travel-related events.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 2,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'In the event that the group tour is canceled by us due to unavoidable circumstances, we will either transfer your booking to another fixed departure trip or provide a full refund, excluding any flight charges.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 3,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Ladakh Moto ensures the highest level of safety during its adventure programs. However, in the case of any accidents or unforeseen incidents, we are not liable for injuries or loss of life. Any disputes will be subject to the jurisdiction of Leh only.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 4,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'All participants must sign an Indemnity Form before starting the program; failure to do so will result in the traveler being unable to join the adventure activities.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 5,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'No refund will be given if the client get sick or injured during the trip but will be taken care of with full assistance and no added charges.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 6,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'The package price does not include personal expenses such as laundry, phone calls, room service, alcohol, minibar charges, tips, porterage/offloading charges, monument entrance fees, camera fees, etc.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 7,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'The Tour package rates are subject to change without notice due to Force Majeure events, strikes, festivals, weather conditions, traffic delays, hotel or flight over bookings, cancellations or rerouting of flights, or entry restrictions at destinations. No refunds or compensation will be provided in such cases.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 8,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'All guests are required to carry valid photo identification (Passport, Driving License, or Voter ID). Note that a PAN card is not accepted as valid ID in many locations.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 9,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'bullet',
                start: 1,
                tag: 'ul',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        pleaseNote: {
          root: {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'For Rented Bike Option Rs.10,000 is the deposit Amount, which will be refunded back on the final day after completing trip.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 1,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'If you leave your bike at any place then deposit amount will not be refunded.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 2,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Any damage/change of spare part will be payable by traveler directly.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 3,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'For International Traveller Rs. 4000 will be additional',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 4,
                  },
                  {
                    children: [
                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Liability for change in itinerary due to any reasons beyond our control Like Change in Weather Condition, Government Regulations, Local Authority, Biker Unions Rules & Regulations.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    value: 5,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'bullet',
                start: 1,
                tag: 'ul',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
      },
    }),

    payload.updateGlobal({
      slug: 'thingsToKeepInMind',
      data: {
        intro: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Here are some things to keep in mind for motor biking enthusiasts who are looking forward to joining a group motorcycling tour organized by Ladakh Moto in the Himalayas. Adhering to these regulations upholds safety, and promotes efficient carrying out of the tour, while availing an excellent biking experience for everyone.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },

        preTourPreparation: {
          root: {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Fitness Check:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Kindly be sure to check up with your doctor if you are fit enough to undertake long-distance motor bike riding in high altitudes.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 1,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Gear Up:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: " Don't forget to only carry vital biking equipment which include boots designed for wet conditions, thermals, raincoats, and other forms of clothing for dynamic weather scenarios. An approved helmet, armoured riding jackets, gloves, knee guards will be provided by Us.",
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 2,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Bike Condition:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' In case you prefer to use your own bike, conduct detailed checks on systems such as brakes, tires, lights, and the engine for optimal conditions.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 3,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Documents:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Retain your driving license, motorcycle registration, certified insurance, pollution control cert. and permits given by Ladakh Moto on hand.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 4,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                textFormat: 1,
                listType: 'number',
                start: 1,
                tag: 'ol',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },

        groupRidingGuidelines: {
          root: {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Follow the Leader:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Position yourself behind the road captain who takes charge of safety and direction. Overtaking is prohibited unless specified and allowed with a warning.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 1,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Maintain Formation:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Always follow the given riding order (staggered or single file, as given). This makes it easier for the riders to see and feel safer.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 2,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Safe Distance:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Start by keeping a distance of at least 10 to 15 meters from the bike in front of you to create a safe reaction time.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 3,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Communicate:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Use the predetermined hand signals or intercoms to inform danger, stop omissions, or even problems. Try not to brake suddenly or make any sharp turns.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 4,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'number',
                start: 1,
                tag: 'ol',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },

        ontheRoad: {
          root: {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Speed Limit:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Follow the speed limits that the main group member set according to the conditions on the road and the weather.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 1,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Checkpoints:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' The only reason to stop at points other than the designated ones is if someone weakens from riding the motorbike. This ensures no one gets lost.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 2,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Fuel Stops:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' You will be guided to proper refueling points during the tour as the fuel cost is included in the package price.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 3,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Alertness:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Beware of loose gravel, water, landslides, and animals on the road during animal crossings. Use lower gears when going around blind curves.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 4,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Avoid Night Riding:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Where possible, refrain from riding after the sunlight goes down, as driving along poorly lit Himalayan roads can be dangerous. This applies to other shifts if at all.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 5,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'number',
                start: 1,
                tag: 'ol',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },

        altitudeAndHealth: {
          root: {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Acclimatization:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Follow the acclimatization schedule planned by Ladakh Moto to prevent altitude sickness. Avoid rushing to high passes.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 1,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Hydration:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Drink plenty of water to stay hydrated but avoid alcohol and smoking, as they can exacerbate altitude issues.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 2,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Recognize Symptoms:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Inform the road captain immediately if you experience dizziness, nausea, headache, or breathlessness. Emergency oxygen and support will be provided.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 3,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                textFormat: 1,
                listType: 'number',
                start: 1,
                tag: 'ol',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },

        responsibilityTowardsTheEnvironment: {
          root: {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'No Littering:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Dispose of waste responsibly. Use the garbage bags provided or carry trash to designated disposal points.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 1,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Respect Nature:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Avoid disturbing wildlife or damaging local flora. Do not honk unnecessarily.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 2,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Support Locals:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Respect local customs and communities, and purchase responsibly to support their livelihoods.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 3,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'number',
                start: 1,
                tag: 'ol',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },

        emergencyProtocols: {
          root: {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Breakdowns:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Always reach out to your mechanic or the road captain in the event of a mechanical failure. The support team will take care of you.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 1,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Backup:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' In the event that you find yourself in an area with limited communication, always remain within the range of the group.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 2,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                listType: 'number',
                start: 1,
                tag: 'ol',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },

        generalEtiquette: {
          root: {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Punctuality:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' In all aspects, do not be late for departure, meals, and especially briefings. Delays affect the entire group.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 1,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Positive Attitude:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Get along with the team and other riders in the group in order to sustain balance.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 2,
                  },

                  {
                    children: [
                      {
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Avoid Overpacking:',
                        type: 'text',
                        version: 1,
                      },

                      {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Ladakh Moto has certain limits in terms of luggage and gear which should never be exceeded. Too much baggage will only cause the team to waste time and confuse the logistics.',
                        type: 'text',
                        version: 1,
                      },
                    ],
                    direction: null,
                    format: 'start',
                    indent: 0,
                    type: 'listitem',
                    version: 1,
                    textFormat: 1,
                    value: 3,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'list',
                version: 1,
                textFormat: 1,
                listType: 'number',
                start: 1,
                tag: 'ol',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },

        outro: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'By adhering to these instructions, you ensure a safe, memorable, and fulfilling biking adventure through the majestic Himalayas. Ladakh Moto takes pride in curating a seamless experience for all its riders. Your safety and enjoyment are our top priorities.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: null,
                format: 'justify',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },

              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Ride safe, and enjoy the journey!',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: null,
                format: 'justify',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
      },
    }),

    payload.updateGlobal({
      slug: 'ridingGears',
      data: {
        media: mediaMap['riding-gears.webp'],
      },
      context: req.context,
    }),

    // Cost Conditions
    payload.updateGlobal({
      slug: 'costCondition',
      data: {
        conditions: [
          {
            condition: "5% GST applicable"
          },
          {
            condition: "Slot booking amount is not refundable"
          }
        ],
      },
      context: req.context,
    }),

  ])
}
