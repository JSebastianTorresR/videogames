import React from 'react'
import Card from './Card'
import Menu from "./Menu"
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
    videoGames: state.videoGames,
    genre: state.genre,
    origin: state.origin
  };
};


function CardContainer({videoGames, searchResults, genre, origin }) {
  if (!videoGames.length && (genre || origin)){
    return (
    <section>
      <Menu />
      <div className='cards-container'>
        <h1>No se encontraron Juegos</h1>
      </div>
    </section>)
  }
  
  if (!videoGames.length){
    return (
    <section>
      <Menu />
      <div className='cards-container'>
        <h1>Cargando...</h1>
      </div>
    </section>)
  }
  


  if(searchResults.length){
    return (
      <section >
          <Menu />
          <div className='cards-container'>
          {
            searchResults.map(game => (
              <Card game={game} key={game.id}/>
            ))
          }
          </div>
      </section>
    )
  }

  return (
    <section >
        <Menu />
        <div className='cards-container'>
        {
          videoGames.map(game => (
            <Card game={game} key={game.id}/> 
            ))
        }
        </div>
    </section>
  )
}
export default connect(mapStateToProps)(CardContainer)