'use client'

import { useState, useRef } from 'react'
import { Upload, X, Image as ImageIcon } from 'lucide-react'

interface ImageUploadProps {
  value: string
  onChange: (url: string) => void
  type: 'artists' | 'news'
  label?: string
}

export default function ImageUpload({ value, onChange, type, label = "Image" }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    console.log('File selected:', { name: file.name, size: file.size, type: file.type })

    // Vérifier le type de fichier
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      console.log('File type not allowed:', file.type)
      alert('Type de fichier non autorisé. Utilisez JPG, PNG ou WebP.')
      return
    }

    // Vérifier la taille (max 5MB)
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      console.log('File too large:', file.size)
      alert('Fichier trop volumineux. Taille maximale : 5MB.')
      return
    }

    setUploading(true)
    console.log('Starting upload...')

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('type', type)

      console.log('Sending request to /api/admin/upload')
      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)

      if (response.ok) {
        const result = await response.json()
        console.log('Upload successful:', result)
        onChange(result.imageUrl)
        setPreview(result.imageUrl)
      } else {
        const error = await response.json()
        console.error('Upload error:', error)
        alert(error.error || 'Erreur lors de l\'upload')
      }
    } catch (error) {
      console.error('Erreur upload:', error)
      alert('Erreur lors de l\'upload du fichier')
    } finally {
      setUploading(false)
    }
  }

  const handleRemoveImage = () => {
    onChange('')
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-primary-900">
        {label}
      </label>
      
      <div className="space-y-4">
        {/* Zone d'upload */}
        <div
          onClick={handleClick}
          className="border-2 border-dashed border-primary-300 rounded-lg p-6 text-center hover:border-primary-400 cursor-pointer transition-colors duration-300"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            disabled={uploading}
          />
          
          {uploading ? (
            <div className="space-y-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-900 mx-auto"></div>
              <p className="text-sm text-primary-600">Upload en cours...</p>
            </div>
          ) : (
            <div className="space-y-2">
              <Upload className="w-8 h-8 text-primary-400 mx-auto" />
              <p className="text-sm text-primary-600 font-medium">
                Cliquez pour télécharger une image
              </p>
              <p className="text-xs text-primary-500">
                Formats acceptés : JPG, PNG, WebP (max 5MB)
              </p>
              <p className="text-xs text-accent-600 font-medium">
                L'image sera automatiquement sauvegardée
              </p>
            </div>
          )}
        </div>

        {/* Prévisualisation */}
        {(value || preview) && (
          <div className="relative">
            <div className="border border-primary-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-primary-900">Image sélectionnée :</span>
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="text-red-600 hover:text-red-800 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src={value || preview || ''}
                  alt="Preview"
                  className="w-16 h-16 object-cover rounded border border-primary-200"
                  onError={(e) => {
                    // Si l'image ne charge pas, afficher une icône par défaut
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="hidden w-16 h-16 bg-primary-100 rounded border border-primary-200 flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-primary-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-primary-600 truncate">
                    {value || preview}
                  </p>
                  <p className="text-xs text-primary-500">
                    Cliquez sur la zone d'upload pour changer l'image
                  </p>
                  <p className="text-xs text-green-600 font-medium">
                    ✓ Image sauvegardée localement
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
