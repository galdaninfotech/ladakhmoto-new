import { getPayload, Payload } from 'payload'
import config from '@/payload.config'
import { describe, it, beforeAll, expect } from 'vitest'

let payload: Payload

describe('Highlights Collection', () => {
  beforeAll(async () => {
    const payloadConfig = await config
    payload = await getPayload({ config: payloadConfig })
  })

  it('should have the highlights collection registered', async () => {
    expect(payload.collections).toHaveProperty('highlights')
  })

  it('should be able to create a highlight', async () => {
    const highlight = await payload.create({
      collection: 'highlights',
      data: {
        title: 'Test Highlight',
        intro: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Test Intro',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        description: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Test Description',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
    })

    expect(highlight.title).toBe('Test Highlight')
    expect(highlight.slug).toBe('test-highlight')
  })

  it('should be able to link highlights to a Biking Adventure', async () => {
    const highlight = await payload.create({
      collection: 'highlights',
      data: {
        title: 'Specific Highlight',
        description: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Desc', version: 1 }],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
    })

    const adventure = await payload.create({
      collection: 'bikingAdventures',
      data: {
        title: 'Test Adventure',
        description: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Desc', version: 1 }],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        summary: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Summary', version: 1 }],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        tourHighlights: [
          {
            highlight: 'Text highlight',
            highlights: [highlight.id],
          },
        ],
        itineraries: [
          {
            title: 'Day 1',
            structuredHighlights: [highlight.id],
          },
        ],
      },
    })

    expect(adventure.tourHighlights?.[0]?.highlights?.map((h: any) => h.id)).toContain(highlight.id)
    expect(adventure.itineraries?.[0]?.structuredHighlights?.map((h: any) => h.id)).toContain(highlight.id)
  })
})
