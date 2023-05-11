import React, { useState } from 'react';
import arrowGoHome from './Images/MusicalCupidCarouselArrow.svg';
import './MusicalCupidCarousel.css'
import MusicalCupidCarouselItemsShowOff from './MusicalCupidCarouselItemShowOff/MusicalCupidCarouselItemsShowOff';
import MusicalCupidCarouselFirstItem from './Images/MusicalCupidCarouselFirstItem.svg';
import MusicalCupidCarouselSecondItem from './Images/MusicalCupidCarouselItem2.svg';
import MusicalCupidCarouselThirdtItem from './Images/MusicalCupidCarouselItem3.svg';
import MusicalCupidCarouselHeart from './Images/MusicalCupidCarouselLikeSong.svg';
import MusicalCupidCarouselDislike from './Images/MusicalCupidCarouselDislike.svg';


function MusicalCupidCarousel() {

    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
             artist: "Neck Deep",
             icon: MusicalCupidCarouselFirstItem
        },
        {
            artist: "Olivia Rodrigo",
            icon: MusicalCupidCarouselSecondItem
       },
       {
            artist: "Arcángel",
            icon: MusicalCupidCarouselThirdtItem
       },

    ]
    const updateIndex = (newIndex) =>{
        if(newIndex < 0){
            newIndex = 0;
        }else if(newIndex >= items.length){
            newIndex = items.length - items.length;
        }

        setActiveIndex(newIndex);
    };

  return (
    <>
        <header className='MusicalCupidHeader'>
            <button className='MusicalCupidGoHome'><img src={arrowGoHome}/></button>
      
            <h2 className='MusicalCupidCarouselTitle'>Cupido Musical</h2>
           
        </header>
         <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {items.map((item) => {
          return <MusicalCupidCarouselItemsShowOff item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrowY"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined"><img src={MusicalCupidCarouselHeart}/></span>{" "}
        </button>
        
        <button
          className="button-arrowX"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined"><img src={MusicalCupidCarouselDislike}/></span>
        </button>
      </div>
    </div>
    <div className='MusicalCupidCreatePlaylist'>
        <button className='MusicalCupidCreatePlaylistButton'>Crear Playlist</button>
    </div>
    </>
  )
}

export default MusicalCupidCarousel