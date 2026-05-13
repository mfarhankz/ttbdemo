import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import { DemoRequestModalClient } from './Client'

const DEMO_FORM_TITLE = 'Request a Demo'

async function getDemoForm(): Promise<FormType | null> {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'forms',
      depth: 1,
      limit: 1,
      pagination: false,
      where: {
        title: { equals: DEMO_FORM_TITLE },
      },
    })
    return (result.docs?.[0] as unknown as FormType) ?? null
  } catch (err) {
    console.warn('[DemoRequestModal] Failed to load form:', err)
    return null
  }
}

export const DemoRequestModal: React.FC = async () => {
  const form = await getDemoForm()
  return <DemoRequestModalClient form={form} />
}
