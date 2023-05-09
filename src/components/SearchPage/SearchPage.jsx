import React, { useState } from 'react'
import flecha from './Icons-Images/flecha.svg'
import x from './Icons-Images/x.svg'
import lupa from './Icons-Images/lupa.svg'
import './SearchPage.css'
import NavBar from '../NavigationBar/NavBar.jsx';

function SearchPage() {

  const [searchValue, setSearchValue] = useState('')
  const searchInputSelector = document.getElementById('searchbar')

  const onChangeSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value)
  }
  const onClickReset = () => {
    setSearchValue('');
    searchInputSelector.value = '';
    return
  }
  
  
  return (
    <div className='searchcontainer'>
        <div className='searchtopgradient'></div>
        <div className='searchheader'>
           {searchValue === '' && <h1>Buscador</h1>}
        </div>

        <div className='searchbardiv'>
        {searchValue === '' && <img className='searchlupa' src={lupa}></img>}
        {searchValue !== '' && <img className='searchflecha' src={flecha}></img>}
            <input className='searchinput'
             type="text" 
             name='searchname' 
             placeholder='¿Qué deseas escuchar?'
             id='searchbar'
             onChange={onChangeSearch}
             ></input>
            { searchValue !== '' && <button 
            type="reset" 
            className='searchclear'
            onClick={onClickReset}><img src={x}></img></button>}
        </div>
        { searchValue === '' && <NavBar></NavBar>}
    </div>
  )
}

export default SearchPage