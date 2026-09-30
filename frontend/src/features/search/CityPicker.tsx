import { Select } from '@base-ui/react/select'
import { Check, ChevronDown } from 'lucide-react'
import { CITIES, type City } from './types'

const ITEMS = CITIES.map((city) => ({ value: city, label: city }))

/**
 * The page title doubles as the city control: the city name is the trigger
 * for a styled list (Base UI Select, which handles keyboard and screen
 * readers the way a native select would).
 */
export function CityPicker({ city, onChange }: { city: City; onChange: (city: City) => void }) {
  return (
    <h1 className="flex flex-col">
      <span className="text-base font-medium text-club-muted">Coaches in</span>{' '}
      <Select.Root items={ITEMS} value={city} onValueChange={(value) => value && onChange(value as City)}>
        <Select.Trigger
          aria-label={`Change city, currently ${city}`}
          className="-ml-1 inline-flex items-center gap-1.5 self-start rounded-lg px-1 text-4xl font-semibold tracking-[-0.025em] focus-visible:outline-white sm:text-5xl"
        >
          <Select.Value />
          <Select.Icon className="text-club-muted transition-transform duration-300 ease-out-expo data-[popup-open]:rotate-180 motion-reduce:transition-none">
            <ChevronDown aria-hidden className="size-7 translate-y-0.5" strokeWidth={2.25} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner sideOffset={8} align="start" alignItemWithTrigger={false} className="z-50 outline-none">
            <Select.Popup className="max-h-[min(24rem,var(--available-height))] min-w-60 origin-(--transform-origin) overflow-y-auto rounded-2xl bg-card p-1.5 text-foreground shadow-card-hover outline-none transition-[opacity,scale] duration-200 ease-out-expo data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 motion-reduce:transition-none">
              {CITIES.map((option) => (
                <Select.Item
                  key={option}
                  value={option}
                  className="flex h-11 cursor-default items-center justify-between gap-6 rounded-lg px-3 text-base outline-none select-none data-highlighted:bg-club-soft data-highlighted:text-club data-selected:font-semibold"
                >
                  <Select.ItemText>{option}</Select.ItemText>
                  <Select.ItemIndicator>
                    <Check aria-hidden className="size-4 text-club" strokeWidth={2.5} />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
    </h1>
  )
}
