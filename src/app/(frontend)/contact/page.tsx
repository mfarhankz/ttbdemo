import React from 'react'

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-132px)] bg-[#17185e] bg-[radial-gradient(circle_at_top,rgba(79,151,220,0.18),transparent_50%),linear-gradient(120deg,#1a1963_0%,#1a1963_45%,#142f6f_100%)] py-14 md:py-20">
      <section className="container">
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Contact us</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Questions about
              <br />
              TitleToolBox?
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/85">
              We welcome your questions or comments about TitleToolBox and its products and
              services. Please fill out the form and a representative will get in touch with you to
              help.
            </p>
          </div>

          <div className="rounded-md bg-[#f4f5f8] p-6 shadow-[0_16px_30px_rgba(15,23,42,0.35)] md:p-8">
            <h2 className="text-3xl font-semibold leading-tight text-[#23264f]">
              Please complete all required fields to get started
            </h2>

            <form className="mt-8 space-y-4">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#3b3f69]" htmlFor="name">
                  Name
                </label>
                <input
                  className="h-11 w-full rounded-sm border border-[#d6d9e4] bg-white px-3 text-sm outline-none ring-0 focus:border-[#3caed2]"
                  id="name"
                  name="name"
                  type="text"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#3b3f69]" htmlFor="email">
                  Email
                </label>
                <input
                  className="h-11 w-full rounded-sm border border-[#d6d9e4] bg-white px-3 text-sm outline-none ring-0 focus:border-[#3caed2]"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#3b3f69]" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="min-h-32 w-full rounded-sm border border-[#d6d9e4] bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-[#3caed2]"
                  id="message"
                  name="message"
                />
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-[#d6d9e4] pt-4">
                <button
                  className="rounded-sm border border-[#ccd0dc] bg-white px-5 py-2 text-sm font-medium text-[#2b2f53] transition hover:bg-slate-50"
                  type="reset"
                >
                  Reset
                </button>
                <button
                  className="rounded-sm bg-[#1fb3d8] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#1aa0c1]"
                  type="submit"
                >
                  Contact us
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
