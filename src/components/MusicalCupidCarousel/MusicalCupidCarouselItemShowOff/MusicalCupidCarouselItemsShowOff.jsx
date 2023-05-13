import React from 'react'
import './MusicalCupidCarouselItemsShowOff.css'


function MusicalCupidCarouselItemsShowOff({item, width}) {
  return (
    <div className='carousel-item' style={{ width: width }}>
        <div></div>
        <img className='carousel-Img' src={item.icon}/>
        <div className='carousel-item-artist'>{item.artist_name}</div>
    </div>
  )
}

export default MusicalCupidCarouselItemsShowOff