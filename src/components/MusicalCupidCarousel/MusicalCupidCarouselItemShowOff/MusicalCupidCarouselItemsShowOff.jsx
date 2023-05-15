import React from "react";
import "./MusicalCupidCarouselItemsShowOff.css";

function MusicalCupidCarouselItemsShowOff({ item, width }) {
  return (
    <div className='carousel-item' style={{ width: width }}>
        <div></div>
        <img className='carousel-Img' src={`/${item.artist_img}`}/>
        <div className='carousel-item-artist'>{item.artist_name}</div>
    </div>
  );
}

export default MusicalCupidCarouselItemsShowOff;
