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
  const isHome = pathname === '/'
  const isContact = pathname === '/contact'
  const homeLinks = [
    { href: '#tools', label: 'Tools' },
    { href: '#search-flow', label: 'Search Flow' },
    { href: '#why-ttb', label: 'Why TTB' },
    { href: '#faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  if (isHome) {
    return (
      <nav className="flex items-center gap-2 md:gap-3">
        {homeLinks.map((item) => (
          <a
            className="px-1 text-[11px] uppercase tracking-[0.14em] text-white/85 transition hover:text-white"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
        <button
          className="ml-2 rounded-sm bg-cyan-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-cyan-400"
          data-open-demo-modal="true"
          type="button"
        >
          Request a Demo
        </button>
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
        return (
          <CMSLink
            key={i}
            {...link}
            appearance="link"
          />
        )
      })}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </nav>
  )
}
