import React, { useEffect, useState } from "react";
import "./PlaylistByUser.css";
import pfp from "./Icons-Images/profilepic.svg";
import flechita from "./Icons-Images/flechita.svg";
import puntos from "./Icons-Images/puntos.svg";
import amigos from "./Icons-Images/amigos.svg";
import NavBar from "../NavigationBar/NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import playlistusershareIcon from "./Icons-Images/PlaylistByUserShareIcons.svg";
import playlistUserTimeIcon from "./Icons-Images/playlistUserTimeIcon.svg";
import playlistShuffleIcon from "./Icons-Images/playlistUserShuffleIcon.svg";
import playlistPlayIcon from "./Icons-Images/playlistUserPlayIcon.svg";
import playlistAddSong from "./Icons-Images/PlaylistUserAddSong.svg";
import playlistSongImgIconTest from "./Icons-Images/playlistUserIconTest.svg";
import playlistMoreButton from "./Icons-Images/PlaylistUserMoreButton.svg";
import playlistUserLock from "./Icons-Images/PlaylistByUserLockImg.svg";
import playlistimagebyuserplaceholder from './Icons-Images/PlaylistImageProfilepng.png';

//Seguro que luego hay que cambiar todo el texto por texto dinamico
// (por ejemplo, que el titulo de la playlist sea el mismo que le dieron en crear playlist)

function PlaylistByUser() {
  const playlistname = localStorage.getItem("playlistname");
  const playlistid = localStorage.getItem("playlistid");
  const token = localStorage.getItem("token");
  const [userSongs, setUserSongs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getSongs = () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", token);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      console.log(playlistid);
      fetch(
        `http://localhost:8000/api/PlaylistSongs?playlistid=${playlistid}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.resultado) {
            setUserSongs(result.resultado);
          }
        })
        .catch((error) => console.log("error", error));
    };
    getSongs();
  }, []);

  const GoToAddSongs = () => {
    e.preventDefault();
    navigate("/profile/playlist/addsongs");
  };
  return (
    <div className="pbucontainer">
      <div className="pbutopgradient"></div>

      <div className="pbuheader">
        <Link to="/profile">
          <img src={flechita}></img>
        </Link>
        <h2>{playlistname}</h2>
        <img className="pbudots" src={puntos}></img>
      </div>

      {userSongs.length <= 0 ? (
        <>
          <div className="pbucreatedby">
            <section className="pbucreatedtop">
              <p>Creada por:</p>
              <img src={amigos} />
            </section>

            <section className="pbuinfouser">
              <img className="pbuprofilepic" src={pfp} />
              <div className="pbuuser">
                <div className="pbuname">mara_pg</div>
                <div className="pbudate">29/03/23 - 12:12</div>
              </div>
            </section>
          </div>
          <hr />
          <div className="pbuaddsongs">
            <p className="pbutext">¿Que espéras?</p>
            <p className="pbutext">¡Hagamos crecer tu playlist!</p>
            <div className="pbuadddiv">
              <Link to={"/profile/playlist/addsongs"}>
                <button className="pbuadd">Añadir Canciones</button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="playlistByUserSongs">
            <img
              className="playlistByUserSongImgs1"
              src={playlistimagebyuserplaceholder}
            />
            <img
              className="playlistByUserSongImgs2"
              src={playlistimagebyuserplaceholder}
            />
            <img
              className="playlistByUserSongImgs3"
              src={playlistimagebyuserplaceholder}
            />
            <img
              className="playlistByUserSongImgs4"
              src={playlistimagebyuserplaceholder}
            />
          </div>

          <div className="playlistByUserSongOptions">
            <div className="playlistByUserOptions">
              <button className="playlistByUserImporvePlaylist">
                Mejorar Playlist
              </button>
              <img src={playlistUserLock} />
              <button className="playlistByUserShareIcon">
                <img src={playlistusershareIcon} />
              </button>
            </div>
            <div className="playlistUserLenght">
              <p className="playlistUserTime">1h 19m</p>
              <img
                className="playlistUserTimeWheel"
                src={playlistUserTimeIcon}
              />
            </div>
          </div>

          <div className="playlistByUserMoreOptions">
            <Link to={"/profile/playlist/addsongs"}>
              <button className="playlistByUserAddSongs">
                <img src={playlistAddSong} />
                Añadir Cancion
              </button>
            </Link>
            <div>
              <button className="playlistByUserShuffle">
                <img src={playlistShuffleIcon} />
              </button>
              <button className="playlistByUserPlay">
                <img src={playlistPlayIcon} />
              </button>
            </div>
          </div>

          <div className="playlistByUserSongLists">
            <ul className="playlistByUserSongListsofSongs">
              {userSongs.map((item) => {
                return (
                  <li>
                    <div className="playlistByUseriListSongContent">
                      <img
                        className="playlistByUserListSongsImg"
                        src={`/${item.artist_img}`}
                      />
                      <div className="playlistByUserListSongInfo">
                        <h4>{item.song_name}</h4>
                        <p className="playlistByUserListsSongInfoArtist">
                          {item.artist_name}
                        </p>
                      </div>
                      <button className="playlistByUserListMoreInfoButton">
                        <img src={playlistMoreButton} />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}

      <NavBar></NavBar>
    </div>
  );
}

export default PlaylistByUser;
