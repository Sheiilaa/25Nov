import { Link } from "react-router-dom";
import "../styles/Article.scss";
// import React from "react";
// import { useForm, ValidationError } from "@formspree/react";

const Questions = () => {
  //   const [state, handleSubmit] = useForm("myylrqvn");
  //   if (state.succeeded) {
  //     return <p>Enviado</p>;
  //   }
  // if(props.character=== undefined){
  //     return(
  //         <section>
  //             <p>PAGINA NO ENCONTRADA</p>
  //         </section>
  //     )

  // }else{

  return (
    <>
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
            una chica que sabe por lo que has pasado y quiere ayudarte.{" "}
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
            jurídico y atención psicosocial.{" "}
          </p>
          <spam className="spam"> El número es 016</spam>
        </div>
        <section>
          <form method="POST">
            {" "}
            {/*Deberia estar en el form onSubmit={handleSubmit}*/}
            <textarea
              class="input_mesagge"
              name="message"
              placeholder="Tu mensaje..."
              required
            ></textarea>
            {/* <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            /> */}
            <button
              class="button-submit"
              type="submit"
              //   disabled={state.submitting}
            >
              Enviar
            </button>
          </form>
        </section>
      </article>
    </>
  );
};
export default Questions;
