import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'

export const Hotels: CollectionConfig = {
  slug: 'hotels',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'starRating', 'updatedAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'website',
      type: 'text',
      admin: {
        description: 'URL to the hotel website or booking page',
      },
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Image Gallery',
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      maxRows: 12,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
      admin: {
        description: 'Add up to 12 images. The first image will be used as the primary image.',
        initCollapsed: true,
      },
    },
    {
      name: 'starRating',
      type: 'select',
      options: [
        { label: '1 Star', value: '1' },
        { label: '2 Stars', value: '2' },
        { label: '3 Stars', value: '3' },
        { label: '4 Stars', value: '4' },
        { label: '5 Stars', value: '5' },
        { label: 'Luxury', value: 'luxury' },
        { label: 'Standard', value: 'standard' },
        { label: 'Basic', value: 'basic' },
      ],
      defaultValue: 'standard',
    },
  ],
}
