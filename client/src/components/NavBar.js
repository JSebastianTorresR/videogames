import React from 'react'
import { useLocation, Link } from 'react-router-dom'


export default function NavBar() {  
  const location = useLocation()
  return (
    <nav className='ld-nav'>
        <div className='div-nav'>
            <h1>Videojuegos</h1>
        </div>
        <div className='div-nav'>
            <Link to={location.pathname === "/" ? "/home" : "/"}><button>{location.pathname === "/" ? "Ingresar" : "Salir"}</button></Link>
        </div>
    </nav>
  )
}
