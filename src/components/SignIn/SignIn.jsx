import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Correo electrónico: ${email}`);
    // Aca va código para enviar el correo electrónico al servidor
  };

  return (  
    <form onSubmit={handleSubmit}>
        <div><h5>Crear cuenta</h5></div>
        <div><h2>¿Cuál es tu correo <br/> electrónico?</h2></div>
      <label>
        Correo electrónico: <br/>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <br/>
      <button type="submit">Continuar</button>
    </form>
  );
}

export default SignIn;
