import React, { useState } from "react";
import "./Login.css";
import leftArrow from "../SignIn/Img/leftArrow.svg";
import checkbox from "../SignIn/Img/checkbox.svg";
import checkboxOk from "../SignIn/Img/checkboxOk.svg";



function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")
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
      <div className="formContainer">
        <section className="formAccountText">
          {" "}
          <img src={leftArrow} className="leftArrow" />
          <div>
            <h5>Crear cuenta</h5>
          </div>
        </section>{" "}
        <br />
        <div>
          <h2>
            Ingresa un nombre de<br/> usuario y contraseña.
          </h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formSignIn">
          <label>
            <br />
            Nombre de usuario: <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="inputBorder"
            />
          </label>
          <label>
            <br />
            Contraseña: <br />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputBorder"
            />
          </label>
          <p>Deberá contener al menos 8 caracteres.</p>
          <br />
          <div className="formTerms"> 
          <img src={isChecked ? checkboxOk : checkbox} className="inputCheck" onClick={handleCheckboxChange} />

           He leido y acepto los <span className="orangeText">Terminos</span> y <span className="orangeText">Condiciones.</span> 
           </div>
          <br />

          <button type="submit" className="buttonLogin" disabled>
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
