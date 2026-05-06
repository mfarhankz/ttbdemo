'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  return (
    <section
      className="relative overflow-hidden bg-linear-to-r from-[#1d1d72] via-[#202b87] to-[#0f7498] py-16 md:py-20"
      data-theme="dark"
    >
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="text-white">
            {richText && <RichText className="[&_p]:text-white/85" data={richText} enableGutter={false} />}

            {Array.isArray(links) && links.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-3">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink
                        {...link}
                        className="rounded-sm bg-white px-5 py-2.5 text-sm font-medium text-[#1d1d72] transition hover:bg-slate-100"
                      />
                    </li>
                  )
                })}
              </ul>
            )}
          </div>

          <div className="rounded-md border border-cyan-200/30 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
            <div className="h-[220px] rounded-sm bg-linear-to-br from-cyan-100 via-slate-100 to-blue-200 p-3 md:h-[260px]">
              <div className="relative h-full overflow-hidden rounded-sm border border-slate-300/80 bg-white">
                {media && typeof media === 'object' ? (
                  <Media fill imgClassName="object-cover" priority resource={media} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
