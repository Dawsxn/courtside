import { SlidersHorizontal, X } from 'lucide-react'
import { useRef, type ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { activeFilterCount, DEFAULT_FILTERS, type SearchFilters } from './search'
import { PAX_BRACKETS, PAX_LABELS, SKILL_LEVELS, SKILL_LEVEL_LABELS } from './types'

type FiltersSheetProps = {
  filters: SearchFilters
  onChange: (filters: SearchFilters) => void
  resultCount: number
}

/**
 * A Filters button that opens a panel: a bottom sheet on phones, a centred
 * panel on wider screens. Changes apply as you tap; the footer shows how many
 * coaches match. Built on the native <dialog>, which handles focus, Escape,
 * and the backdrop.
 */
export function FiltersSheet({ filters, onChange, resultCount }: FiltersSheetProps) {
  const dialog = useRef<HTMLDialogElement>(null)
  const count = activeFilterCount(filters)
  const set = (patch: Partial<SearchFilters>) => onChange({ ...filters, ...patch })
  const close = () => dialog.current?.close()

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className="inline-flex h-10 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-white/15 focus-visible:outline-white"
      >
        <SlidersHorizontal aria-hidden className="size-4" />
        Filters
        {count > 0 && (
          <span className="grid size-5 place-items-center rounded-full bg-white text-xs font-semibold text-club">
            {count}
            <span className="sr-only"> active</span>
          </span>
        )}
      </button>

      <dialog
        ref={dialog}
        aria-labelledby="filters-title"
        onClick={(event) => event.target === dialog.current && close()}
        className="sheet m-0 mt-auto max-h-[85svh] w-full max-w-none rounded-t-2xl bg-card p-0 text-foreground backdrop:bg-club/40 sm:m-auto sm:max-w-md sm:rounded-2xl"
      >
        <div className="flex items-center justify-between border-b py-2.5 pr-3 pl-5">
          <h2 id="filters-title" className="text-lg font-semibold">
            Filters
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Close filters"
            className="grid size-11 place-items-center rounded-full hover:bg-muted"
          >
            <X aria-hidden className="size-5" />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-5 py-5">
          <Section title="Your level">
            {SKILL_LEVELS.map((level) => (
              <Chip
                key={level}
                pressed={filters.level === level}
                onClick={() => set({ level: filters.level === level ? null : level })}
              >
                {SKILL_LEVEL_LABELS[level]}
              </Chip>
            ))}
          </Section>
          <Section title="Players" hint="How many people will be in the lesson.">
            {PAX_BRACKETS.map((pax) => (
              <Chip key={pax} pressed={filters.pax === pax} onClick={() => set({ pax: filters.pax === pax ? null : pax })}>
                {PAX_LABELS[pax]}
              </Chip>
            ))}
          </Section>
          <Section title="Where" hint="Show only coaches who travel to your own court.">
            <Chip pressed={filters.comesToMyCourt} onClick={() => set({ comesToMyCourt: !filters.comesToMyCourt })}>
              Comes to my court
            </Chip>
          </Section>
        </div>

        <div className="flex items-center justify-between gap-3 border-t px-5 py-4">
          <Button
            variant="ghost"
            className="h-11 px-4 text-sm"
            disabled={count === 0}
            onClick={() => onChange({ ...DEFAULT_FILTERS, city: filters.city })}
          >
            Clear all
          </Button>
          <Button className="h-11 flex-1 rounded-full text-sm sm:flex-none sm:px-6" onClick={close}>
            Show {resultCount} {resultCount === 1 ? 'coach' : 'coaches'}
          </Button>
        </div>
      </dialog>
    </>
  )
}

function Section({ title, hint, children }: { title: string; hint?: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="text-sm font-semibold">{title}</h3>
      {hint && <p className="mt-0.5 text-sm text-muted-foreground">{hint}</p>}
      <div role="group" aria-label={title} className="mt-3 flex flex-wrap gap-2">
        {children}
      </div>
    </section>
  )
}

function Chip({ pressed, onClick, children }: { pressed: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        'h-10 rounded-full border px-4 text-sm font-medium transition-colors duration-150',
        pressed ? 'border-club bg-club text-primary-foreground' : 'border-input hover:border-club hover:text-club',
      )}
    >
      {children}
    </button>
  )
}
