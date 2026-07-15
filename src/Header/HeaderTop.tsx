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

interface HeaderTopProps {
  data: LadakhMoto
}

export const HeaderTop: React.FC<HeaderTopProps> = ({ data }) => {
  return (
    <div className="w-full bg-white border-b border-zinc-200 relative z-10 shadow-xs">
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
          <li>
              <Link href={'/'} className='text-black/70 text-[10px] font-sans h-4 w-4 mr-4 tracking-widest text-shadow-mdz'>
                Help
              </Link>
            </li>
            <li>
              <Link href={'/'} className='text-black/70 text-[10px] font-sans h-4 w-4 mr-4 tracking-widest text-shadow-mdz'>
                Account
              </Link>
            </li>
            <li>
              <Link href={'/'} className='text-black/70 text-[10px] font-sans h-4 w-4 mr-4 tracking-widest text-shadow-mdz'>
                My Trips
              </Link>
            </li>
            <li>
              <Link href={'/'} className='text-black/70 text-[10px] font-sans h-4 w-4 mr-4 tracking-widest text-shadow-mdz'>
                Whishlist
              </Link>
            </li>
        </ul>

      </div>
    </div>
  )
}
