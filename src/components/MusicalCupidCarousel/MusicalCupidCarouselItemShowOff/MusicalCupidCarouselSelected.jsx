import React from 'react'
import './MusicalCupidCarouselSelected.css';


function MusicalCupidCarouselSelected({song}) {
  return (
    <div className='selectedSongCarouselBox'>
        <img className='selectedSongCarousel' src= {`/${song.artist_img}`}/>
    </div>
  )
}

export default MusicalCupidCarouselSelected