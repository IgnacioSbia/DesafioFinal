import "./createPlaylist.css";
import arrowLeft from "./img/arrowLeft.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function CreatePlaylist() {
  const [inputValue, setInputValue] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  function buttonHability(event) {
    setInputValue(event.target.value);
    setButtonDisabled(event.target.value === "");
  }
  const navigate = useNavigate();

  const continuar = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("iduser");
    const playlist = {playlist_name: inputValue, id_user: userId}

    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(playlist),
      redirect: 'follow'
    };

    fetch("http://localhost:8000/api/createPlaylist", requestOptions).then(
      (response) => response.json()
    );
    navigate("/Profile/Playlist", { state: {playlist_name: inputValue }});
  };

  return (
    <main className="mainPlaylist">
      <div className="topGradient">
        <nav className="navTitle">
          <div className="arrowLeft">
            <Link to="/Profile">
              <img id="imgArrow" src={arrowLeft} alt="arrowLeft" />
            </Link>
          </div>
          <div>
            <h3>Crear playlist</h3>
          </div>
        </nav>
        <article className="title">
          <h2>
            ¿Cómo se llamará tu
            <br />
            playlist?
          </h2>
        </article>
      </div>
      <section className="sectionInput">
        <label className="labelPlaylist" htmlFor="namePlaylist">
          Nombre de la Playlist:
        </label>
        <br />
        <input
          type="text"
          value={inputValue}
          onChange={buttonHability}
          id="namePlaylist"
        ></input>
      </section>
      <section className="sectionBtn">
        <Link to="/Profile">
          <button
            onClick={()=>continuar()}
            id="buttonContinue"
            disabled={buttonDisabled}
            className="btnContinue"
          >
            Continuar
          </button>
        </Link>
      </section>
    </main>
  );  
}

export default CreatePlaylist;
