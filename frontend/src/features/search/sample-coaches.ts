import type { CoachSummary } from './types'

/**
 * Sample rows so the search screen can be designed before the API exists.
 * These are not real coaches, and the page says so. Replace with API data;
 * never swap in invented names, reviews, or venues (PRODUCT.md).
 */
export const SAMPLE_COACHES: CoachSummary[] = [
  {
    id: 'sample-a',
    name: 'Sample Coach A',
    initial: 'A',
    verified: true,
    teaches: ['beginner', 'intermediate'],
    rates: [
      { pax: '1', perHour: 900 },
      { pax: '2', perHour: 1200 },
      { pax: '3-4', perHour: 1600 },
    ],
    stops: [
      { city: 'Makati', kind: 'venue' },
      { city: 'Taguig', kind: 'venue' },
      { city: 'Pasig', kind: 'travels' },
    ],
  },
  {
    id: 'sample-b',
    name: 'Sample Coach B',
    initial: 'B',
    verified: false,
    teaches: ['beginner'],
    rates: [
      { pax: '1', perHour: 600 },
      { pax: '2', perHour: 900 },
    ],
    stops: [
      { city: 'Makati', kind: 'travels' },
      { city: 'Mandaluyong', kind: 'venue' },
      { city: 'San Juan', kind: 'travels' },
    ],
  },
  {
    id: 'sample-c',
    name: 'Sample Coach C',
    initial: 'C',
    verified: true,
    teaches: ['intermediate', 'advanced'],
    rates: [
      { pax: '1', perHour: 1500 },
      { pax: '2', perHour: 2000 },
    ],
    stops: [{ city: 'Makati', kind: 'venue' }],
  },
  {
    id: 'sample-d',
    name: 'Sample Coach D',
    initial: 'D',
    verified: true,
    teaches: ['beginner', 'intermediate', 'advanced'],
    rates: [
      { pax: '1', perHour: 800 },
      { pax: '2', perHour: 1100 },
      { pax: '3-4', perHour: 1400 },
      { pax: '5-6', perHour: 1800 },
    ],
    stops: [
      { city: 'Taguig', kind: 'venue' },
      { city: 'Makati', kind: 'travels' },
      { city: 'Parañaque', kind: 'travels' },
    ],
  },
  {
    id: 'sample-e',
    name: 'Sample Coach E',
    initial: 'E',
    verified: false,
    teaches: ['beginner', 'intermediate'],
    rates: [{ pax: '1', perHour: 700 }],
    stops: [
      { city: 'Quezon City', kind: 'venue' },
      { city: 'San Juan', kind: 'travels' },
      { city: 'Manila', kind: 'travels' },
    ],
  },
  {
    id: 'sample-f',
    name: 'Sample Coach F',
    initial: 'F',
    verified: true,
    teaches: ['beginner'],
    rates: [
      { pax: '2', perHour: 1000 },
      { pax: '3-4', perHour: 1300 },
      { pax: '5-6', perHour: 1700 },
    ],
    stops: [
      { city: 'Pasig', kind: 'venue' },
      { city: 'Makati', kind: 'venue' },
    ],
  },
]
