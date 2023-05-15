import React from 'react'
import './NavBar.css'
import homeIcon from './Icons-Images/homeinactive.svg'
import homeIconActive from './Icons-Images/homeActive.svg'
import friendsIcon from './Icons-Images/friendsInactive.svg'
import friendsIconActive from './Icons-Images/friendsActive.svg'
import profileIcon from './Icons-Images/profileInactive.svg'
import profileIconActive from './Icons-Images/profileActive.svg'
import searchIcon from './Icons-Images/searchInactive.svg'
import searchIconActive from './Icons-Images/searchActive.svg'
import { Link, useLocation } from 'react-router-dom'


function NavBar() {
  const location = useLocation();

  //Cambiar icono home dependiendo de la URL
    //Hay que cambiar las rutas (/navtestX) a su correcta pagina
  // Cambiar icono home
  let navIconHome;
  if (location.pathname === '/Home') {
    navIconHome = homeIconActive;
  } else navIconHome = homeIcon
  // Cambiar icono search
  let navIconSearch;
  if (location.pathname === '/search') {
    navIconSearch = searchIconActive;
  } else navIconSearch = searchIcon
  //Cambiar icono profile
  let navIconProfile;
  if (location.pathname === '/navtest3') {
    navIconProfile = profileIconActive;
  } else navIconProfile = profileIcon
  //Cambiar icono friends
  let navIconFriends;
  if (location.pathname === '/navtest4') {
    navIconFriends = friendsIconActive;
  } else navIconFriends = friendsIcon


  //Hay que cambiar las rutas (/navtestX) a su correcta pagina
  return (
    <div className='navMainDiv'>
      <Link to='/Home'>
      <div className={`navHome ${location.pathname !== '/Home' ? 'navInactive' : ''}`}><img src={navIconHome}></img>Inicio</div>
      </Link>
      <Link to='/search'>
      <div className={`navSearch ${location.pathname !== '/search' ? 'navInactive' : ''}`}><img  src={navIconSearch} ></img>Buscador</div>
      </Link>
      <Link to='/Profile'>
      <div className={`navProfile ${location.pathname !== '/Profile' ? 'navInactive' : ''}`}><img  src={navIconProfile} ></img>Perfil</div>
      </Link>
      <Link to='/navvtest4'>
      <div className={`navFriends ${location.pathname !== '/navtest4' ? 'navInactive' : ''}`}><img src={friendsIcon} ></img>Amigos</div>
      </Link>
    </div>
  )
}

export default NavBar;