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
