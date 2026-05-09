import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'ctaEyebrow',
      type: 'text',
      label: 'CTA eyebrow',
      defaultValue: 'Works on any device',
    },
    {
      name: 'ctaHeadline',
      type: 'textarea',
      label: 'CTA headline',
      defaultValue:
        'iPad, iPhone, Android, Mac, or PC — Title Toolbox goes where you work.',
    },
    link({
      appearances: ['default', 'outline', 'link'],
      overrides: {
        name: 'ctaLink',
        label: 'CTA button',
        admin: {
          description: 'Internal or custom URL, label, and appearance (button or text link).',
        },
      },
    }),
    {
      name: 'ctaOpensDemoModal',
      type: 'checkbox',
      label: 'CTA opens demo modal',
      defaultValue: true,
      admin: {
        description:
          'When enabled, the CTA opens the site demo request modal instead of navigating.',
      },
    },
    {
      name: 'disclaimer',
      type: 'textarea',
      label: 'Disclaimer',
      defaultValue:
        'Disclaimer: Data coverage and availability vary by region. Not all data, reports, or features are available in every area.',
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
