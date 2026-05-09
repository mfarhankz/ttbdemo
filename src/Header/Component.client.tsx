'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  headerData: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ headerData }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const isHome = pathname === '/' || pathname === '/home'
  const isContact = pathname === '/contact'
  const navItems = headerData?.navItems || []
  const ctaLabel = navItems.length > 0 ? navItems[navItems.length - 1]?.link?.label : undefined

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className={
        isHome
          ? 'fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#211b67] text-white shadow-[0_8px_24px_rgba(15,23,42,0.25)]'
          : isContact
            ? 'relative z-20 border-b border-white/15 bg-[#211b67] text-white'
            : 'relative z-20 border-b border-white/15 bg-[#211b67] text-white'
      }
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div
        className={
          isHome || isContact
            ? 'container flex justify-between py-5'
            : 'container py-5 flex justify-between'
        }
      >
        <Link href={isHome ? '#home' : '/'}>
          {isHome || isContact ? (
            <img
              alt="Title Toolbox"
              className="h-10 w-auto"
              decoding="async"
              fetchPriority="high"
              loading="eager"
              src="/ttb-logo.png"
            />
          ) : (
            <Logo loading="eager" priority="high" className="invert dark:invert-0" />
          )}
        </Link>
        <HeaderNav data={headerData} />
        {isHome ? (
          <button
            className="ml-2 rounded-sm bg-cyan-500 px-5 py-2 text-[14px] text-white transition hover:bg-cyan-400 cursor-pointer"
            data-open-demo-modal="true"
            type="button"
          >
            {ctaLabel || 'Request a Demo'}
          </button>
        ) : null}
      </div>
    </header>
  )
}
