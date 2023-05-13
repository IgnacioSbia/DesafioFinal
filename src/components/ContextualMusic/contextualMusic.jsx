import "./contextualMusic.css";
import ArrowLeft from "./img/arrowLeft.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalContextMusic from "./modalContextMusic";

function ContextualMusic() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [generos, setGeneros] = useState([]);

  function habilityButton() {
    setButtonDisabled(false);
  }

  const [showModal, setShowModal] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(false);
  };

  useEffect(() => {
    const obtenerGeneros = async () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:8000/api/generos",
          requestOptions
        );
        if (response.ok) {
          const respuesta = await response.json();
          setGeneros(respuesta.genre);
          console.log(generos);
        } else {
          alert("ocurrio un error del lado del cliente");
        }
      } catch (error) {
        alert(error.message);
      }
    };
    obtenerGeneros();
  }, []);

  return (
    <main className="contextualMain">
      <div className="contGradient">
        <nav className="navContext">
          <div className="divArrow">
            <Link to="/Home">
              <img src={ArrowLeft} id="arrowLeft" alt="arrowLeft" />
            </Link>
          </div>
          <div>
            <h3>Música Contextual</h3>
          </div>
        </nav>
      </div>
      <section className="sectionSelects" onClick={handleSubmit}>
        <label className="allQuestions">
          <b>¿Cuál es la ocasión?</b>
        </label>
        <br />
        <select className="allSelects" id="selectFirst">
          <option className="options" name="Actividad" disabled selected>
            Actividad
          </option>
          <option className="options" name="Ejercicio Fisico">
            Ejercicio Físico
          </option>
          <option className="options" disabled name="Limpieza">
            Limpieza
          </option>
          <option className="options" disabled name="Celebración">
            Celebración
          </option>
          <option className="options" disabled name="Dormir">
            Dormir
          </option>
          <option className="options" disabled name="Meditar">
            Meditar
          </option>
          <option className="options" disabled name="Social">
            Social
          </option>
          <option className="options" disabled name="Estudiar">
            Estudiar
          </option>
          <option className="options" disabled name="Relajación">
            Relajación
          </option>
          <option className="options" disabled name="Viajando">
            Viajando
          </option>
        </select>
        <br />

        <label className="allQuestions">
          <b>¿Cómo te sientes?</b>
        </label>
        <br />
        <select className="allSelects" disabled>
          <option className="options" name="Estado de animo" selected disabled>
            Estado de Ánimo
          </option>
        </select>
        <br />

        <label className="allQuestions">
          <b>¿Cómo está el clima?</b>
        </label>
        <br />
        <select className="allSelects" disabled>
          <option className="options" name="Clima" selected disabled>
            Clima
          </option>
        </select>
        <br />
      </section>
      <section className="sectionButtons">
        <h3 className="titleGenero">Selecciona hasta 3 géneros:</h3>
        <div className="divButtons">
          {generos &&
            generos.map((genres, index) => {
              return (
                <button className="allButtons" value={genres.genre} key={index}>
                  {genres.genre}
                </button>
              );
            })}
        </div>
      </section>
      <div className="divButton">
        <Link to="/Home/MusicalCupid">
          <button className="buttonCrear" disabled={buttonDisabled}>
            Crear Playlist
          </button>
        </Link>
      </div>

      {showModal && <ModalContextMusic onClose={() => setShowModal(false)} />}
    </main>
  );
}

export default ContextualMusic;
