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
  let navIconHome;
  if (location.pathname === '/navtest1') {
    navIconHome = homeIconActive;
  } else navIconHome = homeIcon
  // Cambiar icono search
  let navIconSearch;
  if (location.pathname === '/navtest2') {
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


  
  return (
    <div className='navMainDiv'>
      <Link to='/navtest1'>
      <div className={`navHome ${location.pathname !== '/navtest1' ? 'navInactive' : ''}`}><img src={navIconHome}></img>Inicio</div>
      </Link>
      <Link to='/navtest2'>
      <div className={`navSearch ${location.pathname !== '/navtest2' ? 'navInactive' : ''}`}><img  src={navIconSearch} ></img>Buscador</div>
      </Link>
      <Link to='/navtest3'>
      <div className={`navProfile ${location.pathname !== '/navtest3' ? 'navInactive' : ''}`}><img  src={navIconProfile} ></img>Perfil</div>
      </Link>
      <Link to='/navtest4'>
      <div className={`navFriends ${location.pathname !== '/navtest4' ? 'navInactive' : ''}`}><img src={friendsIcon} ></img>Amigos</div>
      </Link>
    </div>
  )
}

export default NavBar