'use client'

import type { FormFieldBlock, Form as PluginForm } from '@payloadcms/plugin-form-builder/types'
import type { Form } from '@/payload-types'

import { useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import RichText from '@/components/RichText'
import { fields } from '@/blocks/Form/fields'
import { getClientSideURL } from '@/utilities/getURL'

const DEFAULT_MODAL_INTRO =
  'Fill out the form and a Title Toolbox representative will follow up with you.'

type Props = {
  form: Form | null
}

export const DemoRequestModalClient: React.FC<Props> = ({ form }) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const formForBuilder = form as unknown as PluginForm | null

  const formMethods = useForm({
    defaultValues: formForBuilder?.fields,
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()

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

  const close = useCallback(() => {
    setIsOpen(false)
    setHasSubmitted(false)
    setError(undefined)
    reset()
  }, [reset])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  const onSubmit = useCallback(
    (data: FormFieldBlock[]) => {
      if (!form) return
      let loadingTimerID: ReturnType<typeof setTimeout>

      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        loadingTimerID = setTimeout(() => setIsLoading(true), 1000)

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: form.id,
              submissionData: dataToSend,
            }),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
          })

          const res = await req.json()
          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)
            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })
            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (form.confirmationType === 'redirect' && form.redirect?.url) {
            router.push(form.redirect.url)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({ message: 'Something went wrong.' })
        }
      }

      void submitForm()
    },
    [form, router],
  )

  if (!isOpen) return null

  const introMessage = form?.introMessage?.trim() ?? ''
  const modalIntroText = introMessage || DEFAULT_MODAL_INTRO

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/65 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) close()
      }}
      role="dialog"
    >
      <div className="max-h-[90vh] w-[600px] overflow-y-auto rounded-2xl bg-[#ffffff] p-8 shadow-card">
        <div className="flex items-start justify-between gap-4">
          <div>
            {!hasSubmitted ? (
              <>
                <h2 className="text-3xl font-semibold tracking-tight text-[#272163] md:text-3xl">
                  {form?.title || 'Request a Demo'}
                </h2>
                <p className="mb-4 max-w-3xl whitespace-pre-line text-lg text-[#4b4f68]">
                  {modalIntroText}
                </p>
              </>
            ) : null}
          </div>
          {!hasSubmitted ? (
            <button
              aria-label="Close modal"
              className="text-3xl leading-none text-[#6a6f84] transition hover:text-[#272163]"
              onClick={close}
              type="button"
            >
              ×
            </button>
          ) : null}
        </div>

        <div>
          {!form ? (
            <p className="text-base text-[#4b4f68]">
              The &ldquo;Request a Demo&rdquo; form has not been configured in the admin yet.
            </p>
          ) : (
            <FormProvider {...formMethods}>
              {hasSubmitted && form.confirmationType === 'message' && form.confirmationMessage ? (
                <RichText data={form.confirmationMessage} />
              ) : null}

              {isLoading && !hasSubmitted ? (
                <p className="text-base text-[#4b4f68]">Loading, please wait...</p>
              ) : null}

              {error ? (
                <div className="mb-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
                  {`${error.status || '500'}: ${error.message || ''}`}
                </div>
              ) : null}

              {!hasSubmitted ? (
                <form
                  className="demo-modal-form space-y-5"
                  id={`demo-form-${form.id}`}
                  onSubmit={handleSubmit((data) => onSubmit(data as unknown as FormFieldBlock[]))}
                >
                  {form.fields?.map((field, index) => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const Field: React.FC<any> = fields?.[field.blockType as keyof typeof fields]
                    if (!Field) return null
                    return (
                      <div key={index}>
                        <Field
                          form={formForBuilder!}
                          {...field}
                          {...formMethods}
                          control={control}
                          errors={errors}
                          register={register}
                        />
                      </div>
                    )
                  })}

                  <button
                    className="mt-2 h-[44px] w-full rounded-lg bg-[#24a7c8] text-sm font-bold text-white transition hover:bg-[#1f99b8] disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={isLoading}
                    type="submit"
                  >
                    {form.submitButtonLabel || 'Submit Request'}
                  </button>
                </form>
              ) : null}
            </FormProvider>
          )}
        </div>
      </div>
    </div>
  )
}
