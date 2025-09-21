import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const dataPath = path.join(process.cwd(), 'data', 'artists.json')

export async function GET() {
  try {
    const data = fs.readFileSync(dataPath, 'utf8')
    const artists = JSON.parse(data)
    return NextResponse.json(artists)
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la lecture des données' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const newArtist = await request.json()
    
    // Lire les données existantes
    const data = fs.readFileSync(dataPath, 'utf8')
    const artists = JSON.parse(data)
    
    // Générer un nouvel ID
    const newId = (Math.max(...artists.map((a: any) => parseInt(a.id))) + 1).toString()
    
    // Créer le nouvel artiste
    const artist = {
      id: newId,
      ...newArtist,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    // Ajouter à la liste
    artists.push(artist)
    
    // Sauvegarder
    fs.writeFileSync(dataPath, JSON.stringify(artists, null, 2))
    
    return NextResponse.json(artist, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la création de l\'artiste' }, { status: 500 })
  }
}
