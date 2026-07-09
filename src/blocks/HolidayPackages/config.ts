import type { Block } from 'payload'

export const HolidayPackages: Block = {
  slug: 'holidayPackages',
  interfaceName: 'HolidayPackagesBlock',
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
      name: 'limit',
      label: 'Limit',
      type: 'number',
      defaultValue: 6,
      admin: {
        step: 1,
        description: 'Maximum number of tours to display',
      },
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        description: 'Choose categories to filter recent tours',
      },
    },
  ],
}