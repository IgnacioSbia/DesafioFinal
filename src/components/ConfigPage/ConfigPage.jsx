import React from 'react'
import './ConfigPage.css'
import arrow from './Icons-Images/arrow.svg'
import { Link, useNavigate } from 'react-router-dom'


function ConfigPage() {

  const navigate = useNavigate();
  
  const handleSession = ()=>{
    localStorage.clear();
    navigate('/')
  };


  return (
    <div className='configcontainer'>
        <div className='configtopgradient'>
        </div>
        <section className='configtop'>
            <Link to='/Profile'>
            <div className='configreturn'><img src={arrow}></img> </div>
            </Link>
            <div className='configheader'>Configuracion</div>
        </section>
        <section className='configmain'>
            <div className='configbutton1'><button>Editar Apariencia</button></div>
            <div className='configbutton2'><button>Editar Perfil</button></div>
        </section>
        <section className='configfooter'>
            <div className='configversion'>Version: v1.25.03</div>
            <hr></hr>
            <div onClick={handleSession} className='configlogout'>Cerrar Sesion</div>
        </section>
    </div>
  )
}

export default ConfigPage;