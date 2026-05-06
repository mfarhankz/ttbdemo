import React from 'react'

const toolCards = [
  {
    title: 'Farming Tool',
    description:
      'Identify target neighborhoods, build precise prospect lists, and focus outreach on high-value areas.',
  },
  {
    title: 'Statistics / Census Tool',
    description:
      'Review local market trends and census-backed demographics to support confident decisions.',
  },
  {
    title: 'Property Profiles',
    description:
      'Access ownership and parcel insights quickly so your team can move from research to action.',
  },
]

const benefitCards = [
  'Research property-level details faster to shorten turnaround on title and escrow workflows.',
  'Filter by geography and ownership signals to prioritize the right records at the right time.',
  'Use map-based intelligence to discover opportunities and surface hidden market potential.',
  'Build trusted client conversations with cleaner data, clearer context, and better timing.',
  'Share exportable insights across your team to align prospecting, underwriting, and follow-up.',
  'Stay focused on high-value targets with streamlined workflows built for title professionals.',
]

const faqItems = [
  'Is Title Toolbox easy to use?',
  'Are the websites branded to my title company?',
  'Can 2 title reps from the same company have separate accounts?',
  'Do I still have data and tools for vendors?',
  'This sounds too good to be true — what is the catch?',
]

export const HomePage = () => {
  return (
    <main className="bg-[#f4f7fb] pt-[65px] text-[#0f172a]" id="home">
      <section className="relative overflow-hidden bg-linear-to-r from-[#1d1d72] via-[#202b87] to-[#0f7498] py-16 md:py-20">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="text-white">
              <p className="mb-4 inline-flex items-center rounded-sm border border-white/30 px-3 py-1 text-xs">
                Trusted by Real Estate Professionals
              </p>
              <h1 className="max-w-lg text-3xl font-semibold leading-tight md:text-4xl">
                Smart mapping tools for modern title and escrow teams.
              </h1>
              <p className="mt-4 max-w-lg text-sm text-white/80 md:text-base">
                Locate, research, and market with confidence. Build workflows that turn data into
                faster insights and better decisions for every transaction.
              </p>
              <button
                className="mt-8 rounded-sm bg-white px-5 py-2.5 text-sm font-medium text-[#1d1d72] transition hover:bg-slate-100"
                data-open-demo-modal="true"
                type="button"
              >
                Request a Demo
              </button>
            </div>

            <div className="rounded-md border border-cyan-200/30 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
              <div className="h-[220px] rounded-sm bg-linear-to-br from-cyan-100 via-slate-100 to-blue-200 p-3 md:h-[260px]">
                <div className="h-full rounded-sm border border-slate-300/80 bg-white p-4">
                  <div className="mb-3 h-3 w-40 rounded bg-slate-200" />
                  <div className="mb-2 h-2 w-full rounded bg-slate-200" />
                  <div className="mb-2 h-2 w-[92%] rounded bg-slate-200" />
                  <div className="mb-2 h-2 w-[80%] rounded bg-slate-200" />
                  <div className="mt-5 grid grid-cols-4 gap-2">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <div className="h-6 rounded bg-cyan-100" key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="paper-texture border-y border-[#dbe4ee] bg-[#f7f9fc] py-14 md:py-16"
        id="tools"
      >
        <div className="container">
          <p className="text-xs uppercase tracking-[0.2em] text-[#17a2bc]">Powerful tools</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#111827]">
            Everything realtors need to locate, research, and market smarter.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {toolCards.map((item) => (
              <article
                className="rounded-sm border border-[#dce5ef] bg-white p-5 shadow-[0_5px_18px_rgba(15,23,42,0.06)]"
                key={item.title}
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-sm bg-[#10acc4]/10 text-xs font-semibold text-[#0a9ab5]">
                  T
                </div>
                <h3 className="text-lg font-semibold text-[#111827]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16" id="search-flow">
        <div className="container grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#17a2bc]">Map locations</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#111827]">
              Map-based search makes property identification simple.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Search by county, city, and property owner details to quickly uncover the records that
              matter for title and escrow teams.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-2 rounded-sm border border-[#dce5ef] bg-[#f8fbff] p-3">
            {['Map Search', 'Filter', 'Profile', 'Statistics', 'Export'].map((item) => (
              <div
                className="rounded-sm border border-[#dce5ef] bg-white px-2 py-3 text-center text-xs font-medium text-[#0f172a]"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="paper-texture border-y border-[#dbe4ee] bg-[#f7f9fc] py-14 md:py-16"
        id="why-ttb"
      >
        <div className="container">
          <p className="text-xs uppercase tracking-[0.2em] text-[#17a2bc]">Battle-tested tools</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#111827]">
            Your competitive edge in the title industry.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            Build by title professionals for real-world workflows, these tools help you locate,
            analyze, and act with confidence.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {benefitCards.map((item) => (
              <div
                className="rounded-sm border border-[#dce5ef] bg-white p-4 text-sm leading-6 text-slate-700"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16" id="faq">
        <div className="container grid gap-8 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#17a2bc]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#111827]">
              Frequently asked questions.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Questions about the platform and features? Here are a few common ones.
            </p>
          </div>

          <div className="space-y-2">
            {faqItems.map((item) => (
              <details className="rounded-sm border border-[#dce5ef] bg-[#fbfdff]" key={item}>
                <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-[#0f172a]">
                  {item}
                </summary>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#201b68] py-10 text-white" id="contact">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-lg font-medium">
            iPad, iPhone, Android, Mac, or PC - Title Toolbox goes where you work.
          </p>
          <button
            className="w-fit rounded-sm border border-white/60 px-5 py-2 text-sm transition hover:bg-white/10"
            data-open-demo-modal="true"
            type="button"
          >
            Request a Demo
          </button>
        </div>
      </section>
    </main>
  )
}
