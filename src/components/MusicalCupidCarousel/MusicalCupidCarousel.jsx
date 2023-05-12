import React, { useState } from 'react';
import arrowGoHome from './Images/MusicalCupidCarouselArrow.svg';
import './MusicalCupidCarousel.css'
import MusicalCupidCarouselItemsShowOff from './MusicalCupidCarouselItemShowOff/MusicalCupidCarouselItemsShowOff';
import MusicalCupidCarouselFirstItem from './Images/MusicalCupidCarouselFirstItem.svg';
import MusicalCupidCarouselSecondItem from './Images/MusicalCupidCarouselItem2.svg';
import MusicalCupidCarouselThirdtItem from './Images/MusicalCupidCarouselItem3.svg';
import MusicalCupidCarouselHeart from './Images/MusicalCupidCarouselLikeSong.svg';
import MusicalCupidCarouselDislike from './Images/MusicalCupidCarouselDislike.svg';
import MusicalCupidCarouselSelected from './MusicalCupidCarouselItemShowOff/MusicalCupidCarouselSelected';
import MusicalCupidCarousel4thItem from './Images/MusicalCupidCarousel4thItem.svg';
import MusicalCupidCarousel5thItem from './Images/MusicalCupidCarousel5thItem.svg';
import MusicalCupidCarousel6thItem from './Images/MusicalCupidCarousel6thitem.svg';
import { Link } from 'react-router-dom';
import MusicalCupidCarouselModal from './MusicalCupidCarouselModal/MusicalCupidCarouselModal';

function MusicalCupidCarousel() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [songSelected, setSongSelected] = useState([])
    const [showModal, setShowModal] = useState(false);
    

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
       {
        artist: "Shakira",
        icon: MusicalCupidCarousel4thItem
       },
       {
        artista: "Rayos Láser",
        icon: MusicalCupidCarousel5thItem
       },
       {
        artista:"Tiesto",
        icon: MusicalCupidCarousel6thItem
       }
    ]
    const updateIndex = (newIndex) =>{
        if(newIndex < 0){
            newIndex = 0;
        }else if(newIndex >= items.length){
            newIndex = items.length - items.length;
        }

        setActiveIndex(newIndex);
    };

    const selectLikedSong = ()=>{
      if(songSelected.length >= items.length){
        alert('Can not add more artist to Musical cupid')
      }else{
        setSongSelected( [...songSelected, items[activeIndex]])
        console.log(songSelected)
      }
      
    };
    
  const handleLikeOrDislike = (event) => {
    event.preventDefault();

    setShowModal(true);
  };

  return (
    <>
        <header className='MusicalCupidHeader'>
            <Link to={'/Home'}><button className='MusicalCupidGoHome'><img src={arrowGoHome}/></button></Link>
      
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
          onClick={ (event) => {
            selectLikedSong(),
            handleLikeOrDislike(event),
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined"><img src={MusicalCupidCarouselHeart}/></span>{" "}
        </button>
        
        <button
          className="button-arrowX"
          onClick={(event) => {
            handleLikeOrDislike(event),
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined"><img src={MusicalCupidCarouselDislike}/></span>
        </button>
      </div>
    </div>
    
    <p className='MusicalCupidCupidMatches'>Matches actuales: </p>
    <div className='MusicalCupidSongsLiked'>
     { songSelected.map((song)=>{
        console.log(song)
        return <MusicalCupidCarouselSelected song={song}/>
     })
     
      
     }
    {showModal && songSelected.length == 1  && <MusicalCupidCarouselModal onClose={() => setShowModal(false)}/>} 
    </div>
    <div className='MusicalCupidCreatePlaylist'>
        <Link to={'/Home/PlaylistByMusicalCupid'}><button disabled={songSelected.length >= 2 ? false : true} className='MusicalCupidCreatePlaylistButton'>Crear Playlist</button></Link>
    </div>
    
    </>
  )
}

export default MusicalCupidCarousel