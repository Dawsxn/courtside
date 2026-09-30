import { BadgeCheck, Car, MapPin } from 'lucide-react'
import { displayedRate, formatPeso, perPerson } from './search'
import { PAX_LABELS, type City, type CoachSummary, type PaxBracket } from './types'

type CoachCardProps = {
  coach: CoachSummary
  city: City
  pax: PaxBracket | null
}

/** A search result: who, how much, and where. Everything else is on the profile. */
export function CoachCard({ coach, city, pax }: CoachCardProps) {
  const rate = displayedRate(coach, pax)
  if (!rate) return null
  const each = perPerson(rate)
  // Only when the player hasn't picked a bracket: then the other rates are
  // alternatives worth knowing about, and the profile lists them.
  const otherRates = pax ? 0 : coach.rates.length - 1
  const venues = coach.stops.filter((stop) => stop.kind === 'venue').map((stop) => stop.city)
  const travels = coach.stops.filter((stop) => stop.kind === 'travels').map((stop) => stop.city)
  const comesToYou = travels.includes(city)
  const travelsElsewhere = travels.filter((place) => place !== city)

  return (
    <li>
      <a
        href={`/coaches/${coach.id}`}
        className="block h-full rounded-2xl bg-card p-5 shadow-card transition-[box-shadow,scale] duration-200 ease-out-expo hover:shadow-card-hover active:scale-[0.985] motion-reduce:transition-none"
      >
        <div className="flex items-start gap-4">
          <span
            aria-hidden
            className="grid size-12 shrink-0 place-items-center rounded-full bg-club text-base font-semibold text-primary-foreground"
          >
            {coach.initial}
          </span>
          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className="leading-snug font-semibold">{coach.name}</h3>
            {coach.verified && (
              <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-club-soft px-2 py-0.5 text-xs font-medium text-club">
                <BadgeCheck aria-hidden className="size-3.5" />
                Verified
              </span>
            )}
          </div>
          <div className="shrink-0 pt-0.5 text-right tabular-nums">
            <p className="text-xl leading-tight font-semibold text-club">{formatPeso(rate.perHour)}</p>
            <p className="text-xs text-muted-foreground">
              per hour
              <span aria-hidden className="mx-1">
                ·
              </span>
              {PAX_LABELS[rate.pax]}
            </p>
            {rate.pax !== '1' && (
              <p className="text-xs text-muted-foreground">
                {each.min === each.max
                  ? `${formatPeso(each.min)} each`
                  : `${formatPeso(each.min)}–${formatPeso(each.max)} each`}
              </p>
            )}
            {otherRates > 0 && (
              <p className="mt-0.5 text-xs font-medium text-club">
                +{otherRates} group {otherRates === 1 ? 'rate' : 'rates'}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-t pt-4 text-sm">
          {venues.length > 0 && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden className="size-4 text-club" />
              {venues.join(', ')}
            </span>
          )}
          {comesToYou && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-club-soft px-2.5 py-0.5 text-xs font-medium text-club">
              <Car aria-hidden className="size-3.5" />
              Comes to your court
            </span>
          )}
          {travelsElsewhere.length > 0 && (
            <span className="text-muted-foreground">Travels to {travelsElsewhere.join(', ')}</span>
          )}
        </div>
      </a>
    </li>
  )
}
