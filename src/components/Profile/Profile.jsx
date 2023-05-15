import React, { useEffect, useState } from "react";
import "./Profile.css";
import profileImg from "./Images/profileImgTest.svg";
import profileConfigImg from "./Images/profileConfig.svg";
import { Link } from "react-router-dom";
import profilePlaylistLine from "./Images/profilePlaylistLine.svg";
import profilePlaylistImg from "./Images/profilePlaylistImg.svg";
import NavBar from "../NavigationBar/NavBar.jsx";
import profileUserImgDefault from "./Images/ProfileUserPfpDefault.jpg";
import profilePlaylistDefaultImg from "./Images/PlaylistImageProfilepng.png";


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
    };

    playlistGet();

    const getUser = async()=>{
      var myHeaders = new Headers();
      myHeaders.append("Authorization", token);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`http://localhost:8000/api/getUserbyId?userid=${iduser}`, requestOptions)
        .then(response => response.json())
        .then(result => setUserName(result.resultado[0].user_name))
        .catch(error => console.log('error', error));
      }
      getUser();

  }, []);

  const handleClick = (indexid, indexname) => {
    localStorage.setItem("playlistid", indexid),
      localStorage.setItem("playlistname", indexname);
  };
  return (
    <>
      <header className="profileHeader">
        <div className="profileUserInfo">
          <img id="profileUserImg" src={profileUserImgDefault} />
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
                <li
                  key={item.id_playlist}
                  onClick={(e) => {
                    handleClick(item.id_playlist, item.playlist_name);
                  }}
                >
                  <Link to="/profile/playlist">
                    <div>
                      <img
                        className="profilePlaylistImages"
                        src={profilePlaylistDefaultImg}
                      />
                      <h3>{item.playlist_name}</h3>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="searchspacer"></div>
        </div>
        
      </main>
      <footer className="profileFooter">
        <NavBar />
      </footer>
    </>
  );
}

export default Profile;
