import type { GlobalConfig } from 'payload'

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

export const ThingsToKeepInMind: GlobalConfig = {
  slug: 'thingsToKeepInMind',
  label: 'Things To Keep In Mind',
  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'intro',
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
    },

    {
      name: 'preTourPreparation',
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
            TextStateFeature({
              // prettier-ignore
              state: {
                  color: {
                    // ...defaultColors,
                    // fancy gradients!
                    galaxy: { label: 'Galaxy', css: { background: 'linear-gradient(to right, #0000ff, #ff0000)', color: 'teal' } },
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
    },

    {
      name: 'groupRidingGuidelines',
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
    },

    {
      name: 'ontheRoad',
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
    },

    {
      name: 'altitudeAndHealth',
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
    },

    {
      name: 'responsibilityTowardsTheEnvironment',
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
    },

    {
      name: 'emergencyProtocols',
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
    },

    {
      name: 'generalEtiquette',
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
    },

    {
      name: 'outro',
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
    },
  ],
}
