import type { Block } from 'payload'

import { sectionSurfaceField } from '@/fields/sectionSurface'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlock',
  fields: [
    sectionSurfaceField,
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
