import type { GlobalConfig } from 'payload'

export const InclusionExclusionUltimateAdventure: GlobalConfig = {
  slug: 'inclusionExclusionUltimateAdventure',
  label: 'Inclusion Exclusion - Ultimate Adventure',
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
