import React from 'react'
import { nextPage, prevPage } from '../Redux/actions'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'

const mapStateToProps = state => {
  return{
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = dispatch =>{
    return{
      prevPage: () => dispatch(prevPage()),
      nextPage: () => dispatch(nextPage())
    }
  }
function Menu({nextPage, prevPage, currentPage}) {
  return (
    <div className='menu-cards'>
        <h1>Filtrar</h1>
        <h1>Ordenar</h1>
        <SearchBar />
        <div>
            <button onClick={prevPage}>{"<"}</button>
            <p>{currentPage}</p>
            <button onClick={nextPage}>{">"}</button>
        </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)