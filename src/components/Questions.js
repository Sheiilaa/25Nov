import { Link } from "react-router-dom";
import "../styles/Article.scss";
import "../styles/App.scss";
import React from "react";

const Questions = () => {
  return (
    <main className="main">
      <article>
        <Link to="/">
          <div className="container">
            <p className="back">Volver atrás</p>
          </div>
        </Link>

        <h2 className="title_article"> Por si lo necesitas</h2>
        <div className="container_article">
          <p>
            Lo primero de todo, decirte que no soy psicóloga, simplemente soy
            una chica que sabe por lo que has pasado y quiere ayudarte.
          </p>
          <p>
            Este apartado es para ti, por si necesitas hablar, o simplemente
            desahogarte, puedas escribir un mensaje, este estará vinculado
            directamente con mi correo y en caso que queiras hablar me podras
            escribir tu correo, twitter, instagram o cualquier red social y yo
            te escribiré para hablar contigo, pero si simplemente quieres contar
            algo de forma anónima también puedes, no es necesario que me digas
            quien eres.
          </p>
          <p>
            Por otro lado queria dejarte destacado el número de atención a las
            víctimas de violencia de genero, en el tendrás asesoramiento
            jurídico y atención psicosocial.
          </p>
          <spam className="spam"> El número es 016</spam>
        </div>
        <section>
          <form action="https://formspree.io/f/myylrqvn" method="POST">
            <textarea
              class="input_mesagge"
              name="message"
              placeholder="Tu mensaje..."
              required
            ></textarea>

            <button class="button-submit" type="submit">
              Enviar
            </button>
          </form>
        </section>
      </article>
    </main>
  );
};
export default Questions;
