'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <>
      <Header />
      <main className={`min-h-screen ${!isHomePage ? 'pt-24' : ''}`}>
        {children}
      </main>
      <Footer />
    </>
  )
}
