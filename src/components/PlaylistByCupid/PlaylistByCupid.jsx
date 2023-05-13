import React, { useState } from 'react';
import playlistArrow from './Images/PlaylistgoBack.svg';
import playlistMoreButton from './Images/PlaylistMoreButton.svg';
import './PlaylistByCupid.css';
import playlistsongsimg from './Images/PlaylistSongImgTest.svg';
import playlistaplhaicon from './Images/PlaylistalphaIcon.svg';
import playlistCheckIcon from './Images/PlaylistCheckIcon.svg';
import playlistShareButton from './Images/PlaylistShareIcon.svg';
import playlistTimeIcon from './Images/PlaylistTimeIcon.svg';
import PlaylistCopyIcon from './Images/PlaylistCopyIcon.svg';
import playlistShuffleIcon from './Images/playlistShuffleIcon.svg';
import playlistPlayIcon from './Images/PlaylistPlayIcon.svg';
import playlistSongImgIconTest from './Images/PlaylistSongIconTest.svg'
import NavBar from '../NavigationBar/NavBar.jsx';
import { Link } from 'react-router-dom';


function PlaylistByCupid() {
  const likedCupidSongs = localStorage.getItem('idartist')

  console.log(likedCupidSongs)
  return (
    <>
    <header className='playlistByCupidHeader'>
       <Link to={'/Home'}><button className='playlistByCupidGoHome'><img src={playlistArrow}/></button></Link>
        <div>
            <p className='playlistByCupidSubTitle'>Generada del Cupido Musical</p>
            <h2 className='playlistByCupidTitle'>Playlist Generada</h2>
        </div>
        <button className='playlistByCupidMore'><img src={playlistMoreButton}/></button>
    </header>
    <body>
        <div className='playlistByCupidSongs'>
            <img className='playlistByCupidSongImgs1' src={playlistsongsimg}/>
            <img className='playlistByCupidSongImgs2' src={playlistsongsimg}/>
            <img className='playlistByCupidSongImgs3' src={playlistsongsimg}/>
            <img className='playlistByCupidSongImgs4' src={playlistsongsimg}/>
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
            <li>
              <div className='playlistByCupdiListSongContent'>
                <img className='playlistByCupidListSongsImg' src={playlistSongImgIconTest}/>
                <div className='playlistByCupidListSongInfo'>
                    <h4>Wish you were Here</h4>
                    <p className='playlistByCupidListsSongInfoArtist'>Neck Deep</p>
                </div>
                <button className='playlistByCupidListMoreInfoButton'><img src={playlistMoreButton}/></button>
              </div>
            </li>
            <li>
              <div className='playlistByCupdiListSongContent'>
                <img className='playlistByCupidListSongsImg' src={playlistSongImgIconTest}/>
                <div className='playlistByCupidListSongInfo'>
                    <h4>Wish you were Here</h4>
                    <p className='playlistByCupidListsSongInfoArtist'>Neck Deep</p>
                </div>
                <button className='playlistByCupidListMoreInfoButton'><img src={playlistMoreButton}/></button>
              </div>
            </li>
            <li>
              <div className='playlistByCupdiListSongContent'>
                <img className='playlistByCupidListSongsImg' src={playlistSongImgIconTest}/>
                <div className='playlistByCupidListSongInfo'>
                    <h4>Wish you were Here</h4>
                    <p className='playlistByCupidListsSongInfoArtist'>Neck Deep</p>
                </div>
                <button className='playlistByCupidListMoreInfoButton'><img src={playlistMoreButton}/></button>
              </div>
            </li>
            <li>
              <div className='playlistByCupdiListSongContent'>
                <img className='playlistByCupidListSongsImg' src={playlistSongImgIconTest}/>
                <div className='playlistByCupidListSongInfo'>
                    <h4>Wish you were Here</h4>
                    <p className='playlistByCupidListsSongInfoArtist'>Neck Deep</p>
                </div>
                <button className='playlistByCupidListMoreInfoButton'><img src={playlistMoreButton}/></button>
              </div>
            </li>
            
          </ul>
        </div>

    </body>
    <footer>
      <NavBar/>
    </footer>
    
    
    </>
  )
}

export default PlaylistByCupid