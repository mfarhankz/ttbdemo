import type { Block } from 'payload'

import { sectionSurfaceField } from '@/fields/sectionSurface'

export const ProcessSteps: Block = {
  slug: 'processSteps',
  interfaceName: 'ProcessStepsBlock',
  labels: {
    singular: 'Process steps',
    plural: 'Process steps',
  },
  fields: [
    sectionSurfaceField,
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow',
      defaultValue: 'Search flow',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      defaultValue: 'Map-based search makes property identification simple.',
    },
    {
      name: 'intro',
      type: 'textarea',
      label: 'Intro paragraph',
      defaultValue:
        'Search for an individual property or groups of properties with intuitive clicks, filter for the owners and areas that matter, then export the information for outreach and follow-up.',
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Steps',
      minRows: 1,
      maxRows: 8,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Step label',
          required: true,
        },
      ],
    },
  ],
}
