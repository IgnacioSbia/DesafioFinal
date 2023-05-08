import React from 'react'
import refresh from './Images/Refresh.svg'
import notify from './Images/Notify.svg'
import './Home.css'
import musicCupid from './Images/MusicalCupid.svg'
import conextMusic from './Images/contexMusic.svg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <header className='homeHeader'>
            <div className='homeHeaderTitle'>
             <h1>Música ya</h1>
            </div>

            <div className='homeHeaderButtons'>
              <button className='homeButton1'><img src={refresh}/></button>
              <button className='homeButton2'><img src={notify}/> </button>
            </div>
        </header>

        <main className='homeMain'>
          <Link to={'MusicalCupid'}>
            <div className='homeMusicalCupid'>
              <div>
                <img className='homeImg' src={musicCupid}/>
              </div>
              <div className='homeMusicalCupidText'>
                <h2 className='homeContentTitle'>Cupido Musical</h2>
                <p style={{color: '#45464B'}}>Tus artistas favoritos nunca van a dejarte con el rozaón roto.</p>
              </div>
            </div>
          </Link>
          <Link to={'ContextMusic'}>
            <div className='homeContextMusic'>
              <div>
                <img className='homeImg' src={conextMusic}/>
              </div>
              <div className='homeMusicalCupidText'>
                <h2 className='homeContentTitle'>Música Contextual</h2>
                <p style={{color: '#45464B'}}>Creamos la playlist perfecta para cualquier situación.</p>
              </div> 
            </div>
          </Link>
        </main>
    </>
  )
}

export default Home;