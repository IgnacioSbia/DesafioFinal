import "./createPlaylist.css";
import arrowLeft from "./img/arrowLeft.svg";
function CreatePlaylist() {
  return (
    <main className="mainPlaylist">
      <div className="topGradient">
        <nav className="navTitle">
          <div className="arrowLeft">
            <img id="imgArrow" src={arrowLeft} alt="arrowLeft" />
          </div>
          <h3>Crear playlist</h3>
        </nav>
        <h2>¿Cómo se llamará tu playlist?</h2>
      </div>
      <section>
        <label className="labelPlaylist" for="namePlaylist">
          Nombre de la Playlist:
        </label>
        <input type="text" id="namePlaylist"></input>
      </section>
    </main>
  );
}

export default CreatePlaylist;
