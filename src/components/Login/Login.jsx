import React, { useState } from "react";
import "./Login.css";
import leftArrow from "../SignIn/Img/leftArrow.svg";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [validDataName, setValidDataName] = useState(false);
  const [validDataPassword, setValidDataPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aca va código para enviar el correo electrónico al servidor
    const user = { name: userName, password: password };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(user),
      redirect: "follow",
    };

    fetch("http://localhost:8000/api/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {if(result.token){
        localStorage.setItem("token", result.token),
          localStorage.setItem("iduser", result.id_user);
           navigate("/Home")
      }else{
        alert('Contraseña o Nombre Incorrecto')
      }})

      .catch((error) => console.log("error", error));
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(!isChecked);
  };

  const handleDataNameChange = (event) => {
    const dataNameValue = event.target.value;
    setUserName(dataNameValue);
    // Aca va la validacion de la base de datos de si el nombre de usuario esta disponible
    let isValid = dataNameValue.length > 3;
    setValidDataName(isValid);
  };

  const handleDataPasswordChange = (event) => {
    const dataPasswordValue = event.target.value;
    setPassword(dataPasswordValue);
    // Aca va la validacion de la base de datos de si el nombre de usuario esta disponible
    let isValid = dataPasswordValue.length >= 8;
    setValidDataPassword(isValid);
  };

  const handleForgotPasswordClick = () => {
    //Aca va el codigo para enviar al a pagina de recuperacion de contraseña
    console.log("entro");
  };

  return (
    <div>
      <div className="formContainerLogin">
        <section className="formTextLogin">
          <Link to={"/"}>
            {" "}
            <img src={leftArrow} className="leftArrowLogin" />
          </Link>
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
              onChange={handleDataNameChange}
              className="inputBorderLogin"
            />
          </label>
          <label>
            <br />
            <br />
            <br />
            <h3 className="textUserEmailLogin">Contraseña: </h3> <br />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handleDataPasswordChange}
              className="inputBorderLogin"
            />
          </label>

          <button
            type="submit"
            className="buttonLogin"
            disabled={validDataPassword && validDataName ? false : true}
          >
            Iniciar Sesión
          </button>

          <Link to="/RecoverAccount">
            <div
              className="textRecPasswordLogin"
              onClick={handleForgotPasswordClick}
            >
              ¿Olvidaste tu contraseña?{" "}
            </div>{" "}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
//Falta ver tema icono input de mostrar/ocultar, ese es el codigo, pero no consegui posicionarlo

/* <label>
<input
  type="checkbox"
  checked={showPassword}
  onChange={toggleShowPassword}
/>
</label> */
