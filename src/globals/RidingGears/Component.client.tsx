
import type { RidingGear as RidingGearsType } from '@/payload-types'
import { Media } from '@/components/Media'

export const RidingGears: React.FC<{ ridingGearsData: RidingGearsType | undefined }> = ({
  ridingGearsData,
}) => {
  // console.log(ridingGearsData)

  return (
    <div
      className="container mx-auto col-span-4 md:col-span-8 lg:col-span-9 mb-6 mt-8"
    >

      <h2 className="mb-6 font-oswald uppercase text-foreground tracking-[2px] text-[1.2rem] font-normal leading-[1.5em] relative before:content-[''] before:bg-accent before:w-[75px] before:h-[3px] before:absolute before:-bottom-[9px] before:left-0 after:content-[''] after:bg-accent after:w-[125px] after:h-px after:absolute after:-bottom-[8px] after:left-0">
        Riding Gears
      </h2>

      {ridingGearsData && typeof ridingGearsData.media === 'object' &&
        ridingGearsData.media !== null && (
          <div className="content-media my-4">
            <Media resource={ridingGearsData.media} />
          </div>
        )}
    </div>
  )
}
