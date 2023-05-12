import React, { useState } from 'react'
import playlistMoreButton from './Images/PlaylistMoreButton.svg';
import playlistArrow from './Images/PlaylistgoBack.svg';
import './AddSongToPlaylist.css'
import playlistLens from './Images/playlistLens.svg'
import playlistX from './Images/PlaylistX.svg'
import playlistSongIcon from './Images/PlaylistIconsong.svg';
import microphone from './Images/PlaylistSearchMicrophone.svg'
import addIcon from './Images/playlistaddSong.svg';
import plusaddIcon from './Images/playlistaddsongCross.svg';



function AddSongToPlaylist() {


  const [buttonCheck, setButtonCheck] = useState(false)

  
  return (
    <div className='AddSongToPlaylist'>
        <header className='AddSongToPlaylistHeader'>
          <button className='AddSongToPlaylistGoHome'><img src={playlistArrow}/></button>
            <div>
                <p className='AddSongToPlaylistSubTitle'>Añadir canciones:</p>
                <h3 className='AddSongToPlaylistTitle'>Veranito</h3>
            </div>
          <button className='AddSongToPlaylistMore'><img src={playlistMoreButton}/></button>
         </header>
        <body>
          
          <div className='AddSongToPlaylistSearchBar'>
            <img className='AddSongToPlaylistLens' src={playlistLens}/>
            <input className='AddSongToPlaylistSearch'
             type="text" 
             name='namesearch' 
             placeholder='Buscar'
             id='AddSongToPlaylistSearch'
             ></input>
             <img className='AddsongToPlaylistMicrophone' src={microphone}/>
          </div>
          <div className='AddSongsToPlaylistFilter'>
            <ul className='AddSongToPlaylistFilterButtonsList'>
              <li className='AddSongToPlaylistFilterButtonItem'>
               <button className='AddSongsToPlaylistFilterButtons'>Sugerencias</button>
              </li>
              <li className='AddSongToPlaylistFilterButtonItem'>
                <button className='AddSongsToPlaylistFilterButtons'>Recientes</button>
              </li>
              <li className='AddSongToPlaylistFilterButtonItem'>
                <button className='AddSongsToPlaylistFilterButtons'>Me gusta</button>
              </li>
              <li className='AddSongToPlaylistFilterButtonItem'>
                <button className='AddSongsToPlaylistFilterButtons'>Rock</button>
              </li>
              <li className='AddSongToPlaylistFilterButtonItem'>
                <button className='AddSongsToPlaylistFilterButtons'>Caption</button>
              </li>
            </ul>
          </div>
          <div className='AddSongToPlaylistListofSongs'>
            <ul className='AddSongToPlaylistplaylist'>
            <li>
              <div className='AddSongToPlaylistSonglistItem'>
                <img className='AddSongToPlaylistSongListImg' src={playlistSongIcon}/>
                <div className='AddSongToPlaylistInfo'>
                    <h4>Wish you were Here</h4>
                    <p className=''>Neck Deep</p>
                </div>
                <button className='AddSongToPlaylistMore AddSongToPlaylistMoreSongs'><img src={addIcon}/> <img className='AddSongToPlaylistAddIcon' src={plusaddIcon}/></button>
              </div>
            </li>
            <li>
              <div className='AddSongToPlaylistSonglistItem'>
                <img className='AddSongToPlaylistSongListImg' src={playlistSongIcon}/>
                <div className='AddSongToPlaylistInfo'>
                    <h4>Wish you were Here</h4>
                    <p className=''>Neck Deep</p>
                </div>
                <button className='AddSongToPlaylistMore AddSongToPlaylistMoreSongs'><img src={addIcon}/> <img className='AddSongToPlaylistAddIcon' src={plusaddIcon}/></button>
              </div>
            </li>
            <li>
              <div className='AddSongToPlaylistSonglistItem'>
                <img className='AddSongToPlaylistSongListImg' src={playlistSongIcon}/>
                <div className='AddSongToPlaylistInfo'>
                    <h4>Wish you were Here</h4>
                    <p className=''>Neck Deep</p>
                </div>
                <button className='AddSongToPlaylistMore AddSongToPlaylistMoreSongs'><img src={addIcon}/> <img className='AddSongToPlaylistAddIcon' src={plusaddIcon}/></button>
              </div>
            </li>
            <li>
              <div className='AddSongToPlaylistSonglistItem'>
                <img className='AddSongToPlaylistSongListImg' src={playlistSongIcon}/>
                <div className='AddSongToPlaylistInfo'>
                    <h4>Wish you were Here</h4>
                    <p className=''>Neck Deep</p>
                </div>
                <button className='AddSongToPlaylistMore AddSongToPlaylistMoreSongs'><img src={addIcon}/> <img className='AddSongToPlaylistAddIcon' src={plusaddIcon}/></button>
              </div>
            </li>
            <li>
              <div className='AddSongToPlaylistSonglistItem'>
                <img className='AddSongToPlaylistSongListImg' src={playlistSongIcon}/>
                <div className='AddSongToPlaylistInfo'>
                    <h4>Wish you were Here</h4>
                    <p className=''>Neck Deep</p>
                </div>
                <button className='AddSongToPlaylistMore AddSongToPlaylistMoreSongs'><img src={addIcon}/> <img className='AddSongToPlaylistAddIcon' src={plusaddIcon}/></button>
              </div>
            </li>
            <li>
              <div className='AddSongToPlaylistSonglistItem'>
                <img className='AddSongToPlaylistSongListImg' src={playlistSongIcon}/>
                <div className='AddSongToPlaylistInfo'>
                    <h4>Wish you were Here</h4>
                    <p className=''>Neck Deep</p>
                </div>
                <button className='AddSongToPlaylistMore AddSongToPlaylistMoreSongs'><img src={addIcon}/> <img className='AddSongToPlaylistAddIcon' src={plusaddIcon}/></button>
              </div>
            </li><li>
              <div className='AddSongToPlaylistSonglistItem'>
                <img className='AddSongToPlaylistSongListImg' src={playlistSongIcon}/>
                <div className='AddSongToPlaylistInfo'>
                    <h4>Wish you were Here</h4>
                    <p className=''>Neck Deep</p>
                </div>
                <button className='AddSongToPlaylistMore AddSongToPlaylistMoreSongs'><img src={addIcon}/> <img className='AddSongToPlaylistAddIcon' src={plusaddIcon}/></button>
              </div>
            </li>
            <li>
              <div className='AddSongToPlaylistSonglistItem'>
                <img className='AddSongToPlaylistSongListImg' src={playlistSongIcon}/>
                <div className='AddSongToPlaylistInfo'>
                    <h4>Wish you were Here</h4>
                    <p className=''>Neck Deep</p>
                </div>
                <button className='AddSongToPlaylistMore AddSongToPlaylistMoreSongs'><img src={addIcon}/> <img className='AddSongToPlaylistAddIcon' src={plusaddIcon}/></button>
              </div>
            </li>
            <li>
              <div className='AddSongToPlaylistSonglistItem'>
                <img className='AddSongToPlaylistSongListImg' src={playlistSongIcon}/>
                <div className='AddSongToPlaylistInfo'>
                    <h4>Wish you were Here</h4>
                    <p className=''>Neck Deep</p>
                </div>
                <button className='AddSongToPlaylistMore AddSongToPlaylistMoreSongs'><img src={addIcon}/> <img className='AddSongToPlaylistAddIcon' src={plusaddIcon}/></button>
              </div>
            </li>
            <li>
              <div className='AddSongToPlaylistSonglistItem'>
                <img className='AddSongToPlaylistSongListImg' src={playlistSongIcon}/>
                <div className='AddSongToPlaylistInfo'>
                    <h4>Wish you were Here</h4>
                    <p className=''>Neck Deep</p>
                </div>
                <button className='AddSongToPlaylistMore AddSongToPlaylistMoreSongs'><img src={addIcon}/> <img className='AddSongToPlaylistAddIcon' src={plusaddIcon}/></button>
              </div>
            </li>

            </ul>
          </div>

        </body>
    
    </div>
  )
}

export default AddSongToPlaylist