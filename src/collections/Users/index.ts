import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'designation',
      type: 'select',
      options: [
        {
          label: 'Admin',
          value: 'Admin',
        },
        {
          label: 'Tour Leader',
          value: 'Tour Leader',
        },
        {
          label: 'Marshal',
          value: 'Marshal',
        },
        {
          label: 'Operation',
          value: 'Operation',
        },
      ]
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'bio',
      type: 'textarea',
    },
  ],
  timestamps: true,
}
