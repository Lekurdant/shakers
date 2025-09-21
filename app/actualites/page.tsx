import { Calendar, MapPin, ArrowRight, Tag } from 'lucide-react'

export default function Actualites() {
  const news = [
    {
      id: 1,
      title: 'Exposition sortie de résidence – Julie Chevassus',
      date: '8 septembre 2025',
      type: 'Exposition',
      category: 'Sortie de résidence',
      description: 'Venez découvrir les œuvres de Julie Chevassus à l\'occasion de sa sortie de résidence. Une exposition qui retrace son parcours artistique durant ses 6 mois de résidence à Shakers.',
      location: 'Shakers Gallery',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Journées du Patrimoine',
      date: '13 août 2025',
      type: 'Événement',
      category: 'Patrimoine',
      description: 'Shakers participe aux Journées du Patrimoine avec des visites guidées des ateliers, des rencontres avec les artistes et des ateliers de découverte pour tous les âges.',
      location: 'Shakers',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Escoubilles, exposition des œuvres de Ferrage',
      date: '13 mars 2025',
      type: 'Exposition',
      category: 'Exposition temporaire',
      description: 'Découvrez l\'exposition "Escoubilles" présentant les œuvres de Ferrage. Une exploration artistique des déchets et de leur transformation en objets d\'art.',
      location: 'Shakers Gallery',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Ateliers d\'arts visuels - Session printemps',
      date: '15 mars 2025',
      type: 'Atelier',
      category: 'Formation',
      description: 'Nouvelle session d\'ateliers d\'arts visuels pour le printemps. Ouverts à tous les niveaux, ces ateliers permettent de découvrir différentes techniques artistiques.',
      location: 'Shakers',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'M.A.D. (Montluçon Art Digital) - Édition 2025',
      date: '20 février 2025',
      type: 'Événement',
      category: 'Art numérique',
      description: 'La 3ème édition de M.A.D. explore les nouvelles frontières de l\'art numérique avec des installations interactives, des performances et des conférences.',
      location: 'Shakers & Montluçon',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'Candidatures 2025 - Résultats de sélection',
      date: '10 janvier 2025',
      type: 'Actualité',
      category: 'Résidence',
      description: 'Les artistes sélectionnés pour les résidences 2025 ont été annoncés. Découvrez les projets de Julie Chevassus, Camille Pamart et Marjorie Garcia.',
      location: 'Shakers',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ]

  const categories = ['Tous', 'Exposition', 'Événement', 'Atelier', 'Actualité', 'Résidence']

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Actualités
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Restez informé des dernières expositions, événements et actualités de Shakers. 
              Découvrez la vie artistique de notre résidence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              À la une
            </h2>
          </div>

          {news.filter(item => item.featured).map((item) => (
            <div key={item.id} className="max-w-6xl mx-auto">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-lg">JC</span>
                        </div>
                        <p className="text-primary-600 font-medium">Image à venir</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                          {item.type}
                        </span>
                        <span className="inline-block bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <button className="btn-primary">
                      Lire la suite
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Toutes les actualités
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  category === 'Tous'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.filter(item => !item.featured).map((item) => (
              <article key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <Tag className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Image à venir</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full">
                      {item.type}
                    </span>
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-xs text-gray-500 mb-4 space-x-3">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center">
                    Lire la suite
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Charger plus d'actualités
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
