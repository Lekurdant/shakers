export default function Association() {

  return (
    <div className="pt-16">


      {/* Description Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-light text-primary-900 mb-8">
                Qui sommes nous
              </h2>
              <div className="w-16 h-px bg-accent-500 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg mx-auto text-primary-600 text-center">
              <p className="text-xl leading-relaxed font-light mb-8">
                Depuis 2002, une résidence d'artistes. Un lieu d'effervescence !
              </p>
              <p className="text-lg leading-relaxed font-light mb-8">
                3 artistes résidents accueillis par an, 600 m² d'ateliers, un appartement de 80 m², 
                un lieu d'échanges, de ressources et de formation.
              </p>
              <p className="text-lg leading-relaxed font-light">
                Shakers privilégie la promotion des artistes, la sensibilisation à l'art et à l'esthétique 
                par un contact avec la population, au travers d'actions de médiation, d'événements et 
                expositions ainsi que diverses interventions artistiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bureau Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-light text-primary-900 mb-12 text-center">
              Membres du bureau
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 text-center border-2 border-primary-200">
                <h3 className="text-xl font-display font-medium text-primary-900 mb-2">Président</h3>
                <p className="text-lg font-medium text-primary-700 mb-4">Abdennabi Zaher</p>
                <p className="text-primary-600 text-sm">abdennabizaher@hotmail.fr</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 text-center border-2 border-primary-200">
                <h3 className="text-xl font-display font-medium text-primary-900 mb-2">Secrétaire</h3>
                <p className="text-lg font-medium text-primary-700 mb-4">Laure Guilhot</p>
                <p className="text-primary-600 text-sm">laure.actyf@orange.fr</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 text-center border-2 border-primary-200">
                <h3 className="text-xl font-display font-medium text-primary-900 mb-2">Trésorier</h3>
                <p className="text-lg font-medium text-primary-700 mb-4">Claude Dorlet</p>
                <p className="text-primary-600 text-sm">claude.dorlet@gmail.com</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-primary-200">
              <h3 className="text-2xl font-display font-light text-primary-900 mb-6 text-center">
                Membres de droit
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="font-medium text-primary-700 mb-2">Communauté d'Agglomération</p>
                  <p className="text-primary-600">Samir Triki, Vice-Président chargé du Développement Culturel</p>
                  <p className="text-primary-600">Alric Berton, adjoint au maire chargé de la Culture, Patrimoine, Festivité et Tourisme</p>
                </div>
                <div>
                  <p className="font-medium text-primary-700 mb-2">Institutions</p>
                  <p className="text-primary-600">Conseil Régional Rhône Alpes Auvergne, Vice-Présidente de la commission culture</p>
                  <p className="text-primary-600">Conseil Général de L'Allier, Jean-Sébastien Laloy, Vice-Président de la commission culture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Venir à Shakers
            </h2>
            
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Adresse</h3>
                  <p className="text-gray-700 text-lg">13 square Henri Barbusse</p>
                  <p className="text-gray-700 text-lg">03100 MONTLUÇON</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Téléphone</h3>
                  <p className="text-gray-700 text-lg">06 74 12 91 87</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Ouverture au public</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <p className="font-medium mb-2">Lundi, Mardi, Jeudi et Vendredi</p>
                  <p>9h00 - 12h00, 14h00 - 17h00</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Mercredi</p>
                  <p>9h00 - 12h00, 14h00 - 16h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
