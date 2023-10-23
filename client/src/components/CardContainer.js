import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
    videoGames: state.videoGames,
  };
};


function CardContainer({videoGames, searchResults }) {
  if (!videoGames.length) {
    return (
    <section>
      <div className='cards-container'>
        <h1>Cargando...</h1>
      </div>
    </section>)
  }

  if(searchResults.length){
    return (
      <section >
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