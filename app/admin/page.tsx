'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Users, 
  Newspaper, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Palette,
  Calendar,
  MapPin,
  ExternalLink
} from 'lucide-react'

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
  createdAt: string
  updatedAt: string
}

interface News {
  id: string
  type: string
  date: string
  title: string
  description: string
  location: string
  content: string
  image: string
  featured: boolean
  createdAt: string
  updatedAt: string
}

export default function AdminDashboard() {
  const [artists, setArtists] = useState<Artist[]>([])
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'artists' | 'news'>('artists')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [artistsRes, newsRes] = await Promise.all([
        fetch('/api/admin/artists'),
        fetch('/api/admin/news')
      ])
      
      const artistsData = await artistsRes.json()
      const newsData = await newsRes.json()
      
      setArtists(artistsData)
      setNews(newsData)
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteArtist = async (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet artiste ?')) {
      try {
        await fetch(`/api/admin/artists/${id}`, { method: 'DELETE' })
        setArtists(artists.filter(artist => artist.id !== id))
      } catch (error) {
        console.error('Erreur lors de la suppression:', error)
      }
    }
  }

  const deleteNews = async (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette actualité ?')) {
      try {
        await fetch(`/api/admin/news/${id}`, { method: 'DELETE' })
        setNews(news.filter(item => item.id !== id))
      } catch (error) {
        console.error('Erreur lors de la suppression:', error)
      }
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-primary-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-900 mx-auto mb-4"></div>
          <p className="text-primary-600">Chargement...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Header */}
      <header className="bg-white border-b border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-900 flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-display font-medium text-primary-900">Administration Shakers</h1>
            </div>
            <Link 
              href="/" 
              className="text-primary-600 hover:text-primary-900 text-sm font-medium"
            >
              ← Retour au site
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-primary-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('artists')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'artists'
                    ? 'border-primary-900 text-primary-900'
                    : 'border-transparent text-primary-600 hover:text-primary-900 hover:border-primary-300'
                }`}
              >
                <Users className="w-4 h-4 inline mr-2" />
                Artistes ({artists.length})
              </button>
              <button
                onClick={() => setActiveTab('news')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'news'
                    ? 'border-primary-900 text-primary-900'
                    : 'border-transparent text-primary-600 hover:text-primary-900 hover:border-primary-300'
                }`}
              >
                <Newspaper className="w-4 h-4 inline mr-2" />
                Actualités ({news.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'artists' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-light text-primary-900">Gestion des Artistes</h2>
              <Link
                href="/admin/artists/new"
                className="bg-primary-900 hover:bg-primary-800 text-white font-medium py-2 px-4 rounded-none transition-colors duration-300 text-sm tracking-wide uppercase inline-flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Nouvel artiste
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {artists.map((artist) => (
                <div key={artist.id} className="bg-white border border-primary-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-display font-medium text-primary-900 mb-2">
                        {artist.name}
                      </h3>
                      <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${
                        artist.status === 'current' 
                          ? 'bg-green-100 text-green-800'
                          : artist.status === 'selected'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {artist.status === 'current' ? 'En résidence' : 
                         artist.status === 'selected' ? 'Sélectionné' : 'Ancien résident'}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Link
                        href={`/admin/artists/${artist.id}/edit`}
                        className="text-primary-600 hover:text-primary-900 p-1"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => deleteArtist(artist.id)}
                        className="text-red-600 hover:text-red-900 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-primary-600 text-sm mb-3">{artist.type}</p>
                  <p className="text-primary-600 text-sm mb-4">{artist.description}</p>
                  
                  {artist.exhibition && (
                    <div className="flex items-center text-sm text-primary-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{artist.exhibition}</span>
                    </div>
                  )}
                  
                  {artist.website && (
                    <a
                      href={artist.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary-600 hover:text-primary-900"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Site web
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-light text-primary-900">Gestion des Actualités</h2>
              <Link
                href="/admin/news/new"
                className="bg-primary-900 hover:bg-primary-800 text-white font-medium py-2 px-4 rounded-none transition-colors duration-300 text-sm tracking-wide uppercase inline-flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Nouvelle actualité
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {news.map((item) => (
                <div key={item.id} className="bg-white border border-primary-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded-full mb-2">
                        {item.type}
                      </span>
                      <h3 className="text-lg font-display font-medium text-primary-900 mb-2">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                      <Link
                        href={`/admin/news/${item.id}/edit`}
                        className="text-primary-600 hover:text-primary-900 p-1"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => deleteNews(item.id)}
                        className="text-red-600 hover:text-red-900 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-primary-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-primary-500 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{item.location}</span>
                  </div>
                  
                  <p className="text-primary-600 text-sm mb-4">{item.description}</p>
                  
                  {item.featured && (
                    <span className="inline-block bg-accent-100 text-accent-800 text-xs font-medium px-2 py-1 rounded">
                      À la une
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
