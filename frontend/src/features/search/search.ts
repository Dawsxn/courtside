import { PAX_BRACKETS, type City, type CoachSummary, type PaxBracket, type PaxRate, type SkillLevel } from './types'

export type SearchFilters = {
  city: City
  level: SkillLevel | null
  pax: PaxBracket | null
  comesToMyCourt: boolean
}

export const DEFAULT_FILTERS: SearchFilters = {
  city: 'Makati',
  level: null,
  pax: null,
  comesToMyCourt: false,
}

/** How many filters besides the city are switched on. */
export function activeFilterCount(filters: SearchFilters): number {
  return [filters.level !== null, filters.pax !== null, filters.comesToMyCourt].filter(Boolean).length
}

/**
 * The one rate a result shows, so coaches compare like for like: the bracket
 * the player filtered for; otherwise the private (1 pax) rate; otherwise the
 * coach's smallest group bracket.
 */
export function displayedRate(coach: CoachSummary, pax: PaxBracket | null): PaxRate | undefined {
  if (pax) return coach.rates.find((rate) => rate.pax === pax)
  for (const bracket of PAX_BRACKETS) {
    const rate = coach.rates.find((r) => r.pax === bracket)
    if (rate) return rate
  }
  return undefined
}

/** Price per person for a group rate, as a range for brackets like 3–4 pax. */
export function perPerson(rate: PaxRate): { min: number; max: number } {
  const [low, high] = rate.pax.split('-').map(Number)
  const most = high ?? low
  return { min: Math.round(rate.perHour / most), max: Math.round(rate.perHour / low) }
}

export function searchCoaches(coaches: CoachSummary[], filters: SearchFilters): CoachSummary[] {
  return coaches
    .filter((coach) =>
      coach.stops.some(
        (stop) => stop.city === filters.city && (!filters.comesToMyCourt || stop.kind === 'travels'),
      ),
    )
    .filter((coach) => !filters.level || coach.teaches.includes(filters.level))
    .filter((coach) => displayedRate(coach, filters.pax) !== undefined)
    .sort((a, b) => displayedRate(a, filters.pax)!.perHour - displayedRate(b, filters.pax)!.perHour)
}

const peso = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
  maximumFractionDigits: 0,
})

export function formatPeso(amount: number): string {
  return peso.format(amount)
}
