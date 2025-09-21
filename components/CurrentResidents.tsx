import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Star, Sparkles } from 'lucide-react'
import ArtistsData from './ArtistsData'

export default function CurrentResidents() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background artistic elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent-100/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-warm-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-warm-200/30 rounded-full blur-lg"></div>
      </div>
      
      <div className="container-custom relative z-10">

        <ArtistsData />

        {/* Call to action section */}
        <div className="mt-24">
          <div className="bg-gradient-to-br from-white via-primary-50 to-white backdrop-blur-sm border-2 border-primary-200/70 rounded-3xl p-16 max-w-6xl mx-auto relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-20 h-20 bg-accent-100/50 rounded-full blur-xl"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-warm-100/50 rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-block mb-6">
                  <span className="text-accent-500 text-sm font-medium tracking-widest uppercase">Candidature</span>
                </div>
                
                <h3 className="text-4xl font-display font-light text-primary-900 mb-6">
                  Vous êtes artiste ?
                </h3>
                
                <div className="w-16 h-px bg-accent-500 mx-auto mb-8"></div>
                
                <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed font-light">
                  Découvrez nos conditions d'accueil et postulez pour une résidence artistique 
                  dans un environnement unique propice à la création.
                </p>
              </div>

              {/* Benefits grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-white/20">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-display font-medium text-primary-900 mb-2">Résidences flexibles</h4>
                  <p className="text-primary-600 text-sm">De 3 à 6 mois selon votre projet</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-white/20">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-display font-medium text-primary-900 mb-2">Accompagnement</h4>
                  <p className="text-primary-600 text-sm">Soutien personnalisé tout au long</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-white/20">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-display font-medium text-primary-900 mb-2">Exposition</h4>
                  <p className="text-primary-600 text-sm">Présentation de vos œuvres</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
                <Link 
                  href="/residence" 
                  className="group relative bg-gradient-to-r from-accent-500 to-accent-600 text-white font-medium py-4 px-8 transition-all duration-300 inline-flex items-center justify-center text-sm tracking-wide uppercase rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Découvrir la résidence</span>
                  <ArrowRight className="relative z-10 ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link 
                  href="/contact" 
                  className="group relative bg-white text-accent-600 hover:text-white font-medium py-4 px-8 border-2 border-accent-500 transition-all duration-300 inline-flex items-center justify-center text-sm tracking-wide uppercase rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="relative z-10">Nous contacter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}