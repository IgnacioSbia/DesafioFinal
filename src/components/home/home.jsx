import React from 'react'
import refresh from './Images/Refresh.svg'
import notify from './Images/Notify.svg'
import './Home.css'
import musicCupid from './Images/MusicalCupid.svg'
import conextMusic from './Images/contexMusic.svg'

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
          <div className='homeMusicalCupid'>
            <div>
              <img src={musicCupid}/>
              
            </div>
            <div className='homeMusicalCupidText'>
              <h2 className='homeContentTitle'>Cupido Musical</h2>
              <p>Tus artistas favoritos nunca van a dejarte con el rozaón roto.</p>
            </div>
          </div>
          <div>
          <img src={conextMusic}/>
          </div>
        </main>
    </>
  )
}

export default Home;