import React from 'react'
import {setInput} from "../Redux/actions"
import axios from 'axios'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        input: state.form.input,
        errors: state.form.errors,
        genres: state.optionGenre
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setInput: (value, input) => dispatch(setInput(value, input))
    }
}

function validate(input) {
    let errors = {};
    if (!input.nombre) {
      errors.nombre = 'debes agregar un nombre';
    } else if (!input.imagen) {
      errors.imagen = 'agrega un link de imagen';
    } else if (!input.vida) {
      errors.vida = 'pon un numero de vida';
    }
  
    return errors;
  }


function FormPage({input, errors, setInput, genres}) {

    function inputHandleChangue(e) {
        return setInput(e.target.name, e.target.value);
    }

    // const activityHandler = async ({nombre, imagen, altura, vida, peso, tipo}) => {
    //     const {data} = await axios.post("http://localhost:3001/pokemons",{nombre, imagen, altura, vida, peso})
    //     return data
    // }

    const submitHandler = async (e) => {
        e.preventDefault()
        alert("Pokemon creado ")
    }



  return (

    <form onSubmit={submitHandler} id="form-fp">
        <div><img src="" alt =""/></div>
        <div className='input-container'>
        <h1>Crea tu Videojuego</h1>
            <div className="input-box">
                <input type="text" name="name" value={input.name} onChange={inputHandleChangue}/>
                <label>Nombre:</label>
            </div>
            <div className="input-box">
                <input type="text" name="image" value={input.image} onChange={inputHandleChangue}/>
                <label>URL de la Imagen:</label>
            </div>
            <div className="input-box">
                <input type="text" name="description" value={input.description} onChange={inputHandleChangue}/>
                <label>Descripcion::</label>
            </div>
            <div className="input-box">
                <input type="number"  name="platforms" value={input.platforms} onChange={inputHandleChangue}/>
                <label>Plataformas:</label>
            </div>
            <div className="input-box" >
                <input type="text" name="released" value={input.released} onChange={inputHandleChangue}/>
                <label>Fecha de lanzamiento:</label>
            </div>
            <div className="input-box">
                <input type="number"  name="rating" value={input.rating} onChange={inputHandleChangue}/>
                <label>Rating:</label>
            </div>
            <div className="input-box" >
                <select className='select'>
                    {
                        genres.map(gr => (
                            <option type="checkbox" className="opcion" key={gr.name} value={gr.name}>{gr.name}</option>
                        ))
                      }
                </select>
                <label>Selecciona Generos:</label>
            </div>

            {errors.nombre || errors.imagen|| errors.vida ? <p></p> : <button id="" type="submit">Crear Videojuego!</button>}
        </div>
    </form>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(FormPage)