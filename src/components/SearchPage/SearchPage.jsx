import React, { useState, useEffect } from 'react'
import flecha from './Icons-Images/flecha.svg'
import x from './Icons-Images/x.svg'
import lupa from './Icons-Images/lupa.svg'
import placeholder from './Icons-Images/placeholder.svg'
import './SearchPage.css'
import NavBar from '../NavigationBar/NavBar.jsx';

function SearchPage() {

  const [searchValue, setSearchValue] = useState('')
  const [songData, setSongData] = useState([])
  const [filteredSongData, setFilteredSongData] = useState(songData)
  const searchInputSelector = document.getElementById('searchbar')

  const onChangeSearch = (event) => {
      const value = event.target.value;
    setSearchValue(value)
    let newfilteredSongData = [...songData]
    newfilteredSongData = newfilteredSongData.filter((item) => {
      return item.song_name.toLowerCase().indexOf(value.toLowerCase()) !== -1;

  })
  setFilteredSongData(newfilteredSongData)
  }
  const onClickReset = () => {
    setSearchValue('');
    searchInputSelector.value = '';
    return
  }

  //conseguir info de la API

  
  useEffect(() => {
    const cancionesGet = async () => {
      var requestOptions = {
        method: "GET"
      };
      try {
        const response = await fetch(
          "http://localhost:8000/api/songartist",
          requestOptions
        );
        if (response.ok) {
          const respuesta = await response.json();
          setSongData(respuesta.SongsArtists)
        }
      } catch (error) {
        alert(error.message);
      }
    };
    cancionesGet();
  }, []);
  //
  
  return (
    <div className='searchcontainer'>
        <div className='searchtopgradient'></div>
        <div className='searchheader'>
           {searchValue === '' && <h1>Buscador</h1>}
        </div>

        <div className='searchbardiv'>
        {searchValue === '' && <img className='searchlupa' src={lupa}></img>}
        {searchValue !== '' && <img className='searchflecha' src={flecha}></img>}
            <input className='searchinput'
             type="text" 
             name='searchname' 
             placeholder='¿Qué deseas escuchar?'
             id='searchbar'
             onChange={onChangeSearch}
             ></input>
            { searchValue !== '' && <button 
            type="reset" 
            className='searchclear'
            onClick={onClickReset}><img src={x}></img></button>}
        </div>
        { searchValue !== '' }
        { searchValue === '' && <NavBar></NavBar>}

        { searchValue !== '' && filteredSongData.map((item) => (
          <div className='searchresultdiv' key={item.id_song}>
            <img src={placeholder} className='searchresultpicture'></img>
            <div className='searchresulttext'>
            <p className='searchtextmain'>{item.song_name}</p>
            <p className='searchtextsub'>Cancion | {item.artist_name}</p>
            </div>
          </div>
        ))}
        
    </div>
  )
}

export default SearchPage