import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Image from 'next/image'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()

  return (
    <SectionContainer>
      <div className='flex flex-col justify-between h-screen'>
        <header className='flex items-center justify-between py-2'>
          <div>
            <Link href='/' aria-label={siteMetadata.headerTitle}>
              <div>
                <Image src={siteMetadata.siteLogo} alt={siteMetadata.headerTitle} width={48} height={32} />
              </div>
            </Link>
          </div>
          <div className='flex items-center text-base leading-5'>
            <div className='hidden sm:block'>
              {headerNavLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={'p-1 font-medium text-gray-900 hover:text-violet-600 active:text-violet-700 dark:hover:text-violet-400 dark:active:text-violet-500 dark:text-gray-100 sm:p-4 ' + (router.pathname === link.href ? 'text-sky-800' : '')}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className='mb-auto'>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
