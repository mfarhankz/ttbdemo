import { BarChart3, FileSearch, Folder, MapPin, ShieldCheck, Users } from 'lucide-react'
import React from 'react'

import type { PowerfulToolsBlock as PowerfulToolsBlockProps } from '@/payload-types'

type CardRow = NonNullable<PowerfulToolsBlockProps['cards']>[number]

const iconMap = {
  fileSearch: FileSearch,
  folder: Folder,
  shieldCheck: ShieldCheck,
  barChart: BarChart3,
  mapPin: MapPin,
  users: Users,
} as const satisfies Record<NonNullable<CardRow['icon']>, typeof FileSearch>

function ToolIcon({ name }: { name: CardRow['icon'] | null | undefined }) {
  const Icon = (name && iconMap[name]) || FileSearch
  return <Icon aria-hidden className="size-5 text-white md:size-[22px]" strokeWidth={2} />
}

export const PowerfulToolsBlock: React.FC<PowerfulToolsBlockProps> = (props) => {
  const { eyebrow, heading, cards } = props
  const list = cards?.filter((row) => row?.title?.trim() && row?.description?.trim()) ?? []

  return (
    <div className="container my-32">
      <header className="max-w-3xl">
        <h6 className="text-xs font-bold uppercase tracking-[0.2em] text-[#17a2bc]">
          {eyebrow?.trim() || 'Powerful tools'}
        </h6>
        <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#1a1b39] md:text-[2rem] md:leading-snug">
          {heading}
        </h1>
      </header>

      <ul className="mt-10 grid list-none gap-5 p-0 md:mt-12 md:grid-cols-3 md:gap-6">
        {list.map((row, index) => (
          <li
            className="flex flex-col rounded-xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_40px_-18px_rgba(15,23,42,0.12)] md:p-6"
            key={row.id ?? `${index}-${row.title}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#2eb0c1] md:h-12 md:w-12">
                <ToolIcon name={row.icon} />
              </div>
              {row.badge?.trim() ? (
                <span className="text-right text-xs font-semibold tracking-tight text-[#1a1b39] md:text-[13px]">
                  {row.badge.trim()}
                </span>
              ) : null}
            </div>
            <h3 className="mt-5 text-2xl font-bold leading-snug text-[#1a1b39] md:text-xl">
              {row.title}
            </h3>
            <p className="mt-2 text-lg text-[#525475] ">{row.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
