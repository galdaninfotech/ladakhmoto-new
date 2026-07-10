import type { Block } from 'payload'

export const HighlightsBlock: Block = {
  slug: 'highlightsBlock',
  interfaceName: 'HighlightsBlock',
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Enabled',
      defaultValue: true,
    },
  ],
}
