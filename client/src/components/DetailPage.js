import {getGameIdAsync} from "../Redux/actions"
import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { useParams } from 'react-router-dom'


const mapStateToProps = (state) => {
  return {
    currentGame: state.currentGame
  }
}

const mapDispatchToProps = dispatch => {
  return{
    gameID: (id) => dispatch(getGameIdAsync(id))
  }
}

function DetailPage({gameID, currentGame}) {
  const { ID } = useParams()
  useEffect(() => {
    gameID(ID)
  }, [gameID, ID])

  if (!Object.keys(currentGame).length) {
    return <p>Cargando...</p>
  }

  const { id, name, image, platforms, description, released, rating, genres } = currentGame

  return (
    <section>
      <div>
        <img src={image} alt={`imagen de ${name}`} />
      </div>
      <div>
        <h4>ID: {`${id}`}</h4>
        <h2>Nombre: {`${name}`}</h2>
        <h2>Plataformas:</h2>
        {
          platforms.map(pt =>( 
            <h5 key={pt}>{pt}</h5>
          ))
        }
        {description ? <p>: {`${description}`}</p> : null}
        <h3>Lanzamiento: {`${released}`}</h3>
        <h3>Rating: {`${rating}`}</h3>
        <h2>Generos:</h2>
        {
          genres.map(gr => (
            <h5 key={gr}>{gr}</h5>
          ))
        }
      </div>
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)


