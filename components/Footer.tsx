import Link from 'next/link'
import { Palette, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Accueil', href: '/' },
    { name: 'Association', href: '/association' },
    { name: 'Résidence', href: '/residence' },
    { name: 'Artistes', href: '/artistes' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background artistic elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-warm-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Logo and description */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-3xl font-display font-bold text-white tracking-wide">Shakers</h3>
                <p className="text-white/70 text-sm tracking-widest uppercase">Lieux d'Effervescence</p>
              </div>
              
              <p className="text-white/80 text-lg leading-relaxed font-light max-w-md mb-8">
                Depuis 2002, une résidence d'artistes à Montluçon. Un lieu d'effervescence 
                où l'art rencontre la communauté, où la création prend vie.
              </p>
              
              {/* Contact info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white/80">
                  <Mail className="w-5 h-5 text-accent-400" />
                  <span>contact@shakers-montlucon.fr</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Phone className="w-5 h-5 text-warm-400" />
                  <span>04 70 05 05 05</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin className="w-5 h-5 text-accent-400" />
                  <span>Montluçon, France</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-display font-medium text-white mb-8 tracking-wide uppercase">
                Navigation
              </h4>
              <ul className="space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors duration-300 font-light"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-lg font-display font-medium text-white mb-8 tracking-wide uppercase">
                Suivez-nous
              </h4>
              <div className="flex space-x-4">
                {navigation.social.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm border-2 border-white/40 hover:border-white/60 rounded-xl flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <span className="sr-only">{item.name}</span>
                      <Icon className="w-5 h-5" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-white/60 text-sm font-light">
                © 2024 Shakers - Lieux d'Effervescence. Tous droits réservés.
              </p>
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <span className="text-white/60 text-sm">by Arqova</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}