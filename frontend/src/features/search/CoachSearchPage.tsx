import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { CityPicker } from './CityPicker'
import { CoachCard } from './CoachCard'
import { FiltersSheet } from './FiltersSheet'
import { SAMPLE_COACHES } from './sample-coaches'
import { activeFilterCount, DEFAULT_FILTERS, searchCoaches, type SearchFilters } from './search'

/** S2 Coach search. Sample data until the API exists. */
export function CoachSearchPage() {
  const [filters, setFilters] = useState<SearchFilters>(DEFAULT_FILTERS)
  const results = useMemo(() => searchCoaches(SAMPLE_COACHES, filters), [filters])

  return (
    <div className="min-h-svh">
      <header className="bg-club text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 pt-4 pb-8 sm:px-6 sm:pb-10">
          <div className="flex items-center justify-between gap-4">
            <p className="font-semibold tracking-[-0.01em]">Courtside</p>
            <p className="rounded-full bg-white/10 px-3 py-1 text-xs text-club-soft">
              <strong className="font-semibold text-primary-foreground">Sample data</strong>
              <span className="max-sm:sr-only"> · no coaches have joined yet</span>
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <CityPicker city={filters.city} onChange={(city) => setFilters({ ...filters, city })} />
            <FiltersSheet filters={filters} onChange={setFilters} resultCount={results.length} />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pt-6 pb-16 sm:px-6">
        <h2 className="mb-4 text-sm font-medium text-muted-foreground" aria-live="polite">
          <span className="font-semibold text-foreground">
            {results.length} {results.length === 1 ? 'coach' : 'coaches'}
          </span>
          <span aria-hidden className="mx-1.5">
            ·
          </span>
          lowest rate first
        </h2>

        {results.length > 0 ? (
          <ul className="grid gap-4 md:grid-cols-2">
            {results.map((coach) => (
              <CoachCard key={coach.id} coach={coach} city={filters.city} pax={filters.pax} />
            ))}
          </ul>
        ) : (
          <div className="rounded-2xl bg-card px-6 py-12 text-center shadow-card">
            {activeFilterCount(filters) > 0 ? (
              <>
                <p className="text-lg font-semibold">No coaches in {filters.city} match these filters yet.</p>
                <p className="mt-1 text-muted-foreground">Try fewer filters, or a nearby city.</p>
                <Button
                  className="mt-6 h-11 rounded-full px-6"
                  onClick={() => setFilters({ ...DEFAULT_FILTERS, city: filters.city })}
                >
                  Clear filters
                </Button>
              </>
            ) : (
              <>
                <p className="text-lg font-semibold">No coaches in {filters.city} yet.</p>
                <p className="mt-1 text-muted-foreground">Try a nearby city from the title above.</p>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
