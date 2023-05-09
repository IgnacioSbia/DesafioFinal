import React, { useState } from "react";
import "./Login.css";

import leftArrow from "../SignIn/Img/leftArrow.svg";
import checkbox from "../SignIn/Img/checkbox.svg";
import checkboxOk from "../SignIn/Img/checkboxOk.svg";
import { Link } from "react-router-dom";
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

      <div className="formContainer">
        <section className="formAccountText">
          {" "}
          <Link to={'/'}><img src={leftArrow} className="leftArrow" /></Link>
          <div>
            <h5>Iniciar Sesión</h5>
          </div>
        </section>{" "}
        <br />
        <div>
          <h2>
            Ingresa un nombre de<br/> usuario y contraseña.
          </h2>
        </div>

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

            Nombre de usuario o E-mail: <br />


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

        
          <br />
          <div className="formTerms"> 
          <img src={isChecked ? checkboxOk : checkbox} className="inputCheck" onClick={handleCheckboxChange} />

           He leido y acepto los <span className="orangeText">Terminos</span> y <span className="orangeText">Condiciones.</span> 
           </div>
          <br />

          <button type="submit" className="buttonLogin" disabled>

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