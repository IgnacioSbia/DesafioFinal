import React from 'react'
import './MusicalCupidCarouselModal.css';
import iconModals from '../Images/MuscalCupidCarouselModalImg.svg'

function MusicalCupidCarouselModal(props) {
  return (
    <div className="MusicalCupidCarouselModal">
      <div className="MusicalCupidCarouselModalContent">
        <div className="ModalContainerRecAccount">
          <h2 className='MusicalCupidCarouselModalTextOne'>Cupido Musical</h2>
          <br />
          <div className="MusicalCupidCarouselModalImageSection">
            <img src={iconModals} className="MusicalCupidCarouselModalImage" />
          </div>
          <br />
          <p className="MusicalCupidCarouselModalTextTwo">
            {" "}
            Luego de al menos 2 me <br />
            gusta, confirma tu selección <br />
            y crearemos una playlist<br />
            rápida con los artistas que<br/>
            fueron un match.
          </p>
            <div className="MusicalCupidCarouselModalButtonSection">
                <button onClick={props.onClose} className="MusicalCupidCarouselModalButtonUnderstand">
                Entendido
                </button>
            </div>
            <div className='MusicalCupidCarouselModalButtonSection2'>
                <button onClick={props.onClose} className='MusicalCupidCarouselModalButtonNotAskAgain'>
                    No volver a mostrar
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MusicalCupidCarouselModal