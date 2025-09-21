'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Palette, Users, Home, Calendar, User, Sparkles } from 'lucide-react'

const navigation = [
  { name: 'Accueil', href: '/', icon: Home },
  { name: 'Association', href: '/association', icon: Users },
  { name: 'Résidence', href: '/residence', icon: Palette },
  { name: 'Artistes', href: '/artistes', icon: User },
  { name: 'Actualités', href: '/actualites', icon: Calendar },
  { name: 'Contact', href: '/contact', icon: Users },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Détermine si on est sur la page d'accueil (avec vidéo) ou une autre page
  const isHomePage = pathname === '/'

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container-custom px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className={`flex items-center justify-between h-24 backdrop-blur-md rounded-b-2xl mx-4 sm:mx-6 lg:mx-8 px-8 border-2 ${
          isHomePage 
            ? 'bg-white/5 border-white/20' 
            : 'bg-white/90 border-primary-200'
        }`}>
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group">
              <div>
                <span className={`text-2xl font-display font-bold tracking-wide transition-colors duration-300 ${
                  isHomePage 
                    ? 'text-white group-hover:text-accent-300' 
                    : 'text-primary-900 group-hover:text-accent-600'
                }`}>Shakers</span>
                <div className={`text-xs tracking-widest uppercase ${
                  isHomePage 
                    ? 'text-white/70' 
                    : 'text-primary-600'
                }`}>Lieux d'Effervescence</div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 tracking-wide uppercase relative group ${
                  isHomePage 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-primary-700 hover:text-primary-900'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isHomePage 
                    ? 'bg-gradient-to-r from-accent-400 to-warm-400' 
                    : 'bg-accent-500'
                }`}></div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 rounded-lg transition-all duration-300 ${
                isHomePage 
                  ? 'text-white/90 hover:text-white hover:bg-white/10' 
                  : 'text-primary-700 hover:text-primary-900 hover:bg-primary-100'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className={`px-4 pt-4 pb-6 space-y-2 backdrop-blur-md rounded-b-2xl mx-4 sm:mx-6 lg:mx-8 border-2 ${
              isHomePage 
                ? 'bg-white/10 border-white/20' 
                : 'bg-white/90 border-primary-200'
            }`}>
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-6 py-4 text-sm font-medium transition-all duration-300 tracking-wide uppercase rounded-xl ${
                      isHomePage 
                        ? 'text-white/90 hover:text-white hover:bg-white/10' 
                        : 'text-primary-700 hover:text-primary-900 hover:bg-primary-100'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}