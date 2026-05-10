import React from 'react'

import type { ProcessStepsBlock as ProcessStepsBlockProps } from '@/payload-types'

function formatStepIndex(index: number): string {
  return String(index + 1).padStart(2, '0')
}

export const ProcessStepsBlock: React.FC<ProcessStepsBlockProps> = (props) => {
  const { eyebrow, heading, intro, steps } = props
  const list = steps?.filter((s) => s?.label?.trim()) ?? []

  return (
    <div className="container my-16">
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:gap-12 lg:gap-16">
        <header className="max-w-xl">
          <h6 className="text-xs font-bold uppercase tracking-[0.2em] text-[#17a2bc]">
            {eyebrow?.trim() || 'Search flow'}
          </h6>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#1a1b39] md:text-[2rem] md:leading-snug">
            {heading}
          </h1>
          {intro ? (
            <p className="mt-4 font-serif text-sm font-light leading-relaxed text-slate-600 md:text-[15px] md:leading-7">
              {intro}
            </p>
          ) : null}
        </header>

        <div className="rounded-lg border border-[#e2e8f0] bg-white p-3 shadow-sm md:p-4">
          <div className="flex gap-2 overflow-x-auto pb-1 md:grid md:grid-cols-5 md:gap-3 md:overflow-visible">
            {list.map((step, index) => (
              <div
                className="flex min-w-[5.5rem] shrink-0 flex-col items-center rounded-md bg-[#eef6fb] px-2 py-4 text-center md:min-w-0 md:px-3 md:py-5"
                key={step.id ?? `${index}-${step.label}`}
              >
                <span className="text-[11px] font-semibold tabular-nums text-[#1a1b39]/70 md:text-xs">
                  {formatStepIndex(index)}
                </span>
                <span className="mt-2 text-center text-[11px] font-semibold leading-tight text-[#1a1b39] md:text-sm">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
