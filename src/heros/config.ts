import type { Field } from 'payload'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      name: 'slides',
      type: 'array',
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'offerTitle',
          type: 'text',
        },
        {
          name: 'offerDescription',
          type: 'text',
        },
        {
          name: 'offerBtnText',
          type: 'text',
        },
        {
          name: 'offerUrl',
          type: 'text'
        },
        {
          name: 'cta1Text',
          type: 'text',
        },
        {
          name: 'cta2Text',
          type: 'text',
        },
        
      ],
      // maxRows: 10,
      admin: {
        initCollapsed: true,
      },
    },
  ],
  label: false,
}