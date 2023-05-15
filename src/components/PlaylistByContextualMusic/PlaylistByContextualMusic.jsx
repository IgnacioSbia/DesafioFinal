import React, { useEffect, useState } from 'react'
import './PlaylistByContextualMusic.css'
import playlistMoreButton from './Images/PlaylistMoreButton.svg';
import playlistShareButton from './Images/PlaylistShareIcon.svg';
import { Link } from 'react-router-dom';
import playlistTimeIcon from './Images/PlaylistTimeIcon.svg';
import PlaylistCopyIcon from './Images/PlaylistCopyIcon.svg';
import playlistShuffleIcon from './Images/playlistShuffleIcon.svg';
import playlistPlayIcon from './Images/PlaylistPlayIcon.svg';
import playlistArrow from '../ContextualMusic/img/arrowLeft.svg';
import playlistaplhaicon  from './Images/PlaylistalphaIcon.svg';
import playlistCheckIcon from './Images/PlaylistCheckIcon.svg';
import NavBar from '../NavigationBar/NavBar';
import playlistImagePlaceHolder from './Images/PlaylistImageProfilepng.png';


function PlaylistByContextualMusic() {
    const likedCupidSongs = localStorage.getItem('idplaylist');
  const token = localStorage.getItem('token');
  const [songByArtists, setSongByArtists] = useState([]);
  const likedCupidSongsArray = JSON.parse(likedCupidSongs);

  
  useEffect(()=>{
    const getSongs = async()=>{
      var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    await fetch(`http://localhost:8000/api/PlaylistSongs?playlistid=${likedCupidSongs}`, requestOptions)
      .then(response => response.json())
      .then((result) => {
        if (result.resultado) {
          setSongByArtists(result.resultado)
        }
      })
      .catch(error => console.log('error', error));
  
   
    }
    console.log(songByArtists)
    getSongs();
  }, [])  
  const GobackHome = ()=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    const deletePlaylist = {idplaylist:likedCupidSongsArray}


    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: JSON.stringify(deletePlaylist),
      redirect: 'follow'
    };

    fetch("http://localhost:8000/api/deletePlaylistById", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  console.log(songByArtists)

  return (
    <>
    <header className='playlistByCupidHeader'>
       <Link to={'/Home'}><button onClick={GobackHome} className='playlistByCupidGoHome'><img src={playlistArrow}/></button></Link>
        <div>
            <p className='playlistByCupidSubTitle'>Generada por Musica Contextual</p>
            <h2 className='playlistByCupidTitle'>Playlist Generada</h2>
        </div>
        <button className='playlistByCupidMore'><img src={playlistMoreButton}/></button>
    </header>
    <body>
        <div className='playlistByCupidSongs'>
            <img className='playlistByCupidSongImgs1' src={playlistImagePlaceHolder}/>
            <img className='playlistByCupidSongImgs2' src={playlistImagePlaceHolder}/>
            <img className='playlistByCupidSongImgs3' src={playlistImagePlaceHolder}/>
            <img className='playlistByCupidSongImgs4' src={playlistImagePlaceHolder}/>
        </div>
        
        <div className='playlistByCupidSongOptions'>
          <div className='playlistByCupidOptions'>
            <button className='playlistByCupidAlphaIcon'><img src={playlistaplhaicon}/></button>
            <img src={playlistCheckIcon}/>
            <button className='playlistByCupidShareIcon'><img src={playlistShareButton}/></button>
          </div>
          <div className='playlistCupidLenght'>
            <p className='playlistCupidTime'>1h 19m</p>
            <img className='playlistCupidTimeWheel' src={playlistTimeIcon}/>
          </div>
        </div>

        <div className='playlistByCupidMoreOptions'>
          <button className='playlistByCupidCreateCopy'><img src={PlaylistCopyIcon}/>Crear Copia</button>
          <div>
            <button className='playlistByCupidShuffle'><img src={playlistShuffleIcon}/></button>
            <button className='playlistByCupidPlay'><img src={playlistPlayIcon}/></button>
          </div>
        </div>

        <div className='playlistByCupidSongLists'>
          <ul className='playlistByCupidSongListsofSongs'>
           {songByArtists.map((item)=>{
           return <li>
            <div className='playlistByCupdiListSongContent'>
              <img className='playlistByCupidListSongsImg' src={`/${item.artist_img}`}/>
              <div className='playlistByCupidListSongInfo'>
                  <h4>{item.song_name}</h4>
                  <p className='playlistByCupidListsSongInfoArtist'>{item.artist_name}</p>
              </div>
              <button className='playlistByCupidListMoreInfoButton'><img src={playlistMoreButton}/></button>
            </div>
          </li>
           })}
            
          </ul>
        </div>

    </body>
    <footer>
      <NavBar/>
    </footer>
    
    
    </>
  )
}

export default PlaylistByContextualMusic