import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Vérifier si c'est une route d'administration
  if (request.nextUrl.pathname.startsWith('/admin') && 
      request.nextUrl.pathname !== '/admin/login') {
    
    // Vérifier le token d'authentification
    const token = request.cookies.get('admin-token')
    
    if (!token) {
      // Rediriger vers la page de connexion
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
    
    // Vérifier que le token est valide
    try {
      const decoded = Buffer.from(token.value, 'base64').toString()
      if (decoded !== 'admin-authenticated') {
        return NextResponse.redirect(new URL('/admin/login', request.url))
      }
    } catch {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*'
}
