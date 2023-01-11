import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Filtros from "../Filtros/Filtros"
import Paginado from "../Paginado/Paginado"
import Card from "../Card/Card";
import flecha from "../../img/Flecha.svg";
import punta from "../../img/Punta.svg";
import "./Listado.css"

const Listado = () => {
  const profesores = useSelector(state => state.profesores)

  const [page, setPages] = useState(1);
  const profesPerPage = 3
  const lastIndex =  page * profesPerPage
  const firstIndex = lastIndex - profesPerPage
  const currentePage = profesores.slice(firstIndex, lastIndex);

  const fnPaginado = (page) => {   // FUNCIÓN PARA MODIFICAR EL ESTADO LOCAL PAGE
    setPages(page);
  };

    return (
      <div className="color">
        <Link to={"/"}>
          <img className="punta" src={punta} alt="icono" />
          <img className="flecha" src={flecha} alt="icono" />
        </Link>
        <div className="colorGris">
        <h3 className="formTitle">
          Estos son los <br /> prooffs disponible.
        </h3>
      </div>

      <Filtros/>
      {
        profesores.length > 3 &&
        <Paginado
        profes={profesores.length}
        profesPerPage={profesPerPage}
        fnPaginado={fnPaginado}/>
        }
        <div className="cardContain">
      {
        (profesores.length > 0) ? (
           currentePage.map(profesor => (
            <Card
              key={profesor.id}
              nombre={profesor.nombre}
              materia={profesor.materia}
              foto={profesor.foto}
              biografia={profesor.biografia}
              costo={profesor.costo}
            ></Card>
          ))
        ) : (
            <div>
              <p className="ningun"> No se ha encontrado ningún profesor <br/> con tu busqueda </p>
            </div>
          )
      }
        </div>
      </div>
    );
}

export default Listado