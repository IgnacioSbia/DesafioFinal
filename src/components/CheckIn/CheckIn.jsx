import React, { useState } from "react";
import { useRef, useEffect } from 'react';
import "./CheckIn.css";
import leftArrow from "../SignIn/Img/leftArrow.svg";
import checkbox from "../SignIn/Img/checkbox.svg";
import checkboxOk from "../SignIn/Img/checkboxOk.svg";
import { Link } from "react-router-dom";

function CheckIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const passwordMessageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nombre de usuario: ${name}`);
    console.log(`Contraseña: ${password}`);
    console.log(`Checkbox seleccionado: ${isChecked}`);
    // Aca va código para enviar los datos al servidor
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(!isChecked);
  };

  const handleNameChange = (event) => {
    const nameValue = event.target.value;
    setName(nameValue);
    // Aca va la validacion de la base de datos de si el nombre de usuario esta disponible
    let isValid = nameValue.length > 3;
    setValidName(isValid);

    let classList = event.target.classList;
    if (isValid) {
      classList.add("validColor");
    } else {
      classList.remove("validColor");
    }
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    // Aca va la validacion de la base de datos de si el nombre de usuario esta disponible
    let isValid = passwordValue.length >= 8;
    setValidPassword(isValid);

    let classList = event.target.classList;
    console.log(isValid);
    let messageClassList = passwordMessageRef.current.classList;
    if (isValid) {
      classList.add("validColor");
      classList.remove('errorColor');
      messageClassList.add('validColorText');
      messageClassList.remove('errorColorText');
    } else {
      classList.add("errorColor");
      classList.remove('validColor');
      messageClassList.add('errorColorText');
      messageClassList.remove('validColorText');
    }
  };

  return (
    <div>
      <div className="formContainerCheckIn">
        <section className="formAccountTextCheckIn">
          <img src={leftArrow} className="leftArrowCheckIn" />
          <div>
            <h5>Crear cuenta</h5>
          </div>
        </section>
        <br />
        <div>
          <h2 className="textTitleCheckIn">
            Ingresa un nombre de
            <br /> usuario y contraseña.
          </h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formTextNameCheckIn">
          <label>
            <br />
            Nombre de usuario: <br />
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="inputBorderCheckIn"
            />
            <div className="textUserCheckIn">
              <span hidden={validName ? false : true}>
                {" "}
                El nombre de usuario está disponible{" "}
              </span>
            </div>
          </label>
          <label>
            <div className="titlePasswCheckIn">
              Contraseña: <br />{" "}
            </div>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="inputBorderCheckIn"
            />
          </label>
          <p className="textPasswCheckIn"  ref={passwordMessageRef}>
            Deberá contener al menos 8 caracteres.
          </p>
          <br />
          <div className="buttonSubmitCheckIn">
            <div className="formTermsCheckIn">
              <img
                src={isChecked ? checkboxOk : checkbox}
                className="inputCheckIn"
                onClick={handleCheckboxChange}
              />
              He leido y acepto los{" "}
              <span className="orangeTextCheckIn">Terminos</span> y{" "}
              <span className="orangeTextCheckIn">Condiciones.</span>
            </div>
            <br />
            <Link to="/Login">
            <button type="submit" className="buttonCheckIn" disabled={validPassword && validName && isChecked ? false : true}>
              Continuar
            </button>{" "} </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckIn;
