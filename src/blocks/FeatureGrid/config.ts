import type { Block } from 'payload'

import { sectionFields } from '@/fields/sectionSurface'

export const FeatureGrid: Block = {
  slug: 'featureGrid',
  interfaceName: 'FeatureGridBlock',
  labels: {
    singular: 'Feature grid',
    plural: 'Feature grids',
  },
  fields: [
    ...sectionFields,
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow',
      defaultValue: 'Why Title Toolbox',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      defaultValue: 'Your competitive edge in the title industry.',
    },
    {
      name: 'intro',
      type: 'textarea',
      label: 'Intro paragraph',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Feature cards',
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'body',
          type: 'textarea',
          label: 'Card text',
          required: true,
        },
      ],
    },
  ],
}
