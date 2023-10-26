import React from 'react'
import { nextPage, prevPage, setSort, setGenre, setOrigin } from '../Redux/actions'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'

const mapStateToProps = state => {
  return{
    currentPage: state.currentPage,
    optionGenre: state.optionGenre
  }
}

const mapDispatchToProps = dispatch =>{
    return{
      prevPage: () => dispatch(prevPage()),
      nextPage: () => dispatch(nextPage()),
      setOrigin: (type) => dispatch(setOrigin(type)),
      setGenre: (type) => dispatch(setGenre(type)),
      setSort: (type) => dispatch(setSort(type))
    }
  }
function Menu({nextPage, prevPage, currentPage, setGenre, setOrigin, setSort, optionGenre}) {

  
  return (
    <div className='menu-cards'>
        <div>
          <h4>Filtrar</h4>
          <div>
            <label>genre</label>
            <select name="genre" onChange={e => setGenre(e.target.value)}>
              <option value="">N/A</option>
              {
                optionGenre.map(gr => (
                  <option value={gr.name} key={gr.id}>{gr.name}</option>
                  ))
              }
            </select>
          </div>
          <div>
            <label>origin</label>
            <select name="origin" onChange={e => setOrigin(e.target.value)}>
              <option value="">N/A</option>
              <option value="API">API</option>
              <option value="DB">DB</option>
            </select>
          </div>
          
        </div>
        <div>
          <h4>Ordenar</h4>
          <select name="sorts" onChange={(e)=>setSort(e.target.value)}>
            <option value="">N/A</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="5-0">5-0</option>
            <option value="0-5">0-5</option>
          </select>
        </div>
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