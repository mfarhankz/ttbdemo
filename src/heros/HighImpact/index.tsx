'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { handleProptechPointerMove } from '@/components/ProptechBackgroundSection'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = (props) => {
  const { links, media, richText } = props
  const badgeText = (props as Page['hero'] & { badgeText?: string | null })?.badgeText
  const badgeIcon = (props as Page['hero'] & { badgeIcon?: unknown })?.badgeIcon
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  return (
    <section
      className="proptech-background relative overflow-hidden py-36 md:pt-[250px] md:pb-[200px]"
      data-theme="dark"
      onPointerMove={handleProptechPointerMove}
    >
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="text-white">
            {badgeText ? (
              <div className="mb-8 inline-flex items-center gap-3 rounded-md border border-white/25 bg-white/5 px-4 py-2">
                {badgeIcon && typeof badgeIcon === 'object' ? (
                  <Media
                    className="h-6 w-6 shrink-0"
                    imgClassName="h-full w-full object-contain"
                    resource={badgeIcon as never}
                  />
                ) : null}
                <span className="text-[22px] font-[300] text-white">{badgeText}</span>
              </div>
            ) : null}

            {richText && (
              <RichText className="[&_p]:text-white/85" data={richText} enableGutter={false} />
            )}

            {Array.isArray(links) && links.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-3">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink
                        {...link}
                        className="rounded-sm bg-white px-8 py-8 text-lg font-medium text-[#16a1c3] transition hover:bg-slate-100"
                      />
                    </li>
                  )
                })}
              </ul>
            )}
          </div>

          <div className="rounded-md border border-cyan-200/30 bg-white/10 p-1 shadow-2xl backdrop-blur-sm">
            <div className="h-[350px] rounded-sm">
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
