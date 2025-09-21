import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const dataPath = path.join(process.cwd(), 'data', 'news.json')

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const updatedNews = await request.json()
    
    // Lire les données existantes
    const data = fs.readFileSync(dataPath, 'utf8')
    const news = JSON.parse(data)
    
    // Trouver l'index de l'actualité
    const index = news.findIndex((item: any) => item.id === params.id)
    
    if (index === -1) {
      return NextResponse.json({ error: 'Actualité non trouvée' }, { status: 404 })
    }
    
    // Mettre à jour l'actualité
    news[index] = {
      ...news[index],
      ...updatedNews,
      updatedAt: new Date().toISOString()
    }
    
    // Sauvegarder
    fs.writeFileSync(dataPath, JSON.stringify(news, null, 2))
    
    return NextResponse.json(news[index])
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la mise à jour de l\'actualité' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Lire les données existantes
    const data = fs.readFileSync(dataPath, 'utf8')
    const news = JSON.parse(data)
    
    // Filtrer pour supprimer l'actualité
    const filteredNews = news.filter((item: any) => item.id !== params.id)
    
    if (filteredNews.length === news.length) {
      return NextResponse.json({ error: 'Actualité non trouvée' }, { status: 404 })
    }
    
    // Sauvegarder
    fs.writeFileSync(dataPath, JSON.stringify(filteredNews, null, 2))
    
    return NextResponse.json({ message: 'Actualité supprimée avec succès' })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la suppression de l\'actualité' }, { status: 500 })
  }
}
