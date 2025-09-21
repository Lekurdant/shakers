'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import { Calendar, MapPin, ArrowRight, Newspaper, Sparkles, Star } from 'lucide-react'

interface NewsItem {
  id: string
  type: string
  date: string
  title: string
  description: string
  location?: string
  content?: string
  featured: boolean
  image?: string
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/admin/news')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data: NewsItem[] = await response.json()
        setNews(data)
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
  }, [])

  if (loading) {
    return <div className="text-center text-primary-600">Chargement des actualités...</div>
  }

  if (error) {
    return <div className="text-center text-red-600">Erreur: {error}</div>
  }

  const featuredNews = news.filter(item => item.featured)
  const otherNews = news.filter(item => !item.featured)
  const displayedNews = featuredNews.concat(otherNews)

  return (
    <section className="section-padding bg-gradient-to-br from-white via-primary-50 to-white relative overflow-hidden">
      {/* Background artistic elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-warm-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-accent-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-warm-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-accent-200/30 rounded-full blur-lg"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block mb-8">
            <span className="text-warm-500 text-sm font-medium tracking-widest uppercase">Actualités</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-primary-900 mb-8 leading-tight">
            <span className="block">Dernières nouvelles</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extralight text-primary-600 mt-4 tracking-wider">
              Actualités & Événements
            </span>
          </h2>
          
          <div className="w-24 h-px bg-accent-500 mx-auto mb-12"></div>
          
          <p className="text-xl sm:text-2xl text-primary-600 max-w-4xl mx-auto leading-relaxed font-light">
            Restez informé de nos dernières actualités, expositions et événements. 
            Découvrez l'effervescence artistique qui anime notre résidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {displayedNews.map((item, index) => (
            <div key={item.id} className={`relative group ${index === 0 ? 'lg:col-span-2' : ''}`}>
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-primary-50/80 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-primary-50/80 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm border-2 border-primary-300/70 hover:border-accent-400/90 rounded-3xl overflow-hidden transition-all duration-500 transform group-hover:-translate-y-2">
                
                {/* Image section */}
                <div className={`relative w-full ${index === 0 ? 'h-80 lg:h-96' : 'h-60'} bg-primary-100 overflow-hidden`}>
                  {item.image && item.image.startsWith('/uploads/') ? (
                    <>
                      <NextImage 
                        src={item.image} 
                        alt={item.title} 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          // Si l'image ne charge pas, masquer l'image et afficher les initiales
                          e.currentTarget.style.display = 'none'
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement
                          if (fallback) fallback.style.display = 'flex'
                        }}
                      />
                      {/* Fallback caché par défaut */}
                      <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-bold text-lg">
                              {item.title.split(' ').map(n => n[0]).join('').substring(0, 2)}
                            </span>
                          </div>
                          <p className="text-primary-600 font-medium">Image à venir</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Pas d'image locale - afficher le fallback */
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-lg">
                            {item.title.split(' ').map(n => n[0]).join('').substring(0, 2)}
                          </span>
                        </div>
                        <p className="text-primary-600 font-medium">
                          {item.image && !item.image.startsWith('/uploads/') 
                            ? 'Image externe non disponible' 
                            : 'Image à venir'
                          }
                        </p>
                        {item.image && !item.image.startsWith('/uploads/') && (
                          <p className="text-xs text-accent-600 mt-2">
                            Veuillez uploader une image locale
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Header with type badge */}
                <div className="p-8 pb-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-block text-xs font-medium px-4 py-2 tracking-wide uppercase rounded-full bg-accent-100 text-accent-800 border-2 border-accent-300">
                      {item.type}
                    </span>
                    {item.featured && (
                      <span className="inline-block bg-accent-100 text-accent-800 text-xs font-medium px-3 py-1 rounded-full border-2 border-accent-300">
                        À la une
                      </span>
                    )}
                  </div>
                  
                  <h3 className={`font-display font-light text-primary-900 mb-6 leading-tight ${
                    index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                  }`}>
                    {item.title}
                  </h3>
                  
                  <p className={`text-primary-600 leading-relaxed font-light mb-6 ${
                    index === 0 ? 'text-lg' : 'text-base'
                  }`}>
                    {item.description}
                  </p>
                </div>
                
                {/* Footer with date and location */}
                <div className="px-8 pb-8">
                  <div className="flex items-center justify-between text-sm text-primary-500 mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-accent-500" />
                      <span>{formatDate(item.date)}</span>
                    </div>
                    {item.location && (
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-warm-500" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                  
                  <Link 
                    href="/actualites" 
                    className="group inline-flex items-center text-accent-600 hover:text-accent-800 font-medium text-sm tracking-wide uppercase transition-colors duration-300"
                  >
                    <span>Lire la suite</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}