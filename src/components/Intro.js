import "../styles/Article.scss";
import { Link } from "react-scroll";
import tableImg from "../images/estadistica.jpg";
const Intro = () => {
  return (
    <article name="intro">
      <h2 className="title_article"> ¿Por qué hago esto?</h2>
      <div className="container_article">
        Con motivo del 25 de noviembre he decido darles voz a las que ya no
        están, porque sólo en este 2021, 37 mujeres han sido asesinadas a manos
        de sus parejas; Pero esto sólo es la punta del iceberg, porque antes del
        trágico final hay un camino lleno de dolor, por ello hago esto, por las
        que ya no están, y para recordaros, que no estáis solas.
      </div>
      <img src={tableImg} alt="Estadistica" className="img_article" />
    </article>
  );
};

export default Intro;
