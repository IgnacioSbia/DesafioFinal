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
  useEffect(() => {
    const playlistGet = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("iduser");
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
         token
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      await fetch(
        "http://localhost:8000/api/playlistsuser?iduser="+ userId,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
            if (result.resultado) {
          setPlaylists(result.resultado);
            }
        })
        .catch((error) => console.log("error", error));
      
        if (playlists.length > 0) {
      setUserName(playlists[0].user_name);
        }
    };
    playlistGet();
  }, []);
  console.log(playlists);
  return (
    <>
      <header className="profileHeader">
        <div className="profileUserInfo">
          <img id="profileUserImg" src={profileImg} />
          <h1>{userName}</h1>
          <p>@mara_pg</p>
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
            {playlists.map((item) => {
              return (
                <li>
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
