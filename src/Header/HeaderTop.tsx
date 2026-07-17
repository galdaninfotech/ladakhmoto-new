import LMFacebook from '../components/Icons/LMFacebook'
import LMInstagram from '../components/Icons/LMInstagram'
import LMYoutube from '../components/Icons/LMYoutube'
import LMWhatsapp from '../components/Icons/LMWhatsapp'
import LMLinkedIn from '../components/Icons/LMLinkedIn'
import LMX from '../components/Icons/LMX'
import LMPhone from '../components/Icons/LMPhone'
import LMEmail from '../components/Icons/LMEmail'
import { LadakhMoto } from '@/payload-types'
import { EmailObfuscator } from '../components/EmailObfuscator'
import Link from 'next/link'
import { HelpCircle, User, Compass, Heart, GitCompare, CircleDollarSign, Languages } from 'lucide-react'


interface HeaderTopProps {
  data: LadakhMoto
}

export const HeaderTop: React.FC<HeaderTopProps> = ({ data }) => {
  return (
    <div className="w-full bg-primary/10 py-1 relative z-10 shadow-xs">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left */}
         <ul className="flex justify-start items-center space-x-4">
          <li className="flex items-center">
            <Link
              href={'/'}
              className="flex items-center gap-x-2 group p-1"
            >
              <div className="text-accent shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-black/70 font-bold font-oswald text-[10px] tracking-widest uppercase group-hover:text-accent transition-colors">
                  Get Help
                </span>
                <span className="text-foreground/70 text-[9px] leading-tight group-hover:text-accent/80 transition-colors">
                  Let Us Know
                </span>
              </div>
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href={'/'}
              className="flex items-center gap-x-2 group p-1"
            >
              <div className="text-accent shrink-0">
                <CircleDollarSign className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-black/70 font-bold font-oswald text-[10px] tracking-widest uppercase group-hover:text-accent transition-colors">
                  Curreny
                </span>
                <span className="text-foreground/70 text-[9px] leading-tight group-hover:text-accent/80 transition-colors">
                  Let Us Know
                </span>
              </div>
            </Link>
          </li>
          <li className="h-5 w-px bg-black/10" aria-hidden="true" />
          <li className="flex items-center">
            <Link
              href={'/'}
              className="flex items-center gap-x-2 group p-1"
            >
              <div className="text-accent shrink-0">
                <Languages className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-black/70 font-bold font-oswald text-[10px] tracking-widest uppercase group-hover:text-accent transition-colors">
                  Language
                </span>
                <span className="text-foreground/70 text-[9px] leading-tight group-hover:text-accent/80 transition-colors">
                  Sign In/Register
                </span>
              </div>
            </Link>
          </li>          
        </ul>


        {/* Right */}
        <ul className="flex justify-start items-center space-x-4 hidden md:flex">
          <li className="h-5 w-px bg-black/10" aria-hidden="true" />
          <li className="flex items-center">
            <Link
              href={'/'}
              className="flex items-center gap-x-2 group p-1"
            >
              <div className="text-accent shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-black/70 font-bold font-oswald text-[10px] tracking-widest uppercase group-hover:text-accent transition-colors">
                  My Trips
                </span>
                <span className="text-foreground/70 text-[9px] leading-tight group-hover:text-accent/80 transition-colors">
                  Manage Your Bookings
                </span>
              </div>
            </Link>
          </li>
          <li className="h-5 w-px bg-black/10" aria-hidden="true" />
          <li className="flex items-center">
            <Link
              href={'/'}
              className="flex items-center gap-x-2 group p-1"
            >
              <div className="text-accent shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-black/70 font-bold font-oswald text-[10px] tracking-widest uppercase group-hover:text-accent transition-colors">
                  Wishlist
                </span>
                <span className="text-foreground/70 text-[9px] leading-tight group-hover:text-accent/80 transition-colors">
                  Save Favourites
                </span>
              </div>
            </Link>
          </li>
          <li className="h-5 w-px bg-black/10" aria-hidden="true" />
          <li className="flex items-center">
            <Link
              href={'/'}
              className="flex items-center gap-x-2 group p-1"
            >
              <div className="text-accent shrink-0">
                <GitCompare className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-black/70 font-bold font-oswald text-[10px] tracking-widest uppercase group-hover:text-accent transition-colors">
                  Compare
                </span>
                <span className="text-foreground/70 text-[9px] leading-tight group-hover:text-accent/80 transition-colors">
                  Compare Rides
                </span>
              </div>
            </Link>
          </li>
          <li className="h-5 w-px bg-black/10" aria-hidden="true" />
          <li className="flex items-center">
            <Link
              href={'/'}
              className="flex items-center gap-x-2 group p-1"
            >
              <div className="text-accent shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-black/70 font-bold font-oswald text-[10px] tracking-widest uppercase group-hover:text-accent transition-colors">
                  Account
                </span>
                <span className="text-foreground/70 text-[9px] leading-tight group-hover:text-accent/80 transition-colors">
                  Sign In/Register
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
