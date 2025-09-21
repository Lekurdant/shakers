import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const dataPath = path.join(process.cwd(), 'data', 'news.json')

export async function GET() {
  try {
    const data = fs.readFileSync(dataPath, 'utf8')
    const news = JSON.parse(data)
    return NextResponse.json(news)
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la lecture des données' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const newNews = await request.json()
    
    // Lire les données existantes
    const data = fs.readFileSync(dataPath, 'utf8')
    const news = JSON.parse(data)
    
    // Générer un nouvel ID
    const newId = (Math.max(...news.map((n: any) => parseInt(n.id))) + 1).toString()
    
    // Créer la nouvelle actualité
    const newsItem = {
      id: newId,
      ...newNews,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    // Ajouter à la liste
    news.push(newsItem)
    
    // Sauvegarder
    fs.writeFileSync(dataPath, JSON.stringify(news, null, 2))
    
    return NextResponse.json(newsItem, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la création de l\'actualité' }, { status: 500 })
  }
}
