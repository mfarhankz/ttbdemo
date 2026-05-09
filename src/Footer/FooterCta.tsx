import type { Footer, Page, Post } from '@/payload-types'
import Link from 'next/link'
import React from 'react'

import { cn } from '@/utilities/ui'

type CtaLink = Footer['ctaLink']

function hrefFromCtaLink(ctaLink: CtaLink | null | undefined): string | null {
  if (!ctaLink?.type) return null
  if (ctaLink.type === 'custom' && ctaLink.url?.trim()) return ctaLink.url.trim()
  if (ctaLink.type === 'reference' && ctaLink.reference?.value) {
    const { value, relationTo } = ctaLink.reference
    if (typeof value === 'object' && value && 'slug' in value) {
      const slug = (value as Page | Post).slug
      return relationTo === 'pages' ? `/${slug}` : `/${relationTo}/${slug}`
    }
  }
  return null
}

const appearanceClass: Record<'default' | 'outline' | 'link', string> = {
  default:
    'inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-white px-5 py-2.5 text-sm font-semibold text-[#1d1d72] shadow-sm transition hover:bg-slate-100',
  outline:
    'inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border-2 border-white bg-transparent px-5 py-2.5 text-sm font-semibold text-white shadow-none transition hover:bg-white/10',
  link: 'inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#00b8db] underline underline-offset-4 transition hover:text-white',
}

export const FooterCta: React.FC<{
  ctaLink: CtaLink | null | undefined
  ctaOpensDemoModal: boolean
}> = ({ ctaLink, ctaOpensDemoModal }) => {
  const appearance = (ctaLink?.appearance as 'default' | 'outline' | 'link') || 'default'
  const baseLabel = ctaLink?.label?.trim() || 'Request a Demo'
  const showArrow = appearance !== 'link'
  const label = showArrow ? `${baseLabel}\u00a0→` : baseLabel
  const newTabProps = ctaLink?.newTab
    ? ({ rel: 'noopener noreferrer' as const, target: '_blank' as const } as const)
    : {}
  const href = hrefFromCtaLink(ctaLink ?? undefined)
  const cls = cn(appearanceClass[appearance])

  if (ctaOpensDemoModal) {
    return (
      <button className={cls} data-open-demo-modal="true" type="button">
        {label}
      </button>
    )
  }

  if (!href) {
    return (
      <button className={cls} data-open-demo-modal="true" type="button">
        {label}
      </button>
    )
  }

  return (
    <Link className={cls} href={href} {...newTabProps}>
      {label}
    </Link>
  )
}
