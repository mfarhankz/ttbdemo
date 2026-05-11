import type { Block } from 'payload'

import { sectionFields } from '@/fields/sectionSurface'

export const AccordionBlock: Block = {
  slug: 'accordionBlock',
  interfaceName: 'AccordionBlock',
  labels: {
    singular: 'FAQ accordion',
    plural: 'FAQ accordions',
  },
  fields: [
    ...sectionFields,
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow',
      defaultValue: 'FAQ',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      defaultValue: 'Frequently asked questions.',
    },
    {
      name: 'intro',
      type: 'textarea',
      label: 'Intro paragraph',
      defaultValue:
        'Everything title companies, realtors, and lenders ask before getting started with Title Toolbox.',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Questions',
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
