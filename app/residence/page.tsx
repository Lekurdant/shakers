import { Calendar, Users, Home, FileText, CheckCircle, ArrowRight, Palette, Heart, Star } from 'lucide-react'

export default function Residence() {

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent-50 via-white to-accent-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-accent-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-accent-600 text-sm font-medium tracking-widest uppercase">Appel à candidatures 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-primary-900 mb-8 leading-tight">
              <span className="block">Résidence d'artistes</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-extralight text-accent-600 mt-4 tracking-wider">
                Un lieu d'effervescence
              </span>
            </h1>
            
            <div className="w-24 h-px bg-accent-500 mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-primary-600 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
              Depuis 2002, Shakers accueille des artistes en résidence dans un environnement 
              propice à la création et à l'échange. Découvrez notre espace et nos conditions d'accueil.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-accent-200/50">
                <div className="text-3xl font-bold text-accent-600 mb-2">600m²</div>
                <p className="text-primary-700 font-medium">D'espaces de création</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-accent-200/50">
                <div className="text-3xl font-bold text-accent-600 mb-2">80m²</div>
                <p className="text-primary-700 font-medium">Appartement de résidence</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-accent-200/50">
                <div className="text-3xl font-bold text-accent-600 mb-2">3</div>
                <p className="text-primary-700 font-medium">Artistes accueillis par an</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Residence */}
      <section className="section-padding bg-gradient-to-br from-white via-primary-50 to-white relative overflow-hidden">
        {/* Background artistic elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-accent-100/40 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent-200/30 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-accent-600 text-sm font-medium tracking-widest uppercase">Notre espace</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-light text-primary-900 mb-6">
              Un lieu de création et d'échange
            </h2>
            <div className="w-16 h-px bg-accent-500 mx-auto mb-8"></div>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed font-light">
              Shakers offre un environnement unique pour la création artistique, 
              avec des espaces adaptés et une communauté bienveillante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative group">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-primary-50/80 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-primary-50/80 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm border-2 border-primary-200/70 hover:border-accent-400/90 rounded-3xl p-8 text-center transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 border-white/40 group-hover:border-white/60 transition-all duration-300">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-display font-medium text-primary-900 mb-4">
                  Ateliers spacieux
                </h3>
                <p className="text-primary-600 leading-relaxed font-light">
                  600m² d'espaces de création lumineux et équipés, 
                  parfaitement adaptés à tous types de pratiques artistiques.
                </p>
              </div>
            </div>

            <div className="relative group">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-primary-50/80 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-primary-50/80 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm border-2 border-primary-200/70 hover:border-accent-400/90 rounded-3xl p-8 text-center transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 border-white/40 group-hover:border-white/60 transition-all duration-300">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-display font-medium text-primary-900 mb-4">
                  Logement confortable
                </h3>
                <p className="text-primary-600 leading-relaxed font-light">
                  Un appartement de 80m² entièrement équipé, 
                  offrant un cadre de vie agréable pour se concentrer sur la création.
                </p>
              </div>
            </div>

            <div className="relative group">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-primary-50/80 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-primary-50/80 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm border-2 border-primary-200/70 hover:border-accent-400/90 rounded-3xl p-8 text-center transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 border-white/40 group-hover:border-white/60 transition-all duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-display font-medium text-primary-900 mb-4">
                  Communauté bienveillante
                </h3>
                <p className="text-primary-600 leading-relaxed font-light">
                  Intégration dans une communauté d'artistes et d'habitants 
                  passionnés, avec des échanges enrichissants et du soutien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-accent-600 text-sm font-medium tracking-widest uppercase">Artistes</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-light text-primary-900 mb-6">
              Créateurs d'aujourd'hui
            </h2>
            <div className="w-16 h-px bg-accent-500 mx-auto mb-8"></div>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed font-light">
              Découvrez les artistes qui font vivre Shakers et enrichissent notre communauté.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-accent-50 to-white rounded-3xl p-12 border-2 border-accent-200/50">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-display font-light text-primary-900 mb-4">
                  Artistes en résidence
                </h3>
                <p className="text-primary-600 leading-relaxed font-light mb-8">
                  Actuellement, nous accueillons des artistes qui développent leurs projets 
                  dans nos ateliers et partagent leur vision avec la communauté montluçonnaise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-8 transition-all duration-300 inline-flex items-center justify-center text-sm tracking-wide uppercase rounded-xl border-2 border-transparent hover:border-accent-300">
                    <span>Voir les artistes</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  <button className="bg-transparent text-accent-600 hover:bg-accent-50 font-medium py-3 px-8 border-2 border-accent-500 transition-all duration-300 inline-flex items-center justify-center text-sm tracking-wide uppercase rounded-xl">
                    <span>Archives</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-accent-600 text-sm font-medium tracking-widest uppercase">Candidature</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-light text-primary-900 mb-8">
              Intéressé par une résidence ?
            </h2>
            <div className="w-16 h-px bg-accent-500 mx-auto mb-8"></div>
            <p className="text-xl text-primary-600 leading-relaxed font-light mb-12 max-w-3xl mx-auto">
              Si vous souhaitez candidater pour une résidence à Shakers, 
              n'hésitez pas à nous contacter pour plus d'informations sur nos conditions d'accueil.
            </p>
            
            <div className="bg-white rounded-3xl p-12 border-2 border-primary-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-display font-medium text-primary-900 mb-4">Contact</h3>
                  <p className="text-primary-600 mb-2">Abdennabi Zaher</p>
                  <p className="text-primary-600 mb-2">Président de l'association</p>
                  <p className="text-accent-600">abdennabizaher@hotmail.fr</p>
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-primary-900 mb-4">Informations</h3>
                  <p className="text-primary-600 mb-2">Appel à candidatures 2025</p>
                  <p className="text-primary-600 mb-2">Sélection en cours</p>
                  <p className="text-primary-600">Résidences de 3 à 6 mois</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-4 px-8 transition-all duration-300 inline-flex items-center justify-center text-sm tracking-wide uppercase rounded-xl border-2 border-transparent hover:border-accent-300">
                  <span>Nous contacter</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="bg-transparent text-accent-600 hover:bg-accent-50 font-medium py-4 px-8 border-2 border-accent-500 transition-all duration-300 inline-flex items-center justify-center text-sm tracking-wide uppercase rounded-xl">
                  <span>En savoir plus</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
