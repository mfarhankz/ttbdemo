'use client'

import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

import type { AccordionBlock as AccordionBlockProps } from '@/payload-types'

import { cn } from '@/utilities/ui'

export const AccordionBlock: React.FC<AccordionBlockProps> = (props) => {
  const { eyebrow, heading, intro, items } = props
  const list = items?.filter((row) => row?.question?.trim()) ?? []
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="container my-16">
      <div className="grid gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] md:items-start md:gap-12 lg:gap-16">
        <div>
          <h6 className="text-xs font-bold uppercase tracking-[0.2em] text-[#00b8db]">
            {eyebrow?.trim() || 'FAQ'}
          </h6>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#1a1b3a] md:text-[2rem] md:leading-snug">
            {heading}
          </h1>
          {intro ? (
            <p className="mt-4 max-w-md text-lg leading-relaxed text-[#525475]">{intro}</p>
          ) : null}
        </div>

        <div className="rounded-xl border border-slate-200/80 bg-white p-1 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)]">
          <ul className="divide-y divide-slate-200/90">
            {list.map((row, index) => {
              const isOpen = openIndex === index
              return (
                <li className="px-4 py-0 md:px-5" key={row.id ?? `${index}-${row.question}`}>
                  <button
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-4 py-4 text-left md:py-5"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span className="text-[15px] font-semibold leading-snug text-[#1a1b3a] md:text-base">
                      {row.question}
                    </span>
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        'mt-0.5 size-5 shrink-0 text-[#1a1b3a] transition-transform duration-200',
                        isOpen && '-rotate-180',
                      )}
                      strokeWidth={2}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-[grid-template-rows] duration-200 ease-out',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="pb-4 pr-2 text-lg leading-relaxed text-[#525475] md:pb-5 md:leading-7">
                        {row.answer}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
