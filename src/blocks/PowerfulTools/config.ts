import type { Block } from 'payload'

import { sectionFields } from '@/fields/sectionSurface'

export const PowerfulTools: Block = {
  slug: 'powerfulTools',
  interfaceName: 'PowerfulToolsBlock',
  labels: {
    singular: 'Powerful tools',
    plural: 'Powerful tools',
  },
  fields: [
    ...sectionFields,
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow',
      defaultValue: 'Powerful tools',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      defaultValue: 'Everything realtors need to locate, research, and market smarter.',
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Tool cards',
      minRows: 1,
      maxRows: 6,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          required: true,
          defaultValue: 'fileSearch',
          options: [
            { label: 'Search / document', value: 'fileSearch' },
            { label: 'Folder', value: 'folder' },
            { label: 'Shield + check', value: 'shieldCheck' },
            { label: 'Chart / stats', value: 'barChart' },
            { label: 'Map pin', value: 'mapPin' },
            { label: 'Users', value: 'users' },
          ],
        },
        {
          name: 'badge',
          type: 'text',
          label: 'Badge (top right)',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Card title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
      ],
    },
  ],
}
