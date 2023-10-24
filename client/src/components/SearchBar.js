import React from 'react'
import {setSearch, searchGames} from "../Redux/actions"
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    searchText: busqueda => dispatch(setSearch(busqueda)),
    searchGames: search => dispatch(searchGames(search))
  }
}

function SearchBar ({search, searchText, searchGames}) {

  const handleSubmit = async event =>{
    event.preventDefault()
    return searchText(search)
  }

  const handleChange = async e =>{
    searchGames(e.target.value)
    searchText(e.target.value)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} className='form-search'>
        <input type="text" onChange={handleChange} value={search} id="search-input" placeholder='Buscar Pokemon...'/>
        <button type="submit" id="search-button">Search</button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
