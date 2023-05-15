import "./contextualMusic.css";
import ArrowLeft from "./img/arrowLeft.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalContextMusic from "./modalContextMusic";

function ContextualMusic() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [generos, setGeneros] = useState([]);
  const idinfo = localStorage.getItem("cupidPlaylist");
  const [playlistid, setPlaylistid] = useState();
  const token = localStorage.getItem('token')

  // function habilityButton() {
  //   setButtonDisabled(false);
  // }

  function agregarGenero(value) {
    console.log(value)
    setButtonDisabled(false);
    addSongToContextualMusic(value)
   
  }

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  useEffect(() => {
    const obtenerGeneros = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", token);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("http://localhost:8000/api/generos", requestOptions)
        .then(response => response.json())
        .then(result => setGeneros(result.result))
        .catch(error => console.log('error', error));
      };
    obtenerGeneros();
      console.log(generos)
    const getPlaylistByName = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", token);
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

     await fetch(
        `http://localhost:8000/api/playlistByName?playlistname=${idinfo}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {setPlaylistid(result.resultado),  localStorage.setItem(
          "idplaylist",
          (result.resultado[0].id_playlist)
        );})
        .catch((error) => console.log("error", error));     
    };
    getPlaylistByName();
    console.log()
  }, []);

  const addSongToContextualMusic = async (idgenre) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    
    const playlistConText = {playlistid: playlistid[0].id_playlist,
      genreid:idgenre, };
    

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(playlistConText),
      redirect: 'follow'
    };

    fetch("http://localhost:8000/api/InsertByGenre", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    };

  const GobackHome = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    const deletePlaylist = { idplaylist: playlistid[0].id_playlist };

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: JSON.stringify(deletePlaylist),
      redirect: "follow",
    };

    fetch("http://localhost:8000/api/deletePlaylistById", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };





  return (
    <main className="contextualMain">
      <div className="contGradient">
        <nav className="navContext">
          <div className="divArrow">
            <Link to="/Home">
              <img onClick={GobackHome} src={ArrowLeft} id="arrowLeft" alt="arrowLeft" />
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
                <button
                  className="allButtons"
                  onClick={()=>{agregarGenero(genres.id_genre)}}
                  value={genres.genre}
                  key={index}
                >
                  {genres.genre}
                </button>
              );
            })}
        </div>
      </section>
      <div className="divButton">
        <Link to="/Home/playlistByContextualMusic">
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
