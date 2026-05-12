'use client'

import React from 'react'

/** Updates CSS vars used by `.proptech-background` in globals.css */
export function handleProptechPointerMove(
  event: React.PointerEvent<HTMLElement>,
): void {
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = event.clientX - bounds.left
  const y = event.clientY - bounds.top

  event.currentTarget.style.setProperty('--mouse-x', `${x}px`)
  event.currentTarget.style.setProperty('--mouse-y', `${y}px`)
}

type Props = {
  id?: string
  className?: string
  children: React.ReactNode
}

export const ProptechBackgroundSection: React.FC<Props> = ({ id, className, children }) => {
  return (
    <section className={className} id={id} onPointerMove={handleProptechPointerMove}>
      {children}
    </section>
  )
}
