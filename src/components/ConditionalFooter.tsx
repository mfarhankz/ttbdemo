'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

const PATHS_WITHOUT_FOOTER = ['/contact']

type Props = {
  children: React.ReactNode
}

/** Client shell only — pass `<Footer />` as children so the footer stays a Server Component. */
export const ConditionalFooter: React.FC<Props> = ({ children }) => {
  const pathname = usePathname()
  const normalized = pathname?.replace(/\/$/, '') || ''
  if (PATHS_WITHOUT_FOOTER.includes(normalized)) {
    return null
  }
  return <>{children}</>
}
