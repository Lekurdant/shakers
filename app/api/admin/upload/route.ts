import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    console.log('Upload request received')
    
    const data = await request.formData()
    console.log('FormData received')
    
    const file: File | null = data.get('file') as unknown as File
    const type: string = data.get('type') as string // 'artists' ou 'news'
    
    console.log('File:', file ? { name: file.name, size: file.size, type: file.type } : 'null')
    console.log('Type:', type)

    if (!file) {
      console.log('No file provided')
      return NextResponse.json({ error: 'Aucun fichier fourni' }, { status: 400 })
    }

    if (!type || !['artists', 'news'].includes(type)) {
      console.log('Invalid type:', type)
      return NextResponse.json({ error: 'Type invalide' }, { status: 400 })
    }

    // Vérifier le type de fichier
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      console.log('File type not allowed:', file.type)
      return NextResponse.json({ 
        error: 'Type de fichier non autorisé. Utilisez JPG, PNG ou WebP.' 
      }, { status: 400 })
    }

    // Vérifier la taille (max 5MB)
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      console.log('File too large:', file.size)
      return NextResponse.json({ 
        error: 'Fichier trop volumineux. Taille maximale : 5MB.' 
      }, { status: 400 })
    }

    // Créer un nom de fichier unique
    const timestamp = Date.now()
    const extension = path.extname(file.name)
    const filename = `${timestamp}-${Math.random().toString(36).substring(2)}${extension}`
    
    console.log('Generated filename:', filename)
    
    // Chemin de destination
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', type)
    const filepath = path.join(uploadDir, filename)
    
    console.log('Upload directory:', uploadDir)
    console.log('File path:', filepath)

    // Créer le dossier s'il n'existe pas
    await mkdir(uploadDir, { recursive: true })
    console.log('Directory created/verified')

    // Convertir le fichier en buffer et l'écrire
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile(filepath, buffer)
    console.log('File written successfully')

    // Retourner l'URL de l'image
    const imageUrl = `/uploads/${type}/${filename}`
    console.log('Image URL:', imageUrl)

    return NextResponse.json({ 
      success: true, 
      imageUrl,
      filename 
    })

  } catch (error) {
    console.error('Erreur lors de l\'upload:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de l\'upload du fichier' 
    }, { status: 500 })
  }
}
