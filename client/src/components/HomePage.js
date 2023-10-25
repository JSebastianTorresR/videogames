import React, { useEffect } from 'react'
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {getGamesAsync} from "../Redux/actions"
import CardContainer from './CardContainer'
import NavBar from './NavBar'

const mapStateToProps = state => {
  return{
    currentPage: state.currentPage,
    sort: state.sort,
    genre: state.genre,
    filter: state.filter,
    origin: state.origin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGames: (currentPage, sort, genre, filter, origin) => dispatch(getGamesAsync(currentPage, sort, genre, filter, origin)),
  }
}

function HomePage({currentPage, sort, genre, filter, origin, getGames}) {
  useEffect(()=>{
    getGames(currentPage, sort, genre, filter, origin)
  }, [getGames, currentPage, sort, genre, filter, origin])

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className='main-hm'>
        <aside>
          <h1 >Favoritos</h1>
          <h1>Videojuego aleatorio</h1>
          <Link to="/crear"><h1>CREA TU VIDEOUEGO</h1></Link>
        </aside>
        <section >
          <CardContainer />
        </section>
      </main>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)