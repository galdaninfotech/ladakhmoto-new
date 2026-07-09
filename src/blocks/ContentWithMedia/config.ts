import type { Block } from 'payload'
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
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const ContentWithMedia: Block = {
  slug: 'contentWithMedia',
  interfaceName: 'ContentWithMediaBlock',
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Enabled',
      defaultValue: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
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
    },
  ],
}
