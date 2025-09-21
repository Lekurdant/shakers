'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import { ArrowRight, Calendar } from 'lucide-react'

interface Artist {
  id: string
  name: string
  type: string
  description: string
  exhibition: string
  status: 'current' | 'selected' | 'past'
  image: string
  bio: string
  website: string
}

export default function ArtistsData() {
  const [artists, setArtists] = useState<Artist[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArtists()
  }, [])

  const fetchArtists = async () => {
    try {
      const response = await fetch('/api/admin/artists')
      if (response.ok) {
        const data = await response.json()
        setArtists(data)
      }
    } catch (error) {
      console.error('Erreur lors du chargement des artistes:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-900 mx-auto mb-4"></div>
        <p className="text-primary-600">Chargement des artistes...</p>
      </div>
    )
  }

  const currentResidents = artists.filter(artist => artist.status === 'current')
  const selectedArtists = artists.filter(artist => artist.status === 'selected')

  return (
    <>
      {/* Current resident */}
      <div className="mb-24">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-accent-500 text-sm font-medium tracking-widest uppercase">En ce moment</span>
          </div>
          <h3 className="text-3xl font-display font-light text-primary-900">
            Artiste en résidence
          </h3>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {currentResidents.length > 0 ? (
            currentResidents.map((resident) => (
              <div key={resident.id} className="relative group">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-100/50 to-warm-100/50 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-100/50 to-warm-100/50 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm border-2 border-primary-300/70 hover:border-accent-400/90 rounded-3xl overflow-hidden transition-all duration-500">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative">
                      <div className="h-80 lg:h-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-accent-400/20 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-6 h-6 bg-warm-400/20 rounded-full"></div>
                        
                        {resident.image && resident.image.startsWith('/uploads/') ? (
                          <NextImage 
                            src={resident.image} 
                            alt={resident.name} 
                            fill
                            style={{ objectFit: 'cover' }}
                            className="transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              // Si l'image ne charge pas, masquer l'image et afficher les initiales
                              e.currentTarget.style.display = 'none'
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement
                              if (fallback) fallback.style.display = 'block'
                            }}
                          />
                        ) : null}
                        
                        <div className={`text-center relative z-10 ${resident.image && resident.image.startsWith('/uploads/') ? 'hidden' : 'block'}`}>
                          <div className="w-32 h-32 bg-accent-500 rounded-3xl flex items-center justify-center mx-auto mb-8 border-2 border-white/40">
                            <span className="text-white font-display font-light text-3xl">
                              {resident.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <p className="text-primary-600 font-light text-lg">
                            {resident.image && !resident.image.startsWith('/uploads/') 
                              ? 'Image externe non disponible' 
                              : 'Photo à venir'
                            }
                          </p>
                          {resident.image && !resident.image.startsWith('/uploads/') && (
                            <p className="text-xs text-accent-600 mt-2">
                              Veuillez uploader une image locale
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 p-12">
                      <div className="mb-8">
                        <span className="inline-block bg-accent-100 text-accent-800 text-xs font-medium px-6 py-3 tracking-wide uppercase mb-6 rounded-full border-2 border-accent-300">
                          {resident.type}
                        </span>
                        <h4 className="text-3xl font-display font-light text-primary-900 mb-6">
                          {resident.name}
                        </h4>
                        <p className="text-primary-600 mb-8 leading-relaxed font-light text-lg">
                          {resident.description}
                        </p>
                      </div>
                      {resident.exhibition && (
                        <div className="flex items-center text-sm text-primary-500 mb-8 bg-primary-50 p-4 rounded-xl">
                          <Calendar className="w-5 h-5 mr-3 text-accent-500" />
                          <span className="font-medium">{resident.exhibition}</span>
                        </div>
                      )}
                      <Link 
                        href="/artistes" 
                        className="group inline-flex items-center text-accent-600 hover:text-accent-800 font-medium text-sm tracking-wide uppercase transition-colors duration-300"
                      >
                        <span>Voir le profil</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white/90 backdrop-blur-sm border border-primary-200/50 rounded-3xl p-16 text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-400 text-2xl font-light">A</span>
              </div>
              <p className="text-primary-600 text-lg">Aucun artiste en résidence actuellement</p>
            </div>
          )}
        </div>
      </div>

      {/* Selected artists for 2025 */}
      <div>
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-warm-500 text-sm font-medium tracking-widest uppercase">Sélection 2025</span>
          </div>
          <h3 className="text-3xl font-display font-light text-primary-900">
            Artistes sélectionnés pour 2025
          </h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {selectedArtists.length > 0 ? (
            selectedArtists.map((artist, index) => (
              <div key={artist.id} className={`relative group ${index % 2 === 0 ? 'lg:mt-8' : 'lg:-mt-8'}`}>
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-warm-100/50 to-accent-100/50 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-warm-100/50 to-accent-100/50 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm border-2 border-primary-300/70 hover:border-accent-400/90 rounded-3xl p-10 transition-all duration-500 transform group-hover:-translate-y-2">
                  <div className="mb-8">
                    <span className="inline-block bg-accent-100 text-accent-800 text-xs font-medium px-6 py-3 tracking-wide uppercase mb-6 rounded-full border-2 border-accent-300">
                      {artist.type}
                    </span>
                    <h4 className="text-2xl font-display font-light text-primary-900 mb-6">
                      {artist.name}
                    </h4>
                    <p className="text-primary-600 leading-relaxed font-light text-lg">
                      {artist.description}
                    </p>
                  </div>
                  
                  <Link 
                    href="/residence" 
                    className="group inline-flex items-center text-warm-600 hover:text-warm-800 font-medium text-sm tracking-wide uppercase transition-colors duration-300"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  
                </div>
              </div>
            ))
          ) : (
            <div className="lg:col-span-2 bg-white/90 backdrop-blur-sm border border-primary-200/50 rounded-3xl p-16 text-center">
              <div className="w-20 h-20 bg-warm-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-warm-400 text-2xl font-light">A</span>
              </div>
              <p className="text-primary-600 text-lg">Aucun artiste sélectionné pour 2025</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
