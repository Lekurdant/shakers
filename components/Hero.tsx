import Link from 'next/link'
import { ArrowRight, Palette, Users, Calendar, Sparkles, Brush } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden min-h-screen flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/istockphoto-1468462288-640_adpp_is.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Artistic overlays and shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-transparent to-primary-800/90"></div>
      
      {/* Floating artistic elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-warm-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-400/30 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-warm-400/25 rounded-full blur-md animate-pulse" style={{animationDelay: '0.5s'}}></div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main content with artistic layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left side - Text content */}
            <div className="space-y-12">
              <div className="space-y-8">
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light text-white leading-none">
                  <span className="block">Shakers</span>
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-accent-300 mt-4 tracking-wider">
                    Lieux d'Effervescence
                  </span>
                </h1>
                
                <div className="w-32 h-px bg-accent-500"></div>
                
                <p className="text-xl sm:text-2xl text-white/90 max-w-2xl leading-relaxed font-light">
                  Une résidence d'artistes à Montluçon. Un lieu d'effervescence 
                  où l'art rencontre la communauté, où la création prend vie 
                  et où chaque projet trouve sa place.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/residence" className="group bg-white text-primary-900 hover:bg-accent-50 font-medium py-5 px-10 transition-all duration-500 inline-flex items-center justify-center text-sm tracking-wide uppercase transform hover:-translate-y-1 border-2 border-transparent hover:border-accent-200 rounded-none">
                  <span>Découvrir la résidence</span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="/contact" className="group bg-transparent text-white hover:bg-white/10 font-medium py-5 px-10 border-2 border-white/30 hover:border-white transition-all duration-500 inline-flex items-center justify-center text-sm tracking-wide uppercase backdrop-blur-sm rounded-none">
                  <span>Nous contacter</span>
                </Link>
              </div>
            </div>

            {/* Right side - Artistic floating cards */}
            <div className="relative">
              <div className="relative z-10 space-y-8">
                
                {/* Card 1 - Artists */}
                <div className="bg-white/10 backdrop-blur-md border-2 border-white/40 hover:border-white/60 p-8 rounded-2xl transform rotate-2 hover:rotate-0 transition-all duration-700 hover:scale-105 group">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center border-2 border-white/40 group-hover:border-white/60 transition-all duration-300">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-4xl font-display font-light text-white mb-1">3</div>
                      <div className="text-sm text-white/80 tracking-wide uppercase">Artistes résidents</div>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">Par an, nous accueillons des créateurs venus du monde entier pour des résidences de 3 à 6 mois</p>
                </div>

                {/* Card 2 - Space */}
                <div className="bg-white/10 backdrop-blur-md border-2 border-white/40 hover:border-white/60 p-8 rounded-2xl transform -rotate-1 hover:rotate-0 transition-all duration-700 hover:scale-105 group ml-12">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center border-2 border-white/40 group-hover:border-white/60 transition-all duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-4xl font-display font-light text-white mb-1">600m²</div>
                      <div className="text-sm text-white/80 tracking-wide uppercase">D'ateliers</div>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">Des espaces de création spacieux et lumineux, parfaitement équipés pour tous types de pratiques artistiques</p>
                </div>

                {/* Card 3 - Experience */}
                <div className="bg-white/10 backdrop-blur-md border-2 border-white/40 hover:border-white/60 p-8 rounded-2xl transform rotate-1 hover:rotate-0 transition-all duration-700 hover:scale-105 group">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center border-2 border-white/40 group-hover:border-white/60 transition-all duration-300">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-4xl font-display font-light text-white mb-1">2002</div>
                      <div className="text-sm text-white/80 tracking-wide uppercase">Année de création</div>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">Plus de 20 ans d'expérience dans l'accompagnement artistique et la médiation culturelle</p>
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent-400/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-warm-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-1/2 -right-5 w-12 h-12 bg-accent-300/40 rounded-full blur-lg animate-pulse" style={{animationDelay: '3s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}