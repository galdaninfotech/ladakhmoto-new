import type { GlobalConfig } from 'payload';

import { link } from '@/fields/link';
import { revalidateHeader } from './hooks/revalidateHeader';

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      maxRows: 9,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
      fields: [
        link({
          appearances: false,
        }),
        {
          name: 'subLinks',
          label: 'Sub Links',
          type: 'array',
          admin: {
            initCollapsed: true,
          },
          fields: [
            link({
              appearances: false,
            }),
            {
              name: 'subSubLinks',
              label: 'Sub-Sub Links',
              type: 'array',
              admin: {
                initCollapsed: true,
              },
              fields: [
                link({
                  appearances: false,
                }),
              ],
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
};