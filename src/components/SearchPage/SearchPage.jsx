import React, { useState, useEffect } from "react";
import flecha from "./Icons-Images/flecha.svg";
import x from "./Icons-Images/x.svg";
import lupa from "./Icons-Images/lupa.svg";
import "./SearchPage.css";
import NavBar from "../NavigationBar/NavBar";

function SearchPage() {
  const [searchValue, setSearchValue] = useState("");
  const [songData, setSongData] = useState([]);
  const [filteredSongData, setFilteredSongData] = useState(songData);
  const [topTwenty, setTopTwenty] = useState(songData);
  const searchInputSelector = document.getElementById("searchbar");

  const onChangeSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    let newfilteredSongData = [...songData];
    newfilteredSongData = newfilteredSongData.filter((item) => {
      return item.song_name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    setFilteredSongData(newfilteredSongData);
  };
  const onClickReset = () => {
    setSearchValue("");
    searchInputSelector.value = "";
    return;
  };

  //conseguir info de la API

  //para el top 20
  /*   const canciones20 = async () => {
    var requestOptions = {
      method: "GET",
    }
    try {
      const response20 = await fetch(
        "http://localhost:8000/api/songartist",
        requestOptions
      );
      if (response20.ok) {
        const respuesta20 = await response20.json();
        setTopTwenty(respuesta20.SongsArtists)
      }
    } catch (error) {
      alert(error.message)
    }
  } 
  canciones20() */
  //para el search
  useEffect(() => {
    const canciones20 = async () => {
      var requestOptions = {
        method: "GET",
      };
      try {
        const response20 = await fetch(
          "http://localhost:8000/api/songartist20",
          requestOptions
        );
        if (response20.ok) {
          const respuesta20 = await response20.json();
          setTopTwenty(respuesta20.SongsArtists);
        }
      } catch (error) {
        alert(error.message);
      }
    };
    canciones20();
    const cancionesGet = async () => {
      var requestOptions = {
        method: "GET",
      };
      try {
        const response = await fetch(
          "http://localhost:8000/api/songartist",
          requestOptions
        );
        if (response.ok) {
          const respuesta = await response.json();
          setSongData(respuesta.SongsArtists);
        }
      } catch (error) {
        alert(error.message);
      }
    };
    cancionesGet();
  }, []);
  //

  return (
    <div className="searchcontainer">
      <div className="searchtopgradient"></div>
      <div className="searchheader">
        {searchValue === "" && <h1>Buscador</h1>}
      </div>

      <div className="searchbardiv">
        {searchValue === "" && <img className="searchlupa" src={lupa}></img>}
        {searchValue !== "" && (
          <img className="searchflecha" src={flecha}></img>
        )}
        <input
          className="searchinput"
          type="text"
          name="searchname"
          placeholder="¿Qué deseas escuchar?"
          id="searchbar"
          onChange={onChangeSearch}
        ></input>
        {searchValue !== "" && (
          <button type="reset" className="searchclear" onClick={onClickReset}>
            <img src={x}></img>
          </button>
        )}
      </div>
      {searchValue !== ""}
      {searchValue === "" && <NavBar></NavBar>}

      {/*    MAP DE top 20 */}
      {searchValue === "" && (
        <div className="search20header">
          <h1 className="search20headertext">
            Top 20's<hr></hr>
          </h1>
        </div>
      )}
      <div className="search20wrapper">
        {searchValue === "" &&
          topTwenty.map((top) => {
            return (
              <div key={top.id_song} className="searchtop20">
                <img className="top20image" src={`/${top.artist_img}`}></img>
                <p className="searchtextmain searchtop">{top.song_name}</p>
                <p className="searchtextsub searchtop">{top.artist_name}</p>
              </div>
            );
          })}
      </div>
      {searchValue === "" && <div className="searchspacer"></div>}
      {/*  MAP DE BUSQUEDA */}
      {searchValue !== "" &&
        filteredSongData.map((item) => (
          <div className="searchresultdiv" key={item.id_song}>
            <img
              src={`/${item.artist_img}`}
              className="searchresultpicture"
            ></img>
            <div className="searchresulttext">
              <p className="searchtextmain">{item.song_name}</p>
              <p className="searchtextsub">Cancion | {item.artist_name}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SearchPage;
