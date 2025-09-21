import { Search, Filter, User, Calendar, ArrowRight } from 'lucide-react'

export default function Artistes() {
  const artistsByYear = [
    {
      year: '2022',
      artists: [
        'Audin Jonathan', 'Balbzioui Yassine', 'Barillé Laure', 'Bataillard Marion',
        'Bilger Sidonie', 'Boissin Jade', 'Bonichon Jean', 'Boosten Paolo'
      ]
    },
    {
      year: '2021',
      artists: [
        'Caicedo Adrian', 'Caldeira Juliano', 'Casse Coline', 'Chevassus Julie',
        'Duranthon Anthony', 'Fabien Marion', 'Genco Vincent', 'Giroud Florence'
      ]
    },
    {
      year: '2020',
      artists: [
        'Gobart Yves', 'Kisiel Roxane', 'Konyali Sylvain', 'Lamouroux Florent',
        'Le Deunff Laurent', 'Levy-Lasne Thomas', 'Liron Jeremy', 'Manaranche Carole'
      ]
    },
    {
      year: '2019',
      artists: [
        'Maquet Julie', 'Maris Maude', 'Millot Judith', 'Ozga Kasia',
        'Pitel Nathalie', 'Poinat Aurélie', 'Pouyandeh Nazanin', 'Prouzet Anaïs'
      ]
    },
    {
      year: '2018',
      artists: [
        'Righini Diana', 'Rouget Mathieu', 'Suzuki Masahiro', 'Tabouret Claire',
        'Tiravy Chloé', 'Wassilew Evgenija', 'Yadan Ariane', 'Zambrano Hernan'
      ]
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Artistes en résidence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez tous les artistes qui ont été accueillis en résidence à Shakers 
              depuis 2002. Une communauté créative riche et diversifiée.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section-padding bg-white border-b">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher un artiste..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <button className="btn-secondary inline-flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filtrer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Artists by Year */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Archives par année
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explorez les artistes accueillis chaque année depuis 2018.
            </p>
          </div>

          <div className="space-y-12">
            {artistsByYear.map((yearData, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-primary-600 px-6 py-4">
                  <h3 className="text-2xl font-bold text-white flex items-center">
                    <Calendar className="w-6 h-6 mr-3" />
                    Sélection {yearData.year}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {yearData.artists.map((artist, artistIndex) => (
                      <div key={artistIndex} className="group">
                        <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-600 transition-colors duration-200">
                            <User className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-200" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                              {artist}
                            </h4>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors duration-200" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Voir les archives 2017-2006
            </button>
          </div>
        </div>
      </section>

      {/* Current Artists Highlight */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Artistes actuels
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les artistes actuellement en résidence et leurs projets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Current resident */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">JC</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Julie Chevassus</h3>
                <p className="text-primary-600 font-medium">Résidence longue - 6 mois</p>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Artiste en résidence actuelle, Julie développe un projet artistique 
                explorant les liens entre mémoire et territoire.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Exposition : 8 sept 2025</span>
                <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Voir le profil
                </button>
              </div>
            </div>

            {/* Selected artists */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">CP</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Camille PAMART</h3>
                <p className="text-green-600 font-medium">Résidence binôme - 3 mois</p>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Sélectionnée pour 2025, Camille travaille en collaboration avec 
                Marjorie Garcia sur un projet de création collective.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Sélection 2025</span>
                <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                  En savoir plus
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">MG</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Marjorie GARCIA</h3>
                <p className="text-blue-600 font-medium">Résidence binôme - 3 mois</p>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Partenaire de Camille Pamart, Marjorie apporte sa vision artistique 
                unique à ce projet collaboratif innovant.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Sélection 2025</span>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
