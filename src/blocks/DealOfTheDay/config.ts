import type { Block } from 'payload'

export const DealOfTheDay: Block = {
  slug: 'dealOfTheDay',
  interfaceName: 'DealOfTheDayBlock',
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Enabled',
      defaultValue: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Deal Image',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'subTitle',
      type: 'text',
      label: 'Sub Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'startDate',
      type: 'date',
      label: 'Start Date',
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'End Date',
    },
    {
      name: 'price',
      type: 'text',
      label: 'Price (e.g. ₹15,500)',
    },
    {
      name: 'url',
      type: 'text',
      label: 'Deal URL',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
      defaultValue: 'View Deal',
    },
  ],
  labels: {
    plural: 'Deals of the Day',
    singular: 'Deal of the Day',
  },
}
