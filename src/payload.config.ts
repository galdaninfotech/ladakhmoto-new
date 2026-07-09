import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
// import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { s3Storage } from '@payloadcms/storage-s3'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Hotels } from './collections/Hotels'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL, getSiteURL } from './utilities/getURL'

import { UltimateAdventures } from './collections/UltimateAdventures'
import { BikingAdventures } from './collections/BikingAdventures'
import { HolidayPackages } from './collections/HolidayPackages'
import { Destinations } from './collections/Destinations'
import { Highlights } from './collections/Highlights'

import { LadakhMoto } from './LadakhMoto/config'
import { SidebarBottom } from './globals/SidebarBottom/config'
import { SidebarTop } from './globals/SidebarTop/config'
import { InclusionExclusion } from './globals/InclusionExclusion/config'
import { InclusionExclusionPackage } from './globals/InclusionExclusionPackage/config'
import { InclusionExclusionUltimateAdventure } from './globals/InclusionExclusionUltimateAdventure/config'
import { TourPolicies } from './globals/TourPolicies/config'
import { ThingsToKeepInMind } from './globals/ThingsToKeepInMind/config'
import { RidingGears } from './globals/RidingGears/config'
import { CostCondition } from './globals/CostCondition/config'
import { Settings } from '@/globals/config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Admin Icons
const siteURL = getSiteURL()
const iconUrl = `${siteURL}/api/media/file/Square%20light.png`
const darkIconUrl = `${siteURL}/api/media/file/Square.png`
const openGraphImageUrl = `${siteURL}/api/media/file/nlv_codes.png`

export default buildConfig({
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeDashboard: ['@/components/BeforeDashboard'],
      graphics: {
        Logo: '/graphics/Logo/index.tsx#Logos',
        Icon: '/graphics/Icon/index.tsx#Icons',
      },
      logout: { Button: '/components/Admin/Root/Logout/Logout.tsx#Logout' },
      views: {
        analytics: {
          Component: '@/components/Admin/PlausibleView/index.tsx',
          path: '/analytics',
        },
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    toast: {
      duration: 10000,
      limit: 1,
      position: 'top-right',
    },
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
    meta: {
      // Admin Favicon
      icons: [
        {
          fetchPriority: 'high',
          sizes: '32x32',
          type: 'image/webp',
          rel: 'icon',
          url: iconUrl,
        },
        {
          fetchPriority: 'high',
          sizes: '32x32',
          type: 'image/webp',
          rel: 'icon',
          url: darkIconUrl,
          media: '(prefers-color-scheme: dark)',
        },
      ],
      // Admin's Browser Tab Title
      // title: 'Example',
      titleSuffix: '- Ladakh Moto',
      description: 'Ladakh Moto Website',
      applicationName: 'Ladakh Moto',
      openGraph: {
        title: 'Local Travel Experts for Leh Ladakh bike tours - Ladakh Moto',
        description:
          'Your local Ladakh travel agency specializing in bike tours, adventure bike trips, and customized road journeys. Experience bike tour with Ladakh Moto.',
        siteName: 'Ladakh Moto',
        images: [
          {
            url: openGraphImageUrl,
          },
        ],
      },
    },
  },
  cors: [
    getServerSideURL(),
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://localhost:3001',
    'http://127.0.0.1:3001',
    'http://localhost:3002',
    'http://127.0.0.1:3002',
  ].filter(Boolean),
  csrf: [
    getServerSideURL(),
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://localhost:3001',
    'http://127.0.0.1:3001',
    'http://localhost:3002',
    'http://127.0.0.1:3002',
  ].filter(Boolean),
  upload: {
    limits: {
      fileSize: 5000000,
    },
  },
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  email: nodemailerAdapter({
    defaultFromAddress: process.env.SMTP_FROM_ADDRESS || 'info@ladakhmoto.com',
    defaultFromName: process.env.SMTP_FROM_NAME || 'Ladakh Moto',
    transportOptions:
      process.env.SMTP_HOST && !process.env.NEXT_PHASE
        ? {
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        }
        : {
          streamTransport: true, // Prevents hanging during build
        },
  }),
  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.POSTGRES_URL ||
        process.env.DATABASE_URL ||
        'postgres://localhost:5432/build-placeholder',
      ssl: (process.env.POSTGRES_URL || process.env.DATABASE_URL || '').includes('aws.neon.tech')
        ? { rejectUnauthorized: false }
        : false,
      max: Number(process.env.POSTGRES_MAX_POOL) || 10,
    },
    push: false,
  }),
  collections: [
    Pages,
    Posts,
    Media,
    Categories,
    Users,
    UltimateAdventures,
    BikingAdventures,
    HolidayPackages,
    Destinations,
    Highlights,
    Hotels,
  ],
  globals: [
    Settings,
    Header,
    Footer,
    LadakhMoto,
    SidebarBottom,
    SidebarTop,
    InclusionExclusion,
    InclusionExclusionPackage,
    InclusionExclusionUltimateAdventure,
    TourPolicies,
    ThingsToKeepInMind,
    RidingGears,
    CostCondition,
  ],
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET || '',
      disableLocalStorage: true,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT || undefined,
        forcePathStyle: process.env.S3_ENDPOINT ? true : undefined,
      },
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || 'YOUR_APP_SECRET_KEY_FALLBACK_FOR_BUILD',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },

  endpoints: [],
})
