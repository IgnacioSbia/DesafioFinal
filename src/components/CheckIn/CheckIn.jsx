import React, { useState } from "react";
import "./CheckIn.css";
import leftArrow from "../SignIn/Img/leftArrow.svg";
import checkbox from "../SignIn/Img/checkbox.svg";
import checkboxOk from "../SignIn/Img/checkboxOk.svg";

function CheckIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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
              onChange={(e) => setName(e.target.value)}
              className="inputBorderCheckIn"
            />
            <div className="textUserCheckIn">
              El nombre de usuario está disponible
            </div>
          </label>
          <label>
            <div className="titlePasswCheckIn">Contraseña: <br /> </div>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputBorderCheckIn"
            />
          </label>
          <p className="textPasswCheckIn">
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
        
          <button type="submit" className="buttonCheckIn" disabled>
            Continuar
          </button> </div>
        </div>
      </form>
    </div>
  );
}

export default CheckIn;
