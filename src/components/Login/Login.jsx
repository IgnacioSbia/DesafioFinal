import React, { useState } from "react";
import "./Login.css";
import leftArrow from "./../SignIn/Img/leftArrow.svg";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Correo electrónico: ${email}`);
    // Aca va código para enviar el correo electrónico al servidor
  };

  return (
    <div>
      <div className="formContainerLogin">
        <section className="formTextLogin">
          <img src={leftArrow} className="leftArrowLogin" />
          <h5 className="textSesionLogin">Iniciar Sesión</h5>
        </section>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formLogin">
          <label>
            <h3 className="textUserEmailLogin">Nombre de Usuario o E-mail:</h3>
            <br />
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="inputBorder"
            />
          </label>
          <label>
            <br />
            <br />
            <br />
            <h3 className="textUserEmailLogin">Contraseña: </h3> <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputBorder"
            />
          </label>
          <button type="submit" className="buttonLogin">
            Iniciar Sesión
          </button>
          <div className="textRecPasswordLogin">¿Olvidaste tu contraseña? </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
