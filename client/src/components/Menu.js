import React from 'react'
import { nextPage, prevPage } from '../Redux/actions'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'

const mapDispatchToProps = dispatch =>{
    return{
      prevPage: () => dispatch(prevPage()),
      nextPage: () => dispatch(nextPage())
    }
  }
function Menu({nextPage, prevPage}) {
  return (
    <div className='menu-cards'>
        <h1>Filtrar</h1>
        <h1>Ordenar</h1>
        <SearchBar />
        <div>
            <button onClick={prevPage}>{"<"}</button>
            <button onClick={nextPage}>{">"}</button>
        </div>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Menu)