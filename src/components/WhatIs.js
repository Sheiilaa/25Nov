import "../styles/Article.scss";
import React from "react";
import { Link } from "react-router-dom";
import TypesViolence from "./TypesViolence";
import iceberg from "../images/Iceberg.jpeg";
const WhatIs = (props) => {
  return (
    <>
      <article name="whatIs">
        <div className="container_violence">
          <div className="container_article">
            <h2 className="title_article"> ¿Qué es la violencia de género?</h2>

            <p>
              La violencia de género ha sido y sigue siendo una de las
              manifestaciones más claras de la desigualdad, subordinación y de
              las relaciones de poder de los hombres sobre las mujeres.
            </p>
            <p>
              Se trata de una violencia que afecta a las mujeres por el mero
              hecho de serlo (no confundir con la
              <Link to="./domestic">
                <span> violencia doméstica</span>
              </Link>
              ). Constituye un atentado contra la integridad, la dignidad y la
              libertad de las mujeres, independentemente del ámbito en el que se
              produzca.
            </p>
          </div>
          <div className="iceberg">
            <img src={iceberg} alt="iceberg" className="img_iceberg" />
          </div>
        </div>
      </article>
      <TypesViolence
        handleCollapsable={props.handleCollapsable}
        collapsable1={props.collapsable1}
        collapsable2={props.collapsable2}
        collapsable3={props.collapsable3}
        collapsable4={props.collapsable4}
        collapsable5={props.collapsable5}
        collapsable6={props.collapsable6}
      />
    </>
  );
};

export default WhatIs;
