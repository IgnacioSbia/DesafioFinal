import React from 'react';
import refresh from './Images/Refresh.svg';
import notify from './Images/Notify.svg';
import './Home.css';
import musicCupid from './Images/MusicalCupid.svg';
import conextMusic from './Images/contexMusic.svg';
import { Link } from 'react-router-dom';
import NavBar from '../NavigationBar/NavBar.jsx';

function Home() {
  const cupidMusic = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("iduser");
    const playlist = {playlist_name: 'Playlist Generada', id_user: userId}
    localStorage.setItem('cupidPlaylist', 'Playlist Generada')
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
    
  }
  const contextMusic = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("iduser");
    const playlist = {playlist_name: 'Playlist Generada', id_user: userId}
    localStorage.setItem('cupidPlaylist', 'Playlist Generada')
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
    
  }

  return (
    <>
        <header className='homeHeader'>
            
            <div className='homeHeaderTitle'>
             <h1 className='homeMusicNow'>Música ya</h1>
            </div>

            <div className='homeHeaderButtons'>
              <button className='homeButton1'><img src={refresh}/></button>
              <button className='homeButton2'><img src={notify}/> </button>
             </div>
            
        </header>

        <main className='homeMain'>
          <Link to={'/Home/MusicalCupid'}>
            <div onClick={cupidMusic} className='homeMusicalCupid'>
              <div>
                <img className='homeImg' src={musicCupid}/>
              </div>
              <div className='homeMusicalCupidText'>
                <h2 className='homeContentTitle'>Cupido Musical</h2>
                <p style={{color: '#45464B'}}>Tus artistas favoritos nunca van a dejarte con el rozaón roto.</p>
              </div>
            </div>
          </Link>
          <Link to={'ContextMusic'}>
            <div onClick={contextMusic} className='homeContextMusic'>
              <div>
                <img className='homeImg' src={conextMusic}/>
              </div>
              <div className='homeMusicalCupidText'>
                <h2 className='homeContentTitle'>Música Contextual</h2>
                <p style={{color: '#45464B'}}>Creamos la playlist perfecta para cualquier situación.</p>
              </div> 
            </div>
          </Link>
        </main>
        <footer>
          <NavBar/>
        </footer>
    </>
  )
}

export default Home;