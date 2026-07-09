import type { GlobalConfig } from 'payload'

export const RidingGears: GlobalConfig = {
  slug: 'ridingGears',
  label: 'Riding Gears',
  access: {
    read: () => true,
  },

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
  ],
}
