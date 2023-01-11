import React from "react";
import { Link } from "react-router-dom";
import imgUno from "../../img/Ilustra.svg";
import proff from "../../img/Proffy.svg";
import libro1 from "../../img/Libro1.svg";
import libro2 from "../../img/Libro2.svg";
import tv from "../../img/tv.svg"
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="grid">
        <div className="profContain">
          <img src={proff} alt="imagen" width={"400px"}></img>
          <p className="textoInicio"> Tu plataforma de <br /> estudio en línea </p>
        </div>
        <img src={imgUno} alt="imagen"></img>
      </div>

    <div>
      <Link to={"/listado"}>
        <button className="estudiar">
        <img src={libro1} alt="icon"></img>
        <img src={libro2} alt="icon" className="icon"></img>
          Estudiar</button>
      </Link>

      <Link to={"/form"}>
        <button className="clase">
        <img src={tv} alt="icon" className="icon"></img>
            Dar clases</button>
      </Link>
    </div>
    </div>
  );
};

export default Home;
