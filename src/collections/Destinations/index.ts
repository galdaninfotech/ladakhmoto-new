import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  LinkFeature,
  UploadFeature,
  OrderedListFeature,
  UnorderedListFeature,
  SubscriptFeature,
  SuperscriptFeature,
  AlignFeature,
  IndentFeature,
  ChecklistFeature,
  BlockquoteFeature,
  HorizontalRuleFeature,
  TextStateFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
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

export const Destinations: CollectionConfig<'destinations'> = {
  slug: 'destinations',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'destinations',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'destinations',
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
              name: 'subTitle',
              type: 'text',
            },
            {
              name: 'topImage',
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
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    OrderedListFeature(),
                    UnorderedListFeature(),
                    SubscriptFeature(),
                    SuperscriptFeature(),
                    AlignFeature(),
                    IndentFeature(),
                    ChecklistFeature(),
                    BlockquoteFeature(),
                    HorizontalRuleFeature(),
                    TextStateFeature({
                      // prettier-ignore
                      state: {
                        color: {
                          // ...defaultColors,
                          // fancy gradients!
                          galaxy: { label: 'Galaxy', css: { background: 'linear-gradient(to right, #0000ff, #ff0000)', color: 'white' } },
                          sunset: { label: 'Sunset', css: { background: 'linear-gradient(to top, #ff5f6d, #6a3093)' } },
                        },
                        // You can have both colored and underlined text at the same time.
                        // If you don't want that, you should group them within the same key.
                        // (just like I did with defaultColors and my fancy gradients)
                        underline: {
                          'solid': { label: 'Solid', css: { 'text-decoration': 'underline', 'text-underline-offset': '4px' } },
                          // You'll probably want to use the CSS light-dark() utility.
                          'yellow-dashed': { label: 'Yellow Dashed', css: { 'text-decoration': 'underline dashed', 'text-decoration-color': 'light-dark(#EAB308,yellow)', 'text-underline-offset': '4px' } },
                        },
                      },
                    }),
                    LinkFeature({
                      // Example showing how to customize the built-in fields
                      // of the Link feature
                      fields: ({ defaultFields }) => [
                        ...defaultFields,
                        {
                          name: 'rel',
                          label: 'Rel Attribute',
                          type: 'select',
                          hasMany: true,
                          options: ['noopener', 'noreferrer', 'nofollow'],
                          admin: {
                            description:
                              'The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.',
                          },
                        },
                      ],
                    }),
                    UploadFeature({
                      collections: {
                        uploads: {
                          // Example showing how to customize the built-in fields
                          // of the Upload feature
                          fields: [
                            {
                              name: 'caption',
                              type: 'richText',
                              editor: lexicalEditor(),
                            },
                          ],
                        },
                      },
                    }),
                    // This is incredibly powerful. You can reuse your Payload blocks
                    // directly in the Lexical editor as follows:
                    BlocksFeature({
                      blocks: [],
                    }),
                  ]
                },
              }),
              label: false,
              required: true,
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
