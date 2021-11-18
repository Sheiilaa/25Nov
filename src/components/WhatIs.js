import "../styles/intro.scss";
import React from "react";
import { Link } from "react-router-dom";

const WhatIs = () => {
  return (
    <article>
      <h2 className="title_article"> ¿Qué es la violencia de género?</h2>
      <div className="container_article">
        <p>
          La violencia de género ha sido y sigue siendo una de las
          manifestaciones más claras de la desigualdad, subordinación y de las
          relaciones de poder de los hombres sobre las mujeres.
        </p>
        <p>
          Se trata de una violencia que afecta a las mujeres por el mero hecho
          de serlo (no confundir con la
          <Link to="./domestic">
            <span> violencia doméstica</span>
          </Link>
          ). Constituye un atentado contra la integridad, la dignidad y la
          libertad de las mujeres, independentemente del ámbito en el que se
          produzca.
        </p>
      </div>
    </article>
  );
};

export default WhatIs;