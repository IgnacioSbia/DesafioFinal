import "./contextualMusic.css";
import ArrowLeft from "./img/arrowLeft.svg";

function ContextualMusic() {
  return (
    <main className="contextualMain">
      <div className="contGradient">
        <nav className="navContext">
          <div className="divArrow">
            <img src={ArrowLeft} id="arrowLeft" alt="arrowLeft" />
          </div>
          <div>
            <h3>Música Contextual</h3>
          </div>
        </nav>
      </div>
      <section className="sectionSelects">
        <label className="allQuestions">
          <b>¿Cuál es la ocasión?</b>
        </label>
        <br />
        <select className="allSelects">
          <option className="options" value="Actividad" disabled selected>
            Actividad
          </option>
          <option className="options" value="Ejercicio Fisico">
            Ejercicio Físico
          </option>
          <option className="options" value="Limpieza">
            Limpieza
          </option>
          <option className="options" value="Celebración">
            Celebración
          </option>
          <option className="options" value="Dormir">
            Dormir
          </option>
          <option className="options" value="Meditar">
            Meditar
          </option>
          <option className="options" value="Social">
            Social
          </option>
          <option className="options" value="Estudiar">
            Estudiar
          </option>
          <option className="options" value="Relajación">
            Relajación
          </option>
          <option className="options" value="Viajando">
            Viajando
          </option>
        </select>
        <br />

        <label className="allQuestions">
          <b>¿Cómo te sientes?</b>
        </label>
        <br />
        <select className="allSelects" disabled>
          <option className="options" value="Estado de animo" selected disabled>
            Estado de Ánimo
          </option>
        </select>
        <br />

        <label className="allQuestions">
          <b>¿Cómo está el clima?</b>
        </label>
        <br />
        <select className="allSelects" disabled>
          <option className="options" value="Clima" selected disabled>
            Clima
          </option>
        </select>
        <br />
      </section>
      <section className="sectionButtons">
        <h3 className="titleGenero">Selecciona hasta 3 géneros:</h3>
        <div className="divButtons">
          <button className="allButtons">Rock</button>
          <button className="allButtons">Country</button>
          <button className="allButtons">Soul</button>
          <button className="allButtons">Jazz</button>
          <button className="allButtons">Blues</button>
        </div>
        <div className="divButtons">
          <button className="allButtons">Hip-Hop</button>
          <button className="allButtons">Pop</button>
          <button className="allButtons">Reggae</button>
          <button className="allButtons">Folk</button>
          <button className="allButtons">R&B</button>
        </div>
        <div className="divButtons">
          <button className="allButtons">clásico</button>
          <button className="allButtons">Alternativo</button>
          <button className="allButtons">Ambiente</button>
          <button className="allButtons">EDM</button>
        </div>
        <div className="divButtons">
          <button className="allButtons">Electrónica</button>
          <button className="allButtons">Disco</button>
          <button className="allButtons">New Age</button>
          <button className="allButtons">Punk</button>
        </div>
      </section>
      <button className="buttonCrear">Crear Playlist</button>
    </main>
  );
}

export default ContextualMusic;
