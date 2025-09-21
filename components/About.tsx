import { Brush, Lightbulb, Users, Sparkles, Heart, Star } from 'lucide-react'

const features = [
  {
    icon: Brush,
    title: 'Promotion des artistes',
    description: 'Soutenir et mettre en lumière les talents émergents et confirmés dans un environnement propice à la création.',
    color: 'from-accent-400 to-warm-400'
  },
  {
    icon: Lightbulb,
    title: 'Sensibilisation à l\'art',
    description: 'Rendre l\'art accessible à tous par des actions de médiation et des rencontres privilégiées.',
    color: 'from-warm-400 to-accent-400'
  },
  {
    icon: Users,
    title: 'Échanges et rencontres',
    description: 'Créer un lieu de dialogue unique entre artistes et public, favorisant les échanges culturels.',
    color: 'from-accent-500 to-warm-500'
  },
  {
    icon: Sparkles,
    title: 'Interventions artistiques',
    description: 'Diverses interventions artistiques pour enrichir la vie culturelle de Montluçon et sa région.',
    color: 'from-warm-500 to-accent-500'
  }
]

export default function About() {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-primary-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-warm-100/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-50/20 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <div className="inline-block mb-8">
            <span className="text-accent-500 text-sm font-medium tracking-widest uppercase">Notre mission</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-primary-900 mb-8 leading-tight">
            <span className="block">Qui sommes-nous ?</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extralight text-primary-600 mt-4 tracking-wider">
              Une passion pour l'art
            </span>
          </h2>
          
          <div className="w-24 h-px bg-accent-500 mx-auto mb-12"></div>
          
          <p className="text-xl sm:text-2xl text-primary-600 max-w-4xl mx-auto leading-relaxed font-light">
            Shakers privilégie la promotion des artistes, la sensibilisation à l'art et à l'esthétique
            par un contact avec la population, au travers d'actions de médiation, d'événements et
            expositions ainsi que diverses interventions artistiques.
          </p>
        </div>

        {/* Features grid with artistic layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 0
            
            return (
              <div 
                key={index} 
                className={`group relative ${isEven ? 'md:mt-8' : 'md:-mt-8'}`}
              >
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-50 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-50 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                
                {/* Content */}
                <div className="relative bg-white/80 backdrop-blur-sm border-2 border-primary-300/70 hover:border-accent-400/90 rounded-3xl p-10 text-center transition-all duration-500 transform group-hover:-translate-y-2">
                  
                  {/* Icon with gradient background */}
                  <div className="w-20 h-20 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-8 border-2 border-white/40 group-hover:border-white/60 transition-all duration-300 transform group-hover:scale-110">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-medium text-primary-900 mb-6 group-hover:text-accent-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-primary-600 leading-relaxed font-light text-lg">
                    {feature.description}
                  </p>
                  
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}