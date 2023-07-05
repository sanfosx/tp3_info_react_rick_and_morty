//import React from 'react'
import './NotFound.css'
import GobackButton from '../GoBackButton/GobackButton'
const NotFound = () => {
  return (
    <div className="notfound-container">
       <img src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" alt=""  />
       <h1>Pagina no encontrada</h1>
       <GobackButton/>
    </div>
  )
}

export default NotFound
