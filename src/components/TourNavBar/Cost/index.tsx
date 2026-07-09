import type { CostCondition } from '@/payload-types'

import { getCachedGlobal } from '@/utilities/getGlobals'

type CostProps = {
  cost?:
    | {
        travelMode?:
          | 'own-bike'
          | 'solo-rider'
          | 'dual-ride'
          | 'seat-in-backup-vehicle'
          | 'suv'
          | null
          | undefined
        vehicleProvided?:
          | 'own-bike'
          | 'himalayan-411-bs6'
          | 'himalayan-452-bs6'
          | 'isuzu-camper'
          | 'innova-xylo'
          | null
          | undefined
        costPerPerson?: number | null | undefined
        id?: string | null | undefined
      }[]
    | null
    | undefined
  privateRoomUpgrade?: string | null | undefined
  bikeUpgrade?: string | null | undefined
  isUltimateAdventure?: boolean
}

export const Cost = async (props: CostProps) => {
  const { cost, privateRoomUpgrade, bikeUpgrade, isUltimateAdventure } = props
  const costConditionData = (await getCachedGlobal('costCondition', 1)()) as CostCondition | null
  const costConditions = (costConditionData?.conditions ?? [])
    .map((condition) => condition.condition)
    .filter((condition): condition is string => Boolean(condition))
  const privateRoomUpgradeNum: number = Number(privateRoomUpgrade)
  const bikeUpgradeNum: number = Number(bikeUpgrade)

  const locale = isUltimateAdventure ? 'en-US' : 'en-IN'
  const currency = isUltimateAdventure ? 'USD' : 'INR'

  function capitalizeHyphenatedString(str: string | null | undefined) {
    if (str) {
      return str
        .replace(/-/g, ' ')
        .split(' ')
        .map((word) => {
          if (word === 'bs6' || word === 'gh') {
            return (
              word.charAt(0).toUpperCase() +
              word.charAt(1).toUpperCase() +
              word.slice(2).toLowerCase()
            )
          } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          }
        })
        .join(' ')
    }
  }

  const formatCurrency = (amount: number | null | undefined) => {
    if (amount === null || amount === undefined) return ''
    const parts = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).formatToParts(amount)

    return parts
      .map((part) => {
        if (part.type === 'currency') return `${part.value} `
        return part.value
      })
      .join('')
  }

  return (
    <section id="cost" className="pt-6 mb-8">
      <h2 className="mb-6 font-oswald uppercase text-foreground tracking-[2px] text-[1.2rem] font-normal leading-[1.5em] relative before:content-[''] before:bg-accent before:w-[60px] before:h-[3px] before:absolute before:-bottom-[9px] before:left-0 after:content-[''] after:bg-accent after:w-[100px] after:h-px after:absolute after:-bottom-[8px] after:left-0">
        Tour Cost
      </h2>

      <div className="relative overflow-x-auto bg-card shadow-xs rounded-base border border-border">
        <table className="w-full text-sm text-left rtl:text-right text-foreground">
          <thead className="text-sm bg-muted/50 border-b border-border">
            <tr className="bg-muted/30">
              <th
                scope="col"
                className="px-2 py-2 sm:px-6 sm:py-3 text-primary uppercase font-bold"
              >
                Travel Mode
              </th>
              <th
                scope="col"
                className="px-2 py-2 sm:px-6 sm:py-3 text-primary uppercase font-bold"
              >
                Vehicle
              </th>
              <th
                scope="col"
                className="px-2 py-2 sm:px-6 sm:py-3 text-primary uppercase font-bold"
              >
                Cost
              </th>
            </tr>
          </thead>
          <tbody>
            {cost &&
              cost.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-border odd:bg-muted/10 hover:bg-muted/20 transition-colors"
                >
                  <th
                    scope="row"
                    className="text-xs sm:text-md sm:font-medium px-2 py-3 sm:px-6 sm:py-4 font-light whitespace-nowrap"
                  >
                    <strong className="text-foreground">
                      {capitalizeHyphenatedString(item.travelMode)}
                    </strong>
                  </th>
                  <td className="text-xs sm:text-md px-2 py-3 sm:px-6 sm:py-4 text-muted-foreground">
                    {capitalizeHyphenatedString(item.vehicleProvided)}
                  </td>
                  <td className="text-xs sm:text-md px-2 py-3 sm:px-6 sm:py-4 font-bold text-foreground">
                    {formatCurrency(item.costPerPerson)}
                  </td>
                </tr>
              ))}

            <tr>
              <td
                colSpan={3}
                className="text-xs text-foreground sm:text-md font-light sm:font-medium px-2 py-3 sm:px-6 sm:py-4 space-y-2 bg-muted/5"
              >
                <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[1px] text-primary">
                  Cost Conditions
                </p>
                <div className="flex items-start gap-2">
                  <span className="animated-arrow text-primary">👉</span>{' '}
                  <span className="text-muted-foreground">
                    Private room upgrade: Extra{' '}
                    <span className="text-primary font-bold">
                      {formatCurrency(privateRoomUpgradeNum)}
                    </span>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="animated-arrow text-accent">👉</span>
                  <span className="text-muted-foreground">
                    Bike (Himalayan 452) upgrade: Extra{' '}
                    <span className="text-primary font-bold">{formatCurrency(bikeUpgradeNum)}</span>
                  </span>
                </div>

                
                {costConditions.length > 0 && (
                  <ul className="space-y-1">
                    {costConditions.map((condition, index) => (
                      <li key={`${condition}-${index}`} className="flex items-start gap-2">
                        <span className="animated-arrow text-accent">👉</span>
                        <span className="text-muted-foreground">{condition}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
