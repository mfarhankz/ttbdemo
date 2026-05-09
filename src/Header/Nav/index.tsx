'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { SearchIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()
  const isHome = pathname === '/' || pathname === '/home'
  const isContact = pathname === '/contact'

  if (isHome) {
    const ctaIndex = navItems.length > 0 ? navItems.length - 1 : -1
    const navLinks = navItems.slice(0, ctaIndex >= 0 ? ctaIndex : navItems.length)

    return (
      <nav className="flex items-center gap-8 md:gap-8">
        {navLinks.map(({ link }, i) => (
          <CMSLink
            key={i}
            {...link}
            appearance="inline"
            className="px-1 text-[14px] uppercase tracking-[0.14em] text-white/85 transition hover:text-white"
          />
        ))}
      </nav>
    )
  }

  if (isContact) {
    return (
      <nav className="flex items-center">
        <Link className="text-sm text-white/85 transition hover:text-white" href="/">
          Back to site
        </Link>
      </nav>
    )
  }

  return (
    <nav className="flex gap-2 items-center">
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="inline" />
      })}
    </nav>
  )
}
