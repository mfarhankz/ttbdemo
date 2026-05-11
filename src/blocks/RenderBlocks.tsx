import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { sectionSurfaceClassName } from '@/fields/sectionSurface'
import { AccordionBlock } from '@/blocks/AccordionBlock/Component'
import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { FeatureGridBlock } from '@/blocks/FeatureGrid/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { PowerfulToolsBlock } from '@/blocks/PowerfulTools/Component'
import { ProcessStepsBlock } from '@/blocks/ProcessSteps/Component'

const blockComponents = {
  accordionBlock: AccordionBlock,
  archive: ArchiveBlock,
  featureGrid: FeatureGridBlock,
  powerfulTools: PowerfulToolsBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  processSteps: ProcessStepsBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              const sectionId =
                'sectionId' in block && typeof block.sectionId === 'string'
                  ? block.sectionId.trim()
                  : ''

              return (
                <section
                  className={sectionSurfaceClassName(block.sectionSurface)}
                  id={sectionId || undefined}
                  key={index}
                >
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </section>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
