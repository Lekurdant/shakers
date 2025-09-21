'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Newspaper } from 'lucide-react'
import ImageUpload from '@/components/ImageUpload'

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
}

export default function EditNews() {
  const router = useRouter()
  const params = useParams()
  const [loading, setLoading] = useState(false)
  const [news, setNews] = useState<News | null>(null)
  const [formData, setFormData] = useState({
    type: 'Exposition',
    date: '',
    title: '',
    description: '',
    location: '',
    content: '',
    image: '',
    featured: false
  })

  useEffect(() => {
    if (params.id) {
      fetchNews()
    }
  }, [params.id])

  const fetchNews = async () => {
    try {
      const response = await fetch(`/api/admin/news`)
      if (response.ok) {
        const newsList = await response.json()
        const newsData = newsList.find((n: News) => n.id === params.id)
        if (newsData) {
          setNews(newsData)
          setFormData({
            type: newsData.type,
            date: newsData.date,
            title: newsData.title,
            description: newsData.description,
            location: newsData.location,
            content: newsData.content,
            image: newsData.image,
            featured: newsData.featured
          })
        }
      }
    } catch (error) {
      console.error('Erreur lors du chargement de l\'actualité:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`/api/admin/news/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/admin')
      } else {
        console.error('Erreur lors de la mise à jour')
      }
    } catch (error) {
      console.error('Erreur:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    })
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-primary-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-900 mx-auto mb-4"></div>
          <p className="text-primary-600">Chargement de l'actualité...</p>
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
                <Newspaper className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-display font-medium text-primary-900">Modifier l'Actualité</h1>
            </div>
            <Link 
              href="/admin" 
              className="text-primary-600 hover:text-primary-900 text-sm font-medium inline-flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'administration
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="bg-white border border-primary-200 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Type */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-primary-900 mb-2">
                Type *
              </label>
              <select
                id="type"
                name="type"
                required
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="Exposition">Exposition</option>
                <option value="Événement">Événement</option>
                <option value="Actualité">Actualité</option>
                <option value="Résidence">Résidence</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-primary-900 mb-2">
                Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Titre */}
            <div className="md:col-span-2">
              <label htmlFor="title" className="block text-sm font-medium text-primary-900 mb-2">
                Titre *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Titre de l'actualité..."
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-primary-900 mb-2">
                Description courte *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Description courte qui apparaîtra sur la page d'accueil..."
              />
            </div>

            {/* Lieu */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-primary-900 mb-2">
                Lieu *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Ex: Shakers Gallery"
              />
            </div>

            {/* À la une */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-primary-300 rounded"
              />
              <label htmlFor="featured" className="ml-2 block text-sm text-primary-900">
                Mettre à la une
              </label>
            </div>

            {/* Contenu */}
            <div className="md:col-span-2">
              <label htmlFor="content" className="block text-sm font-medium text-primary-900 mb-2">
                Contenu détaillé
              </label>
              <textarea
                id="content"
                name="content"
                rows={6}
                value={formData.content}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Contenu détaillé de l'actualité..."
              />
            </div>

            {/* Image */}
            <div className="md:col-span-2">
              <ImageUpload
                value={formData.image}
                onChange={(url) => setFormData({ ...formData, image: url })}
                type="news"
                label="Image de l'actualité"
              />
            </div>
          </div>

          {/* Boutons */}
          <div className="flex items-center justify-end space-x-4 mt-8 pt-6 border-t border-primary-200">
            <Link
              href="/admin"
              className="px-6 py-2 border border-primary-300 text-primary-700 hover:bg-primary-50 font-medium rounded-md transition-colors duration-300"
            >
              Annuler
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="bg-primary-900 hover:bg-primary-800 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 inline-flex items-center disabled:opacity-50"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              {loading ? 'Mise à jour...' : 'Mettre à jour'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
