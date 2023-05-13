import React, { useEffect, useState } from "react";
import "./Profile.css";
import profileImg from "./Images/profileImgTest.svg";
import profileConfigImg from "./Images/profileConfig.svg";
import { Link } from "react-router-dom";
import profilePlaylistLine from "./Images/profilePlaylistLine.svg";
import profilePlaylistImg from "./Images/profilePlaylistImg.svg";
import NavBar from "../NavigationBar/NavBar.jsx";

function Profile() {
  const iduser = localStorage.getItem("iduser");
  const [playlists, setPlaylists] = useState([]);
  const [userName, setUserName] = useState("");
  const [idplaylist, setIdplaylist] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const playlistGet = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", token);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      await fetch(
        `http://localhost:8000/api/playlistsuser?iduser=${iduser}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.resultado) {
            setPlaylists(result.resultado), setIdplaylist(result.resultadoid);
          }
        })
        .catch((error) => console.log("error", error));

      if (playlists.length > 0) {
        setUserName(playlists[0].user_name);
      }
    };
    playlistGet();
  }, []);

  const handleClick = (indexid, indexname) => {
    localStorage.setItem("playlistid", indexid),
      localStorage.setItem("playlistname", indexname);
  };
  console.log(playlists);
  console.log(idplaylist);
  return (
    <>
      <header className="profileHeader">
        <div className="profileUserInfo">
          <img id="profileUserImg" src={profileImg} />
          <h1>{userName}</h1>
          <p>@UserTag</p>
          <Link to={"/Profile/Config"}>
            <button className="profileConfigButton">
              <img src={profileConfigImg} />
            </button>
          </Link>
        </div>
      </header>
      <main className="profileMain">
        <div className="profilePlaylistSection">
          <h2>Mis playlists</h2>
          <img src={profilePlaylistLine} />
          <Link to={"/profile/createplaylist"}>
            <button className="profileCreatePlaylist">Crear Playlist</button>
          </Link>
        </div>

        <div className="profileCreatedPlaylists">
          <ul className="profileCreatedPlaylistsList">
            {(playlists, idplaylist).map((item) => {
              return (
                <li key={item.id_playlist}
                  onClick={(e) => {
                    handleClick(item.id_playlist, item.playlist_name);
                  }}
                >
                  <Link to="/profile/playlist">
                    <div>
                      <img src={profilePlaylistImg} />
                      <h3>{item.playlist_name}</h3>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      <footer className="profileFooter">
        <NavBar />
      </footer>
    </>
  );
}

export default Profile;
