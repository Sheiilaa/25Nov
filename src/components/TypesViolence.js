import "../styles/Article.scss";
const TypesViolence = () => {
  return (
    <>
      <article>
        <h2 className="title_article">¿Que tipos de violencia hay?</h2>
        <section>
          <h3 className="title_article_2">Violencia psicológica</h3>
          <div className="container_article">
            <p>
              Se le llama violencia psicológica a toda agresión realizada sin la
              intervención del contacto físico entre las personas.
            </p>
            <p>
              Este tipo de violencia se enfoca en la emisión de frases
              descalificadoras y humillantes que buscan desvalorizar a otro
              individuo, además de una manipulación mental, con lo cual el
              agresor consigue que la victima no tenga libertal y autonomía.
              Esta es una de las razones por la cual la violencia psicológica es
              difícil de probar y manifestar.
            </p>
            <p>
              <h4 className="title_example">Algunos ejemplos son:</h4>
              <ul className="list_article">
                <li>
                  Coacción para que no puedas vestir como te gusta; Típica frase
                  de "Mejor no te pongas eso que vas a hacer el ridiculo" o "¿No
                  crees que llevas demasiado escote?"
                </li>
                <li>
                  No te permite tener vida fuera de la relación; Típica frase de
                  "Te echo mucho de menos, en vez de quedar con tus amigas, ¿por
                  que no te quedas conmigo?"
                </li>
                <li>
                  Ignorar tus sentimientos, cuando le dices como te sientes
                </li>
                <li>Generar una dependencía emocional hacia el individuo</li>
              </ul>
            </p>
          </div>
        </section>
        <section>
          <h3 className="title_article_2">Violencia sexual</h3>
          <div className="container_article">
            <p>
              Se llama violación sexual cuándo se experimentan relaciones
              sexuales forzosas sin consentimiento de la persona o con su
              consentimiento debido a amenazas previas o violencia.
            </p>
            <p>
              Este tipo de violencia es muy complicado de detectar ya que se
              normaliza el hecho de tener sexo con tu pareja (aún que a una de
              las parte no quiera.)
            </p>
            <p>
              <h4 className="title_example">Algunos ejemplos son:</h4>
              <ul className="list_article">
                <li>
                  Coación o amenazas por no tener sexo; Típica frase de "Si no
                  me lo das tú, me lo tendrán que dar otras"
                </li>
                <li>
                  Se hacen reproches o surgen enfados ante la negativa de tener
                  relaciones sexuales o de continuarlas si se decide que no se
                  quiere seguir.
                </li>
                <li>
                  Se realizan tocamientos, caricias o estimulación no deseada
                </li>
                <li>
                  Se amenaza con finalizar la relación si no se tienen
                  relaciones sexuales cuando se requieran.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section>
          <h3 className="title_article_2">Violencia física</h3>
          <div className="container_article">
            <p>
              Esta es la mas visible y reconocida, se llama violencia fisica a
              todo aquel acto en que se inflige daño fisico a la victima, a
              traves de una agresión directa.
            </p>
            <p>Dentro de este y en el peor de los casos la muerte</p>
            <p>
              <h4 className="title_example">Algunos ejemplos son:</h4>
              <ul className="list_article">
                <li>Un bofetón en medio de una discursión.</li>
                <li>Que te empujen/ zaranden.</li>
                <li>Que te escupan en una discursión</li>
              </ul>
            </p>
          </div>
        </section>
      </article>
    </>
  );
};

export default TypesViolence;
