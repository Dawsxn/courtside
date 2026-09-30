import { describe, expect, it } from 'vitest'
import { activeFilterCount, DEFAULT_FILTERS, displayedRate, perPerson, searchCoaches } from './search'
import type { CoachSummary } from './types'

const coach = (overrides: Partial<CoachSummary>): CoachSummary => ({
  id: 'x',
  name: 'Test',
  initial: 'T',
  verified: false,
  teaches: ['beginner'],
  rates: [{ pax: '1', perHour: 800 }],
  stops: [{ city: 'Makati', kind: 'venue' }],
  ...overrides,
})

describe('perPerson', () => {
  it('splits a two-person rate evenly', () => {
    expect(perPerson({ pax: '2', perHour: 1000 })).toEqual({ min: 500, max: 500 })
  })

  it('gives a range for a bracket', () => {
    expect(perPerson({ pax: '3-4', perHour: 1200 })).toEqual({ min: 300, max: 400 })
  })
})

describe('displayedRate', () => {
  const rates = coach({
    rates: [
      { pax: '2', perHour: 1200 },
      { pax: '1', perHour: 900 },
    ],
  })

  it('shows the private rate when no pax is chosen', () => {
    expect(displayedRate(rates, null)).toEqual({ pax: '1', perHour: 900 })
  })

  it('falls back to the smallest group when there is no private rate', () => {
    const groupsOnly = coach({
      rates: [
        { pax: '5-6', perHour: 1500 },
        { pax: '2', perHour: 1800 },
      ],
    })
    expect(displayedRate(groupsOnly, null)).toEqual({ pax: '2', perHour: 1800 })
  })

  it('shows the chosen pax rate, or nothing when the coach does not offer it', () => {
    expect(displayedRate(rates, '2')?.perHour).toBe(1200)
    expect(displayedRate(rates, '5-6')).toBeUndefined()
  })
})

describe('activeFilterCount', () => {
  it('counts filters but not the city', () => {
    expect(activeFilterCount(DEFAULT_FILTERS)).toBe(0)
    expect(activeFilterCount({ ...DEFAULT_FILTERS, city: 'Pasig', level: 'beginner', comesToMyCourt: true })).toBe(2)
  })
})

describe('searchCoaches', () => {
  const venue = coach({ id: 'venue', rates: [{ pax: '1', perHour: 1000 }] })
  const travels = coach({ id: 'travels', stops: [{ city: 'Makati', kind: 'travels' }] })
  const elsewhere = coach({ id: 'elsewhere', stops: [{ city: 'Pasig', kind: 'venue' }] })

  it('keeps coaches with a stop in the city, lowest rate first', () => {
    const ids = searchCoaches([venue, travels, elsewhere], DEFAULT_FILTERS).map((c) => c.id)
    expect(ids).toEqual(['travels', 'venue'])
  })

  it('keeps only coaches who travel to the city when asked', () => {
    const ids = searchCoaches([venue, travels], { ...DEFAULT_FILTERS, comesToMyCourt: true }).map((c) => c.id)
    expect(ids).toEqual(['travels'])
  })
})
