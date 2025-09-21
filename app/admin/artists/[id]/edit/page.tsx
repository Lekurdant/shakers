'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Palette } from 'lucide-react'
import ImageUpload from '@/components/ImageUpload'

interface Artist {
  id: string
  name: string
  type: string
  description: string
  exhibition: string
  status: 'current' | 'selected' | 'past'
  bio: string
  website: string
  image: string
}

export default function EditArtist() {
  const router = useRouter()
  const params = useParams()
  const [loading, setLoading] = useState(false)
  const [artist, setArtist] = useState<Artist | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    exhibition: '',
    status: 'selected' as 'current' | 'selected' | 'past',
    bio: '',
    website: '',
    image: ''
  })

  useEffect(() => {
    if (params.id) {
      fetchArtist()
    }
  }, [params.id])

  const fetchArtist = async () => {
    try {
      const response = await fetch(`/api/admin/artists`)
      if (response.ok) {
        const artists = await response.json()
        const artistData = artists.find((a: Artist) => a.id === params.id)
        if (artistData) {
          setArtist(artistData)
          setFormData({
            name: artistData.name,
            type: artistData.type,
            description: artistData.description,
            exhibition: artistData.exhibition,
            status: artistData.status,
            bio: artistData.bio,
            website: artistData.website,
            image: artistData.image
          })
        }
      }
    } catch (error) {
      console.error('Erreur lors du chargement de l\'artiste:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`/api/admin/artists/${params.id}`, {
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!artist) {
    return (
      <div className="min-h-screen bg-primary-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-900 mx-auto mb-4"></div>
          <p className="text-primary-600">Chargement de l'artiste...</p>
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
              <h1 className="text-xl font-display font-medium text-primary-900">Modifier l'Artiste</h1>
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
            {/* Nom */}
            <div className="md:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-2">
                Nom de l'artiste *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Ex: Julie Chevassus"
              />
            </div>

            {/* Type de résidence */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-primary-900 mb-2">
                Type de résidence *
              </label>
              <input
                type="text"
                id="type"
                name="type"
                required
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Ex: Résidence longue de 6 mois"
              />
            </div>

            {/* Statut */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-primary-900 mb-2">
                Statut *
              </label>
              <select
                id="status"
                name="status"
                required
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="selected">Sélectionné</option>
                <option value="current">En résidence</option>
                <option value="past">Ancien résident</option>
              </select>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-primary-900 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Description de l'artiste et de son travail..."
              />
            </div>

            {/* Exposition */}
            <div>
              <label htmlFor="exhibition" className="block text-sm font-medium text-primary-900 mb-2">
                Exposition
              </label>
              <input
                type="text"
                id="exhibition"
                name="exhibition"
                value={formData.exhibition}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Ex: Exposition: 8 septembre 2025"
              />
            </div>

            {/* Site web */}
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-primary-900 mb-2">
                Site web
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="https://..."
              />
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <label htmlFor="bio" className="block text-sm font-medium text-primary-900 mb-2">
                Biographie
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={4}
                value={formData.bio}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Biographie détaillée de l'artiste..."
              />
            </div>

            {/* Image */}
            <div className="md:col-span-2">
              <ImageUpload
                value={formData.image}
                onChange={(url) => setFormData({ ...formData, image: url })}
                type="artists"
                label="Image de l'artiste"
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
