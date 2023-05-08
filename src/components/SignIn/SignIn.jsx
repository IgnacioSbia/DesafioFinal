import React, { useState } from 'react';
import './SignIn.css';
import leftArrow from './Img/leftArrow.svg'


function SignIn() {
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Correo electrónico: ${email}`);
    // Aca va código para enviar el correo electrónico al servidor
  };

  return (  
    <div className='formContainer'>
    <form onSubmit={handleSubmit}  >
      <div className='formSignIn'>
     <section className='formAccountText' > <img src={leftArrow} className='leftArrow'/>
        <div><h5>Crear cuenta</h5></div>
     </section>
        <div><h2>¿Cuál es tu correo <br/> electrónico?</h2></div>
      <label>
        Correo electrónico: <br/>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className='inputGrayBorder' />
      </label>
      <br/>
      <button type="submit" className='buttonSignIn'>Continuar</button>
      </div>
    </form>
    </div>
  );
}

export default SignIn;
