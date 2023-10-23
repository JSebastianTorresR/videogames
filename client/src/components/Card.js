import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({game}) {
  const {id, image, name, genres} = game
  return (
    <Link to={`/games/${id}`} >
      <div className='card'>
        <img src={image} alt={`imagen de ${name}`} />
        <h3>{name.toUpperCase()}</h3>
        <div className='genres-card'>
          {
            genres.map(genre => (
              <h4 key={genre}>{genre}</h4>
            ))
          }
        </div>
      </div>
    </Link>
  )
}
