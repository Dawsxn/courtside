export const SKILL_LEVELS = ['beginner', 'intermediate', 'advanced'] as const
export type SkillLevel = (typeof SKILL_LEVELS)[number]

export const SKILL_LEVEL_LABELS: Record<SkillLevel, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

/** The fixed pax brackets a coach can set a rate for (docs/product/screens.md). */
export const PAX_BRACKETS = ['1', '2', '3-4', '5-6'] as const
export type PaxBracket = (typeof PAX_BRACKETS)[number]

export const PAX_LABELS: Record<PaxBracket, string> = {
  '1': '1 pax',
  '2': '2 pax',
  '3-4': '3–4 pax',
  '5-6': '5–6 pax',
}

export const CITIES = [
  'Makati',
  'Taguig',
  'Pasig',
  'Mandaluyong',
  'San Juan',
  'Quezon City',
  'Manila',
  'Parañaque',
] as const
export type City = (typeof CITIES)[number]

export type PaxRate = {
  pax: PaxBracket
  /** Whole-group rate per hour, in pesos. */
  perHour: number
}

/**
 * A city the coach teaches in: at a venue they provide, or by travelling to
 * the player's own court.
 */
export type Stop = {
  city: City
  kind: 'venue' | 'travels'
}

/** What a search result needs. The coach profile (S3) carries the rest. */
export type CoachSummary = {
  id: string
  name: string
  initial: string
  verified: boolean
  teaches: SkillLevel[]
  rates: PaxRate[]
  stops: Stop[]
}
