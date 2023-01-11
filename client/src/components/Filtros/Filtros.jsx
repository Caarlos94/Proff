import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { filtro } from '../../actions';
import "./Filtros.css"

const Filtros = (/*{ setPage, setRender } */ ) => {
  
  const materias = [ "Artes", "Biología", "Ciencias", "Física", "Geografía", "Historia", "Matemáticas", "Portugués", "Química" ];
  const dias = [ "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo", ];

  const dispatch = useDispatch()

  const [ state, setState ] = useState({
    materia: "",
    dia: "",
    hora: ""
  })

  const handleFiltro = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
    // setPage(1)
  };

  const clickHandler = () => {
    dispatch(filtro(state))
  }

  return (
      <div>

        <div className='filterContain'>  
          <div>
            <label htmlFor="materia">Materia</label>
            <select 
            name="materia"
            id='materia'
            onChange={(e) => handleFiltro(e)}>
              <option hidden> </option>
            {materias.map((materia) => {
                return (
                  <option value={materia} key={materia}> {materia.charAt(0).toUpperCase() + materia.slice(1)}</option>
                  );
              })}
            </select>
          </div> 

          <div>
          <label htmlFor="dia">Día</label>
            <select
            name="dia"
            id='dia'
            onChange={(e) => handleFiltro(e)}>
              <option hidden> </option>
              {dias.map((dia) => {
                return (
                  <option value={dia} key={dia}> {dia.charAt(0).toUpperCase() + dia.slice(1)}</option>
                  );
              })}
            </select>
          </div>

          <div>
            <label htmlFor="hora">Horario</label>
            <input
              autoComplete="off"
              type="time"
              id="hora"
              name="hora"
              onChange={(e) => handleFiltro(e)}
              ></input>
          </div>

          <div>
            <button className='filtroBtn' onClick={() => clickHandler()}>Buscar</button>
          </div>

        </div>


      </div>
  );
};

export default Filtros