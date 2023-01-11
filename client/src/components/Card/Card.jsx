import React from 'react';
import whatsapp from "../../img/Whatsapp.svg"
import "./Card.css"

const Card = ({ nombre, materia, foto, biografia, costo }) => {
  return (
      <div className='card'>
        <div className='card2'>
        <div className='datosContain'>
          <img className='foto' src={foto} alt="imagen" width={"150px"} height={"150px"}></img>
          <div className='datos'>
            <p className='nombre'>{nombre}</p>
            <p className='materia'>{materia}</p>
          </div>
        </div>
        <p className='bio'>{biografia}</p>
        </div>
        <div className='priceContain'>
          <p>Precio/hora <span>${costo} </span></p>
          <button className='registro btn'>
            <img className='contacto' src={whatsapp} alt="" />
            <span> Entrar en contacto </span>
          </button>
        </div>
      </div>
  );
}

export default Card
