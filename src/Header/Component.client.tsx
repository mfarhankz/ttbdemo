'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { ArrowLeft } from 'lucide-react'
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

  if (isContact) {
    return (
      <header
        className="relative z-20 bg-[#292669f2] border-b border-white/15 text-white"
        {...(theme ? { 'data-theme': theme } : {})}
      >
        <div className="container flex items-center justify-between py-5">
          <Link href="/" aria-label="Back to home">
            <img
              alt="Title Toolbox"
              className="h-10 w-auto"
              decoding="async"
              fetchPriority="high"
              loading="eager"
              src="/ttb-logo.png"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-[#211b67] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#2a247a] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to site
          </Link>
        </div>
      </header>
    )
  }

  return (
    <header
      className={
        isHome
          ? 'fixed inset-x-0 top-0 z-50   text-white shadow-[0_8px_24px_rgba(15,23,42,0.25)]'
          : 'relative z-20 text-white'
      }
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div
        className={
          isHome
            ? 'container flex justify-between py-5 bg-[#292669f2] border-b border-white/15'
            : 'container py-5 flex justify-between'
        }
      >
        <Link href={isHome ? '#home' : '/'}>
          {isHome ? (
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
            {ctaLabel || 'Request a Demo'} &nbsp;→
          </button>
        ) : null}
      </div>
    </header>
  )
}
