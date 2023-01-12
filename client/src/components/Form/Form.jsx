import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import flecha from "../../img/Flecha.svg";
import punta from "../../img/Punta.svg";
import rectangle from "../../img/Rectangle.svg";
import "./Form.css";

const Form = () => {
  const diasDeLaSemana = [ "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo", ];
  const materias = [ "Artes", "Biología", "Ciencias", "Física", "Geografía", "Historia", "Matemáticas", "Portugués", "Química" ];
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    nombre: "",
    foto: "",
    celular: "",
    biografia: "",
    materia: "",
    costo: "",
    dia: "",
    horaInicio: [],
    horaFin: [],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeHoraInicio = (e) => {
    setForm({...form, horaInicio: [...form.horaInicio, e.target.value]})
  };

  const handleChangeHoraFin = (e) => {
    setForm({...form, horaFin: [...form.horaFin, e.target.value]})
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("https://proff-production.up.railway.app/profe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({
      nombre: "",
      foto: "",
      celular: "",
      biografia: "",
      materia: "",
      costo: "",
      dia: "",
      horaInicio: "",
      horaFin: "",
    });
  };

  return (
    <div className="color">
      <Link to={"/"}>
        <img className="punta" src={punta} alt="icono" />
        <img className="flecha" src={flecha} alt="icono" />
      </Link>
      <div className="colorGris">
        <h3 className="formTitle">
          ¡Qué incrible que <br /> quieras enseñar!
        </h3>
        <p className="primerPaso">
          El primer paso es llenar este <br /> formulario de inscripción.
        </p>
      </div>
      <div>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="infoContain">
            <h3 className="subtitulo">Tus datos</h3> <hr />
            <div>
              <label htmlFor="nombre">Nombre completo</label>
              <input
                autoComplete="off"
                type="text"
                id="nombre"
                name="nombre"
                value={form.nombre}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div>
              <label htmlFor="foto">
                Link de tu foto <small>(comience con //http)</small>
              </label>
              <input
                autoComplete="off"
                type="url"
                id="foto"
                name="foto"
                value={form.foto}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div>
              <label htmlFor="celular">
                Whatsapp <small>(solamente números)</small>{" "}
              </label>
              <input
                autoComplete="off"
                type="tel"
                id="celular"
                name="celular"
                value={form.celular}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div>
              <label htmlFor="biografia">Biografía</label>
              <textarea
                clasname="texarea"
                name="biografia"
                id="biografia"
                value={form.biografia}
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
            <h3 className="subtitulo">Sobre la clase</h3> <hr />
            <div>
              <label htmlFor="materia">Materia</label>
              <select name="materia" id="materia" onChange={(e) => handleChange(e)}>
                <option hidden>Selecciona lo que deseas enseñar</option>
                {materias.map((materia) => {
                  return (
                    <option value={materia} key={materia}>
                      {materia.charAt(0).toUpperCase() + materia.slice(1)}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label htmlFor="costo">
                Costo de tu hora por lección <small>(en $ MXN)</small>{" "}
              </label>
              <input
                autoComplete="off"
                type="number"
                id="costo"
                name="costo"
                value={form.costo}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <h3 className="subtitulo">Horarios disponibles</h3> <hr />
            <div>
              <div className="flex">
                <div className="flexSon">
                  <label htmlFor="dia">Día de la semana</label>
                  <select
                    autoComplete="off"
                    id="dia"
                    name="dia"
                    onChange={(e) => handleChange(e)}
                  >
                    <option hidden>Selecciona un día</option>
                    {diasDeLaSemana.map((dia) => {
                      return (
                        <option value={dia} key={dia}>
                          {" "}
                          {dia.charAt(0).toUpperCase() + dia.slice(1)}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div>
                  <label htmlFor="horarioInicio">Desde</label>
                  <input
                    className="hora"
                    autoComplete="off"
                    type="time"
                    id="horarioInicio"
                    name="horaInicio"
                    value={form.horaInicio}
                    onChange={(e) => handleChangeHoraInicio(e)}
                  ></input>
                </div>

                <div>
                  <label htmlFor="horarioInicio">Hasta</label>
                  <input
                    className="hora"
                    type="time"
                    id="horarioSalida"
                    name="horaFin"
                    value={form.horaFin}
                    onChange={(e) => handleChangeHoraFin(e)}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="botonContain">
            <div>
              <img src={rectangle} width={"30px"} alt="icon" />
              <div>
                <p>¡Importante!</p> 
                <p>Rellene todos los campos</p>
              </div>
            </div>
            <button className="registro"> Guardar Registro </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
