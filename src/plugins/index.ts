import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { searchPlugin } from '@payloadcms/plugin-search'
import { Plugin } from 'payload'
import { revalidateRedirects } from '@/hooks/revalidateRedirects'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { searchFields } from '@/search/fieldOverrides'
import { beforeSyncWithSearch } from '@/search/beforeSync'

import { PayloadPluginMcp } from 'payload-plugin-mcp'
import { mcpPlugin } from '@payloadcms/plugin-mcp'
import type { Page, Post, BikingAdventure, HolidayPackage, Destination } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'

const generateTitle: GenerateTitle<
  Page | Post | BikingAdventure | HolidayPackage | Destination
> = ({ doc }) => {
  return doc?.title ? `${doc.title} | Ladakh Moto` : 'Ladakh Moto'
}

const generateURL: GenerateURL<Page | Post | BikingAdventure | HolidayPackage | Destination> = ({
  doc,
}) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  /*
  PayloadPluginMcp({
    apiKey: process.env.MCP_API_KEY || '',
  }),
  */
  
  // Payload MCP
  /*
  mcpPlugin({
    collections: {
      pages: {
        enabled: true,
      },
      posts: {
        enabled: true,
      },
      bikingAdventures: {
        enabled: true,
      },
      holidayPackages: {
        enabled: true,
      },
      destinations: {
        enabled: true,
      },
      ultimateAdventures: {
        enabled: true,
      },
    },
  }),
  */
  
  redirectsPlugin({
    collections: ['posts', 'pages', 'bikingAdventures', 'holidayPackages', 'destinations'],
    overrides: {
      // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            }
          }
          return field
        })
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  nestedDocsPlugin({
    collections: ['categories'],
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
  }),
  seoPlugin({
    generateTitle,
    generateDescription: ({ doc }) => doc.plaintext,
    generateURL,
  }),
  formBuilderPlugin({
    fields: {
      payment: false,
    },
    formOverrides: {
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'confirmationMessage') {
            return {
              ...field,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                  ]
                },
              }),
            }
          }
          return field
        })
      },
    },
  }),
  searchPlugin({
    collections: ['posts', 'pages', 'bikingAdventures', 'holidayPackages', 'destinations'],
    beforeSync: beforeSyncWithSearch,
    searchOverrides: {
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields]
      },
    },
  }),
]
