import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'

export const BikingAdventures: CollectionConfig<'bikingAdventures'> = {
  slug: 'bikingAdventures',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a post is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'posts'>
  defaultPopulate: {
    title: true,
    slug: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'bikingAdventures',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'bikingAdventures',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'description',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: false,
              required: true,
            },
            {
              name: 'highlights',
              type: 'relationship',
              relationTo: 'highlights',
              hasMany: true,
              admin: {
                hidden: true,
              },
            },
            {
              name: 'summary',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: false,
              required: true,
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'duration',
                  type: 'text',
                  admin: { width: '50%' },
                },
                {
                  name: 'distance',
                  type: 'text',
                  admin: { width: '50%' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'highestPeak',
                  type: 'text',
                  admin: { width: '50%' },
                },
                {
                  name: 'difficulty',
                  type: 'select',
                  admin: { width: '50%' },
                  defaultValue: 'easy',
                  options: [
                    { label: 'Easy', value: 'easy' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'Hard', value: 'hard' },
                  ],
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'accommodation',
                  type: 'select',
                  admin: { width: '50%' },
                  hasMany: true,
                  options: [
                    { label: 'Hotel', value: 'hotel' },
                    { label: 'Resort', value: 'resort' },
                    { label: 'Camp', value: 'camp' },
                    { label: 'Homestay', value: 'home-stay' },
                    { label: 'Guest House', value: 'gh' },
                    { label: 'Cottage', value: 'cottage' },
                  ],
                },
                {
                  name: 'meal',
                  type: 'select',
                  admin: { width: '50%' },
                  hasMany: true,
                  options: [
                    { label: 'Breakfast', value: 'breakfast' },
                    { label: 'Lunch', value: 'lunch' },
                    { label: 'Dinner', value: 'dinner' },
                  ],
                },
              ],
            },
            {
              name: 'overviewImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'overviewGallery',
              type: 'array',
              label: 'Overview Gallery',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
            {
              name: 'overviewVideo',
              type: 'group',
              label: 'Overview Video',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'url',
                      type: 'text',
                      label: 'YouTube/Vimeo URL',
                      admin: { width: '50%' },
                    },
                    {
                      name: 'video',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Uploaded Video',
                      admin: { width: '50%' },
                    },
                  ],
                },
              ],
            },
            {
              name: 'overviewMap',
              type: 'textarea',
              label: 'Overview Map (Embed Code or URL)',
            },
            {
              name: 'itineraries',
              type: 'array',
              labels: {
                singular: 'Day',
                plural: 'Itineraries',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'duration',
                      type: 'text',
                      admin: { width: '50%' },
                    },
                    {
                      name: 'distance',
                      type: 'text',
                      admin: { width: '50%' },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'highestPeak',
                      type: 'text',
                      admin: { width: '50%' },
                    },
                    {
                      name: 'difficulty',
                      type: 'select',
                      admin: { width: '50%' },
                      defaultValue: 'easy',
                      options: [
                        { label: 'Easy', value: 'easy' },
                        { label: 'Medium', value: 'medium' },
                        { label: 'Hard', value: 'hard' },
                      ],
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'accommodation',
                      type: 'select',
                      admin: { width: '50%' },
                      hasMany: true,
                      options: [
                        { label: 'Camp', value: 'camp' },
                        { label: 'Cottage', value: 'cottage' },
                        { label: 'Hotel', value: 'hotel' },
                        { label: 'Homestay', value: 'home-stay' },
                        { label: 'Resort', value: 'resort' },
                        { label: 'Guest House', value: 'gh' },
                      ],
                    },
                    {
                      name: 'meal',
                      type: 'select',
                      admin: { width: '50%' },
                      hasMany: true,
                      options: [
                        { label: 'Breakfast', value: 'breakfast' },
                        { label: 'Lunch', value: 'lunch' },
                        { label: 'Dinner', value: 'dinner' },
                      ],
                    },
                  ],
                },
                {
                  name: 'media',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'activity',
                  type: 'textarea',
                },
                {
                  name: 'structuredHighlights',
                  type: 'relationship',
                  relationTo: 'highlights',
                  hasMany: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                },
                {
                  name: 'overnight',
                  type: 'textarea',
                },
                {
                  name: 'hotel',
                  type: 'relationship',
                  relationTo: 'hotels',
                  hasMany: false,
                  admin: {
                    description: 'Select the hotel provided for this day.',
                  },
                },
              ],
              admin: {
                initCollapsed: true,
              },
            },
            {
              name: 'dates',
              type: 'array',
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'start',
                  type: 'date',
                  admin: {
                    date: {
                      // pickerAppearance: 'dayAndTime',
                      // displayFormat: 'dd MMM, yyyy hh:mm a',
                      displayFormat: 'dd MMM, yyyy',
                    },
                    position: 'sidebar',
                  },
                },
                {
                  name: 'end',
                  type: 'date',
                  admin: {
                    date: {
                      displayFormat: 'dd MMM, yyyy',
                    },
                    position: 'sidebar',
                  },
                },
                {
                  name: 'status',
                  type: 'select',
                  options: [
                    { label: 'Open', value: 'open' },
                    { label: 'Closing Soon', value: 'closing-soon' },
                    { label: 'Closed', value: 'closed' },
                  ],
                },
              ],
            },
            {
              name: 'cost',
              type: 'array',
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'travelMode',
                  type: 'select',
                  options: [
                    { label: 'Own Bike', value: 'own-bike' },
                    { label: 'Solo Rider', value: 'solo-rider' },
                    { label: 'Dual Ride', value: 'dual-ride' },
                    { label: 'Seat in Backup Vehicle', value: 'seat-in-backup-vehicle' },
                    { label: 'SUV (min 5 seats)', value: 'suv' },
                  ],
                },
                {
                  name: 'vehicleProvided',
                  type: 'select',
                  options: [
                    { label: 'Own Bike', value: 'own-bike' },
                    { label: 'Himalayan 411 BSVI', value: 'himalayan-411-bs6' },
                    { label: 'Himalayan 452 BSVI', value: 'himalayan-452-bs6' },
                    { label: 'Isuzu/Camper', value: 'isuzu-camper' },
                    { label: 'Innova/Xylo', value: 'innova-xylo' },
                  ],                },
                {
                  name: 'costPerPerson',
                  type: 'number',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'privateRoomUpgrade',
                  type: 'text',
                  admin: { width: '50%' },
                },
                {
                  name: 'bikeUpgrade',
                  type: 'text',
                  admin: { width: '50%' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'isFeatured',
                  type: 'checkbox',
                  label: 'Is this tour featured?',
                  admin: { width: '50%' },
                  defaultValue: false,
                },
                {
                  name: 'order',
                  type: 'number',
                  admin: { width: '50%' },
                },
              ],
            },
            {
              name: 'startEndCity',
              type: 'text',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'minCost',
                  type: 'text',
                  admin: { width: '50%' },
                },
                {
                  name: 'cutOutCost',
                  type: 'text',
                  admin: { width: '50%' },
                },
              ],
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'users',
    },
    {
      name: 'categories',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'categories',
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: 'populatedAuthors',
      type: 'array',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePost],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
