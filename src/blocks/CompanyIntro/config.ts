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

export const CompanyIntro: Block = {
  slug: 'companyIntro',
  interfaceName: 'CompanyIntroBlock',
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Enabled',
      defaultValue: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'subTitle',
      type: 'text',
      label: 'Enabled',
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
            BlocksFeature({
              blocks: [],
            }),
          ]
        },
      }),
    },
    {
      name: 'readMore',
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
            BlocksFeature({
              blocks: [],
            }),
          ]
        },
      }),
    },
  ],
}
