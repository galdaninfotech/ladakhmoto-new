import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'

export const SidebarBottom: GlobalConfig = {
  slug: 'sidebarBottom',
  label: 'Bottom Sidebar',
  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'navItems',
      type: 'array',
      maxRows: 9,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/globals/SidebarBottom/RowLabel#RowLabel',
        },
      },
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
