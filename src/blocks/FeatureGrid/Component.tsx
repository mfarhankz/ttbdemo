import { ShieldCheck } from 'lucide-react'
import React from 'react'

import type { FeatureGridBlock as FeatureGridBlockProps } from '@/payload-types'

export const FeatureGridBlock: React.FC<FeatureGridBlockProps> = (props) => {
  const { eyebrow, heading, intro, items } = props
  const cards = items?.filter((row) => row?.body?.trim()) ?? []

  return (
    <div className="container my-32">
      <header className="max-w-2xl">
        <h6 className="text-xs font-bold uppercase tracking-[0.2em] text-[#17a2bc]">
          {eyebrow?.trim() || 'Why Title Toolbox'}
        </h6>
        <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#1a1b39] md:text-[2rem] md:leading-snug">
          {heading}
        </h1>
        {intro ? (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed md:leading-7">{intro}</p>
        ) : null}
      </header>

      <ul className="mt-10 grid list-none gap-4 p-0 md:mt-12 md:grid-cols-2 md:gap-5">
        {cards.map((row, index) => (
          <li
            className="flex gap-4 rounded-lg border border-slate-200/90 bg-white p-4 shadow-card md:gap-5 md:p-5"
            key={row.id ?? `${index}-${row.body?.slice(0, 24)}`}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#18a1c3] md:h-9 md:w-9">
              <ShieldCheck aria-hidden className="size-5 text-white md:size-5" strokeWidth={2} />
            </div>
            <p className="min-w-0 text-lg text-[#1d1b41] leading-7">{row.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
