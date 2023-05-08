import React from 'react'
import './ConfigPage.css'

function ConfigPage() {
  return (
    <div className='configcontainer'>
        <section className='configtop'>
            <div className='configreturn'>flechita</div>
            <div className='configHeader'>Configuracion</div>
        </section>
        <section className='configmain'>
            <div className='configbutton1'>Editar Apariencia</div>
            <div className='configbutton2'>Editar Perfil</div>
        </section>
        <section className='configfooter'>
            <div className='configversion'>Version: v1.25.03</div>
            <div className='configlogout'>Cerrar Sesion</div>
        </section>
    </div>
  )
}

export default ConfigPage