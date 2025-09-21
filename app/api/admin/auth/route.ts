import { NextRequest, NextResponse } from 'next/server'

// Mot de passe simple pour la démo (à changer en production)
const ADMIN_PASSWORD = 'admin123'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()
    
    if (password === ADMIN_PASSWORD) {
      // Créer un token simple (en production, utilisez JWT)
      const token = Buffer.from('admin-authenticated').toString('base64')
      
      const response = NextResponse.json({ success: true })
      
      // Définir un cookie de session
      response.cookies.set('admin-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 24 heures
      })
      
      return response
    } else {
      return NextResponse.json({ error: 'Mot de passe incorrect' }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Erreur de connexion' }, { status: 500 })
  }
}
