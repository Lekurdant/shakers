import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const dataPath = path.join(process.cwd(), 'data', 'artists.json')

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const updatedArtist = await request.json()
    
    // Lire les données existantes
    const data = fs.readFileSync(dataPath, 'utf8')
    const artists = JSON.parse(data)
    
    // Trouver l'index de l'artiste
    const index = artists.findIndex((artist: any) => artist.id === params.id)
    
    if (index === -1) {
      return NextResponse.json({ error: 'Artiste non trouvé' }, { status: 404 })
    }
    
    // Mettre à jour l'artiste
    artists[index] = {
      ...artists[index],
      ...updatedArtist,
      updatedAt: new Date().toISOString()
    }
    
    // Sauvegarder
    fs.writeFileSync(dataPath, JSON.stringify(artists, null, 2))
    
    return NextResponse.json(artists[index])
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la mise à jour de l\'artiste' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Lire les données existantes
    const data = fs.readFileSync(dataPath, 'utf8')
    const artists = JSON.parse(data)
    
    // Filtrer pour supprimer l'artiste
    const filteredArtists = artists.filter((artist: any) => artist.id !== params.id)
    
    if (filteredArtists.length === artists.length) {
      return NextResponse.json({ error: 'Artiste non trouvé' }, { status: 404 })
    }
    
    // Sauvegarder
    fs.writeFileSync(dataPath, JSON.stringify(filteredArtists, null, 2))
    
    return NextResponse.json({ message: 'Artiste supprimé avec succès' })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la suppression de l\'artiste' }, { status: 500 })
  }
}
