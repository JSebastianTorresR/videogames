import React, { useEffect } from 'react'
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {getGamesAsync} from "../Redux/actions"
import CardContainer from './CardContainer'
import NavBar from './NavBar'

const mapStateToProps = state => {
  return{
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGames: (currentPage) => dispatch(getGamesAsync(currentPage)),
  }
}

function HomePage({currentPage, getGames}) {
  useEffect(()=>{
    getGames(currentPage)
  }, [getGames, currentPage])

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