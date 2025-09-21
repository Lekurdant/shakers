'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, Palette } from 'lucide-react'

export default function AdminLogin() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        router.push('/admin')
      } else {
        setError('Mot de passe incorrect')
      }
    } catch (error) {
      setError('Erreur de connexion')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-primary-50 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-900 flex items-center justify-center mx-auto mb-6">
            <Palette className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-display font-light text-primary-900 mb-2">
            Administration Shakers
          </h2>
          <p className="text-primary-600">
            Connectez-vous pour accéder au backoffice
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-primary-200 p-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-primary-900 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 pl-10 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Entrez le mot de passe"
                />
                <Lock className="w-4 h-4 text-primary-400 absolute left-3 top-3" />
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-900 hover:bg-primary-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 inline-flex items-center justify-center disabled:opacity-50"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              ) : (
                <Lock className="w-4 h-4 mr-2" />
              )}
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-xs text-primary-500">
            Mot de passe par défaut : <code className="bg-primary-100 px-1 rounded">admin123</code>
          </p>
        </div>
      </div>
    </div>
  )
}
