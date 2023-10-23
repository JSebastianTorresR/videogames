import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function FormPage() {
    const getTypes = async () => {
        const {data} = await axios.get("http://localhost:3001/types")
        return data
    }

    const [input, setInput] = useState({
        nombre: "",
        imagen: "",
        altura: 0,
        vida: 0,
        peso: 0,
        tipo: []
    })

    const [errors, setErrors] = useState({})

    function inputHandleChangue(e) {
        console.log(e)
        setInput({ ...input, [e.target.name]: e.target.value });
        setErrors(
          validate({
            ...input,
            [e.target.name]: e.target.value,
          })
        );
    }

    const activityHandler = async ({nombre, imagen, altura, vida, peso, tipo}) => {
        const {data} = await axios.post("http://localhost:3001/pokemons",{nombre, imagen, altura, vida, peso})
        return data
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        await activityHandler(input)
        setInput({
            nombre: "",
            imagen: "",
            altura: 0,
            vida: 0,
            peso: 0,
            tipo: []
        })
        alert("Pokemon creado ")
    }

    const [types, setTypes] = useState([])

    useEffect(() => {
    const fetchData = async () => {
        const typesData = await getTypes();
        setTypes(typesData);
    };

    fetchData();
    }, []);


  return (

    <form onSubmit={submitHandler} id="form-fp">
        <div><img src="" alt =""/></div>
        <div className='input-container'>
        <h1>Crea tu pokemon</h1>
            <div className="input-box">
                <input type="text" name="nombre" value={input.nombre} onChange={inputHandleChangue}/>
                <label>Nombre:</label>
            </div>
            <div className="input-box">
                <input type="text" name="imagen" value={input.imagen} onChange={inputHandleChangue}/>
                <label>URL de la Imagen:</label>
            </div>
            <div className="input-box" name="altura" value={input.altura} onChange={inputHandleChangue}>
                <input type="number"/>
                <label>Vida:</label>
            </div>
            <div className="input-box" name="vida" value={input.vida} onChange={inputHandleChangue}>
                <input type="number"/>
                <label>Ataque:</label>
            </div>
            <div className="input-box" name="peso" value={input.peso} onChange={inputHandleChangue}>
                <input type="number"/>
                <label>Defensa:</label>
            </div>
            <div className="input-box" >
                <select className='select'>
                    {
                        types.map(type => (
                            <option className="opcion" key={type.nombre} value={type.nombre}>{type.nombre}</option>
                        ))
                      }
                </select>
                <label>Selecciona tipos:</label>
            </div>

            {errors.nombre || errors.imagen|| errors.vida ? <p></p> : <button id="" type="submit">Crear Pokemon!</button>}
        </div>
    </form>
  )
}

export function validate(input) {
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