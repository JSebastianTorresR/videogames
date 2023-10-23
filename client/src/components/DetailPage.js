import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const API ="http://localhost:3001/pokemons"

export default function DetailPage() {
  const { id } = useParams()
  const [pokemonData, setPokemonData] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`${API}/${id}`)
        setPokemonData(response.data)
      } catch (error) {
        console.error('Error fetching Pokemon data:', error)
      }
    }

    fetchPokemon()
  }, [id])

  if (!pokemonData) {
    return <p>Cargando...</p>
  }

  const { nombre, imagen, altura, vida, ataque, defensa, velocidad, peso, tipos } = pokemonData
  
  return (
    <section>
      <div>
        <img src={imagen} alt={`imagen de ${nombre}`} />
      </div>
      <div>
        <h4>ID: {`${id}`}</h4>
        <h2>Nombre: {`${nombre}`}</h2>
        <h3>Vida: {`${vida}`}</h3>
        <h3>Ataque: {`${ataque}`}</h3>
        <h3>Defensa: {`${defensa}`}</h3>
      </div>
    </section>
  )
}


// ID.
// Nombre.
// Imagen.
// Plataformas.
// Descripción.
// Fecha de lanzamiento.
// Rating.
// Géneros.
