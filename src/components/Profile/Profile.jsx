import React from 'react';
import './Profile.css';
import profileImg from './Images/profileImgTest.svg';
import profileConfigImg from './Images/profileConfig.svg'
import { Link } from 'react-router-dom';
import profilePlaylistLine from './Images/profilePlaylistLine.svg'
import profilePlaylistImg from './Images/profilePlaylistImg.svg'
import NavBar from '../NavigationBar/NavBar.jsx'

function Profile() {
  return (
    <>
        <header className='profileHeader'>
            <div className='profileUserInfo'>
                <img id='profileUserImg' src={profileImg}/>
                <h1>Maria Pérez</h1>
                <p>@mara_pg</p>
                <Link to={'/profileconfig'}><button className='profileConfigButton'><img src={profileConfigImg}/></button></Link>
            </div>
        </header>
        <main className='profileMain'>
            
            <div className='profilePlaylistSection'>
                <h2>Mis playlists</h2>
                <img src={profilePlaylistLine}/>
                <button className='profileCreatePlaylist'>Crear Playlist</button>
            </div>

            <div className='profileCreatedPlaylists'>
                <ul className='profileCreatedPlaylistsList'>
                    <li>
                        <div>
                            <img src={profilePlaylistImg}/>
                            <h3>Nombre De Prueba</h3>
                            <p>Descripcion De </p>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
        <footer className='profileFooter'>
            <NavBar/>
        </footer>
    
    </>
  )
}

export default Profile