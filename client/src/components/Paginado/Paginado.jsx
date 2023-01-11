import React from "react";
import "./Paginado.css"

const Paginado = ({ profes, profesPerPage, fnPaginado }) => {
  const numberOfPages = [];
  for (let i = 1; i <= Math.ceil(profes / profesPerPage); i++) {
    numberOfPages.push(i);
  }
  
  return (
    <>
      <div className="paginadoContain">
        <div className="paginado">
          {
            numberOfPages.map(num => {
              return (
              <button key={num} onClick={()=> fnPaginado(num) }>{num}</button>
            )})
          }
        </div>
      </div>
    </>
  );
};

export default Paginado