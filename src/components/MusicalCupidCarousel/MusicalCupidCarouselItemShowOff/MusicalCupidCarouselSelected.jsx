import React from 'react'
import './MusicalCupidCarouselSelected.css';


function MusicalCupidCarouselSelected({song}) {
  return (
    <div className='selectedSongCarouselBox'>
        <img className='selectedSongCarousel' src= {song.icon}/>
    </div>
  )
}

export default MusicalCupidCarouselSelected