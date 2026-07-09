import type { GlobalConfig } from 'payload'

export const CostCondition: GlobalConfig = {
  slug: 'costCondition',
  label: 'Cost Condition',
  access: {
    read: () => true,
  },

  fields: [
    {
      type: 'array',
      name: 'conditions',
      labels: {
        singular: 'Condition',
        plural: 'Conditions',
      },
      fields: [
        {
          name: 'condition',
          type: 'text',
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
