import React from 'react'
import './PlaylistByUser.css'
import pfp from './Icons-Images/profilepic.svg'
import flechita from './Icons-Images/flechita.svg'
import puntos from './Icons-Images/puntos.svg'
import amigos from './Icons-Images/amigos.svg'
import NavBar from  '../NavigationBar/NavBar'
import { Link } from 'react-router-dom'
//Seguro que luego hay que cambiar todo el texto por texto dinamico 
// (por ejemplo, que el titulo de la playlist sea el mismo que le dieron en crear playlist)

function PlaylistByUser() {
  return (
    <div className='pbucontainer'>
        <div className='pbutopgradient'>
        </div>

        <div className='pbuheader'>
            <Link to='/profile'>
            <img src={flechita}></img>
            </Link>
            <h2>Test-Veranito </h2>
            <img className='pbudots' src={puntos}></img>
        </div>

        <div className='pbucreatedby'>
            <section className='pbucreatedtop'>
                <p>Creada por:</p>
                <img src={amigos}></img>
            </section>

            <section className='pbuinfouser'>
            <img className='pbuprofilepic' src={pfp}></img>
            <div className='pbuuser'>
                <div className='pbuname'>mara_pg</div>
                <div className='pbudate'>29/03/23 - 12:12</div>
            </div>
            </section>
        </div>
        <hr></hr>
        <div className='pbuaddsongs'>

            <p className='pbutext'>¿Que espéras?</p>
            <p className='pbutext'>¡Hagamos crecer tu playlist!</p>
            <div className='pbuadddiv'>
            <Link to={'/profile/playlist/addsongs'}><button className='pbuadd'>Añadir Canciones</button></Link>
            </div>
        </div>
        <NavBar></NavBar>
    </div>
  )
}

export default PlaylistByUser