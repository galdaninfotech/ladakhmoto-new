import type { Block } from 'payload'

export const HotelsBlock: Block = {
  slug: 'hotelsBlock',
  interfaceName: 'HotelsBlock',
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Enabled',
      defaultValue: true,
    },
  ],
}
