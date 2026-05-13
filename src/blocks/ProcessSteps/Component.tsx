import React from 'react'

import type { ProcessStepsBlock as ProcessStepsBlockProps } from '@/payload-types'

function formatStepIndex(index: number): string {
  return String(index + 1).padStart(2, '0')
}

export const ProcessStepsBlock: React.FC<ProcessStepsBlockProps> = (props) => {
  const { eyebrow, heading, intro, steps } = props
  const list = steps?.filter((s) => s?.label?.trim()) ?? []

  return (
    <div className="container my-32">
      <div className="grid items-center gap-5 md:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] md:gap-12 lg:gap-16">
        <header className="max-w-xl">
          <h6 className="text-xs font-bold uppercase tracking-[0.2em] text-[#17a2bc]">
            {eyebrow?.trim() || 'Search flow'}
          </h6>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#1a1b39] md:text-[2rem] md:leading-snug">
            {heading}
          </h1>
          {intro ? (
            <p className="mt-4 font-serif text-lg font-light leading-relaxed md:leading-7">
              {intro}
            </p>
          ) : null}
        </header>

        <div className="rounded-lg border border-[#c6cddd] bg-white p-4 shadow-card md:p-4">
          <div className="flex gap-2 overflow-x-auto pb-1 md:grid md:grid-cols-5 md:gap-3 md:overflow-visible">
            {list.map((step, index) => (
              <div
                className="flex shrink-0 flex-col items-center rounded-md bg-secondary/60 px-4 py-6 text-center transition-colors hover:bg-secondary"
                key={step.id ?? `${index}-${step.label}`}
              >
                <span className="text-sm font-semibold tabular-nums text-[#1a1b39]/70 md:text-xs">
                  {formatStepIndex(index)}
                </span>
                <span className="mt-4 text-center font-semibold leading-tight text-[#1a1b39] md:text-lg">
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
