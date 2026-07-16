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
import { HelpCircle, User, Compass, Heart, GitCompare } from 'lucide-react'


interface HeaderTopProps {
  data: LadakhMoto
}

export const HeaderTop: React.FC<HeaderTopProps> = ({ data }) => {
  return (
    <div className="w-full bg-primary/10 py-1 relative z-10 shadow-xs">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left */}
        <div className="header-top-left">
          <div className="flex justify-start items-center space-x-2">
            {data.facebook && (
              <a
                href={data.facebook}
                aria-label="Follow us on Facebook"
                title="Follow us on Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-accent transition-colors hidden lg:inline-block p-2"
              >
                <LMFacebook className="w-4 h-4" />
              </a>
            )}
            {data.twitter && (
              <a
                href={data.twitter}
                aria-label="Follow us on Twitter"
                title="Follow us on Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-accent transition-colors hidden lg:inline-block p-2"
              >
                <LMX className="w-4 h-4" />
              </a>
            )}
            {data.instagram && (
              <a
                href={data.instagram}
                aria-label="Follow us on Instagram"
                title="Follow us on Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-accent transition-colors hidden lg:inline-block p-2"
              >
                <LMInstagram className="w-4 h-4" />
              </a>
            )}
            {data.linkedin && (
              <a
                href={data.linkedin}
                aria-label="Follow us on Linkedin"
                title="Follow us on Linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-accent transition-colors hidden lg:inline-block p-2"
              >
                <LMLinkedIn className="w-4 h-4" />
              </a>
            )}
            {data.youtube && (
              <a
                href={data.youtube}
                aria-label="Follow us on Youtube"
                title="Follow us on Youtube"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-accent transition-colors hidden lg:inline-block p-2"
              >
                <LMYoutube className="w-4 h-4" />
              </a>
            )}
            {data.whatsapp && (
              <a
                href={data.whatsapp}
                aria-label="Message us on Whatsapp"
                title="Message us on Whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-accent transition-colors hidden lg:inline-block p-2"
              >
                <LMWhatsapp className="w-4 h-4" />
              </a>
            )}

            {data.phone1 && (
              <a
                className="flex lg:hidden items-center gap-x-2 font-oswald text-xs text-zinc-700 p-2"
                aria-label={`Call us at ${data.phone1}`}
                title="phone"
                href={`tel:${data.phone1}`}
              >
                <div className="text-accent">
                  <LMPhone />
                </div>
                <span>{data.phone1}</span>
              </a>
            )}
          </div>
        </div>

        {/* Right */}
        {/* <ul className="flex justify-start items-center space-x-4">
          {data.email1 && (
            <li>
              <EmailObfuscator
                email={data.email1}
                className="hidden lg:inline-flex items-center tracking-widest gap-x-2 font-oswald text-xs text-zinc-700 hover:text-accent transition-colors p-2"
                ariaLabel="Email us"
                title="Email"
              >
                <div className="text-accent h-4 w-4 mr-4">
                  <LMEmail />
                </div>
              </EmailObfuscator>
            </li>
          )}
          {data.phone1 && (
            <li>
              <a
                className="hidden lg:inline-flex items-center tracking-widest gap-x-2 font-oswald text-xs text-zinc-700 hover:text-accent transition-colors p-2"
                aria-label={`Call us at ${data.phone1}`}
                title="phone"
                href={`tel:${data.phone1}`}
              >
                <div className="text-accent">
                  <LMPhone />
                </div>
                <span>{data.phone1}</span>
              </a>
            </li>
          )}
          {data.phone2 && (
            <li>
              <a
                className="flex lg:inline-flex items-center tracking-widest gap-x-2 font-oswald text-xs text-zinc-700 hover:text-accent transition-colors p-2"
                aria-label={`Call us at ${data.phone2}`}
                title="phone"
                href={`tel:${data.phone2}`}
              >
                <div className="text-accent">
                  <LMPhone />
                </div>
                <span>{data.phone2}</span>
              </a>
            </li>
          )}
        </ul> */}

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
        </ul>
      </div>
    </div>
  )
}
