import React, { useEffect, useState } from "react";
import arrowGoHome from "./Images/MusicalCupidCarouselArrow.svg";
import "./MusicalCupidCarousel.css";
import MusicalCupidCarouselItemsShowOff from "./MusicalCupidCarouselItemShowOff/MusicalCupidCarouselItemsShowOff";
import MusicalCupidCarouselFirstItem from "./Images/MusicalCupidCarouselFirstItem.svg";
import MusicalCupidCarouselSecondItem from "./Images/MusicalCupidCarouselItem2.svg";
import MusicalCupidCarouselThirdtItem from "./Images/MusicalCupidCarouselItem3.svg";
import MusicalCupidCarouselHeart from "./Images/MusicalCupidCarouselLikeSong.svg";
import MusicalCupidCarouselDislike from "./Images/MusicalCupidCarouselDislike.svg";
import MusicalCupidCarouselSelected from "./MusicalCupidCarouselItemShowOff/MusicalCupidCarouselSelected";
import MusicalCupidCarousel4thItem from "./Images/MusicalCupidCarousel4thItem.svg";
import MusicalCupidCarousel5thItem from "./Images/MusicalCupidCarousel5thItem.svg";
import MusicalCupidCarousel6thItem from "./Images/MusicalCupidCarousel6thitem.svg";
import { Link, json } from "react-router-dom";
import MusicalCupidCarouselModal from "./MusicalCupidCarouselModal/MusicalCupidCarouselModal";

function MusicalCupidCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [songSelected, setSongSelected] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem("token");
  const [items, setItems] = useState([]);
  const [artistid, setArtistid] = useState([]);
  localStorage.setItem("idartist", JSON.stringify(artistid));
  const idinfo = localStorage.getItem("cupidPlaylist");
  const [playlistid, setPlaylistid] = useState();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:8000/api/artists", requestOptions)
      .then((response) => response.json())
      .then((result) => setItems(result.resultado))
      .catch((error) => console.log("error", error));

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

      console.log(playlistid);
     
    };
    getPlaylistByName();

    console.log(idinfo);
  }, []);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - items.length;
    }

    setActiveIndex(newIndex);
  };

  const selectLikedSong = () => {
    if (songSelected.length >= items.length) {
      alert("Can not add more artist to Musical cupid");
    } else {
      setSongSelected([...songSelected, items[activeIndex]]);
      setArtistid([...artistid, items[activeIndex].id_artist]);
      addSongToPlaylistCupid(items[activeIndex].id_artist);
    }
  };

  const addSongToPlaylistCupid = async (artistids) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    const artistInfoToAdd = {
      playlistid: playlistid[0].id_playlist,
      artist: artistids,
    };

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(artistInfoToAdd),
      redirect: "follow",
    };

    fetch("http://localhost:8000/api/inserIntoPlaylistByArtist", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const handleLikeOrDislike = (event) => {
    event.preventDefault();

    setShowModal(true);
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
    <>
      <header className="MusicalCupidHeader">
        <Link to={"/Home"}>
          <button onClick={GobackHome} className="MusicalCupidGoHome">
            <img src={arrowGoHome} />
          </button>
        </Link>

        <h2 className="MusicalCupidCarouselTitle">Cupido Musical</h2>
      </header>
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item) => {
            return (
              <MusicalCupidCarouselItemsShowOff item={item} width={"100%"} />
            );
          })}
        </div>

        <div className="carousel-buttons">
          <button
            className="button-arrowY"
            onClick={(event) => {
              selectLikedSong(),
                handleLikeOrDislike(event),
                updateIndex(activeIndex + 1);
            }}
          >
            <span className="material-symbols-outlined">
              <img src={MusicalCupidCarouselHeart} />
            </span>{" "}
          </button>

          <button
            className="button-arrowX"
            onClick={(event) => {
              handleLikeOrDislike(event), updateIndex(activeIndex + 1);
            }}
          >
            <span className="material-symbols-outlined">
              <img src={MusicalCupidCarouselDislike} />
            </span>
          </button>
        </div>
      </div>

      <p className="MusicalCupidCupidMatches">Matches actuales: </p>
      <div className="MusicalCupidSongsLiked">
        {songSelected.map((song) => {
          return <MusicalCupidCarouselSelected song={song} />;
        })}
        {showModal && songSelected.length == 1 && (
          <MusicalCupidCarouselModal onClose={() => setShowModal(false)} />
        )}
      </div>
      <div className="MusicalCupidCreatePlaylist">
        <Link to={"/Home/PlaylistByMusicalCupid"}>
          <button
            disabled={songSelected.length >= 2 ? false : true}
            className="MusicalCupidCreatePlaylistButton"
          >
            Crear Playlist
          </button>
        </Link>
      </div>
    </>
  );
}

export default MusicalCupidCarousel;
