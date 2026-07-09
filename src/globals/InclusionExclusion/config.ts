import type { GlobalConfig } from 'payload'

export const InclusionExclusion: GlobalConfig = {
  slug: 'inclusionExclusion',
  label: 'Inclusion Exclusion',
  access: {
    read: () => true,
  },

  fields: [
     {
        type: 'array',
        name: 'inclusions',
        labels: {
        singular: 'Inclusion',
        plural: 'Inclusions',
        },
        fields: [
        {
            name: 'inclusion',
            type: 'text',
        },
        ],
        admin: {
        initCollapsed: true,
        },
    },

    {
        type: 'array',
        name: 'exclusions',
        labels: {
        singular: 'Exclusion',
        plural: 'Exclusion',
        },
        fields: [
        {
            name: 'exclusion',
            type: 'text',
        },
        ],
        admin: {
        initCollapsed: true,
        },
    },
  ],
}
