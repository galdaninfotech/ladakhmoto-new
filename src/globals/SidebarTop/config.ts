import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'

export const SidebarTop: GlobalConfig = {
  slug: 'sidebarTop',
  label: 'Top Sidebar',
  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'links',
      type: 'array',
      label: 'Links',
      minRows: 1,
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },   
    
  ],
}
