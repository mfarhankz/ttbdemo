import type { Field } from 'payload'

export const sectionSurfaceField: Field = {
  name: 'sectionSurface',
  type: 'select',
  label: 'Section background',
  defaultValue: 'none',
  options: [
    { label: 'Texture', value: 'texture' },
    { label: 'Gradient', value: 'gradient' },
    { label: 'None', value: 'none' },
  ],
}

export const sectionIdField: Field = {
  name: 'sectionId',
  type: 'text',
  label: 'Section ID (anchor)',
  admin: {
    description:
      'Optional. Rendered as id="..." on the <section> tag so nav links can scroll to it (e.g. "features").',
    placeholder: 'features',
  },
}

export const sectionFields: Field[] = [sectionSurfaceField, sectionIdField]

export type SectionSurface = 'texture' | 'gradient' | 'none'

export function sectionSurfaceClassName(surface: SectionSurface | null | undefined): string {
  switch (surface) {
    case 'texture':
      return 'paper-texture'
    case 'gradient':
      return 'bg-paper-gradient'
    case 'none':
    default:
      return 'bg-paper-gradient'
  }
}
