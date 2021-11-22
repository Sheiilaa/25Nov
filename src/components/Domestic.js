import { Link } from "react-router-dom";
import "../styles/Article.scss";
import "../styles/App.scss";
import React from "react";
function Domestic() {
  return (
    <article className="main">
      <Link to="/">
        <div className="container">
          <p className="back">Volver atrás</p>
        </div>
      </Link>
      <h2 className="title_article">¿Que es la violencia doméstica?</h2>
      <div className="container_article">
        La violencia doméstica o violencia intrafamiliar es un concepto
        utilizado para referirse a «la violencia ejercida en el terreno de la
        convivencia asimilada, por parte de uno de los miembros contra otro,
        contra algunos de los demás o contra todos ellos, en este caso es
        indiferente el género.
      </div>
    </article>
  );
}

export default Domestic;
