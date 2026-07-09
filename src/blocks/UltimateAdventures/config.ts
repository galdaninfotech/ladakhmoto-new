import type { Block } from 'payload'

export const UltimateAdventuresBlock: Block = {
  slug: 'ultimateAdventuresBlock',
  interfaceName: 'UltimateAdventuresBlock',
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
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
  ],
}
