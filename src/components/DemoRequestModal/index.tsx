'use client'

import React, { useEffect, useState } from 'react'

export const DemoRequestModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const trigger = target?.closest('[data-open-demo-modal="true"]')
      if (!trigger) return
      event.preventDefault()
      setIsOpen(true)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/65 p-4"
      role="dialog"
    >
      <div className="w-full max-w-4xl rounded-2xl bg-[#f4f5f8] p-8 shadow-[0_20px_40px_rgba(15,23,42,0.35)] md:p-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-5xl font-semibold tracking-tight text-[#272163] md:text-6xl">
              Request a Demo
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-[#4b4f68] md:text-xl">
              Fill out the form and a Title Toolbox representative will follow up with you.
            </p>
          </div>
          <button
            aria-label="Close modal"
            className="text-4xl leading-none text-[#6a6f84] transition hover:text-[#272163]"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            ×
          </button>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-xl font-semibold text-[#272163]" htmlFor="demo-full-name">
              Full name
            </label>
            <input
              className="h-14 w-full rounded-lg border border-[#c9ccd9] bg-white px-4 text-lg focus:border-[#2aa6c5] focus:outline-none focus:ring-2 focus:ring-[#2aa6c5]/30"
              id="demo-full-name"
              name="fullName"
              type="text"
            />
          </div>

          <div>
            <label className="mb-2 block text-xl font-semibold text-[#272163]" htmlFor="demo-email">
              Email
            </label>
            <input
              className="h-14 w-full rounded-lg border border-[#c9ccd9] bg-white px-4 text-lg focus:border-[#2aa6c5] focus:outline-none focus:ring-2 focus:ring-[#2aa6c5]/30"
              id="demo-email"
              name="email"
              type="email"
            />
          </div>

          <div>
            <label className="mb-2 block text-xl font-semibold text-[#272163]" htmlFor="demo-phone">
              Phone number
            </label>
            <input
              className="h-14 w-full rounded-lg border border-[#c9ccd9] bg-white px-4 text-lg focus:border-[#2aa6c5] focus:outline-none focus:ring-2 focus:ring-[#2aa6c5]/30"
              id="demo-phone"
              name="phone"
              type="tel"
            />
          </div>

          <div>
            <label className="mb-2 block text-xl font-semibold text-[#272163]" htmlFor="demo-company-name">
              Company name
            </label>
            <input
              className="h-14 w-full rounded-lg border border-[#c9ccd9] bg-white px-4 text-lg focus:border-[#2aa6c5] focus:outline-none focus:ring-2 focus:ring-[#2aa6c5]/30"
              id="demo-company-name"
              name="companyName"
              type="text"
            />
          </div>

          <button
            className="mt-2 h-14 w-full rounded-lg bg-[#24a7c8] text-xl font-semibold text-white transition hover:bg-[#1f99b8]"
            type="submit"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  )
}
