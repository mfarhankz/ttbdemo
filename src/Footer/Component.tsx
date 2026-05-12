import { FooterCta } from '@/Footer/FooterCta'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import { CMSLink } from '@/components/Link'

const defaultCtaEyebrow = 'Works on any device'
const defaultCtaHeadline = 'iPad, iPhone, Android, Mac, or PC — Title Toolbox goes where you work.'
const defaultDisclaimer =
  'Disclaimer: Data coverage and availability vary by region. Not all data, reports, or features are available in every area.'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 2)()

  const navItems = footerData?.navItems || []
  const ctaEyebrow = footerData?.ctaEyebrow?.trim() || defaultCtaEyebrow
  const ctaHeadline = footerData?.ctaHeadline?.trim() || defaultCtaHeadline
  const disclaimer = footerData?.disclaimer?.trim() || defaultDisclaimer
  const ctaOpensDemoModal = footerData?.ctaOpensDemoModal !== false

  return (
    <footer className="mt-auto bg-white text-[#0f172a]">
      <div className="bg-[#1d1d72] py-10 md:py-12">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="max-w-6xl text-white">
            <h6 className="mb-3 text-xs font-bold uppercase tracking-wide text-[#00b8db]">
              {ctaEyebrow}
            </h6>
            <h2 className="text-2xl font-semibold leading-snug md:text-3xl md:leading-tight">
              {ctaHeadline}
            </h2>
          </div>
          <div className="shrink-0">
            <FooterCta ctaLink={footerData?.ctaLink} ctaOpensDemoModal={ctaOpensDemoModal} />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 px-4 pb-10 pt-8 md:px-6">
        {navItems.length > 0 ? (
          <nav className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
            {navItems.map(({ link }, i) => (
              <CMSLink
                className="text-slate-600 underline-offset-4 hover:text-[#1d1d72] hover:underline"
                key={i}
                {...link}
              />
            ))}
          </nav>
        ) : null}
        <p className="text-center">{disclaimer}</p>
      </div>
    </footer>
  )
}
