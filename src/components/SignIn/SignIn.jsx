import React, { useState } from "react";
import "./SignIn.css";
import leftArrow from "./Img/leftArrow.svg";

function SignIn() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Correo electrónico: ${email}`);
    // Aca va código para enviar el correo electrónico al servidor
  };

  return (
    <div >
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
            ¿Cuál es tu correo <br /> electrónico?
          </h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formSignIn">
          <label>
            <br />
            Correo electrónico: <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inputGrayBorder"
            />
          </label>
          <p>Deberás poder confirmar luego.</p>
          <br />
          <button type="submit" className="buttonSignIn" disabled>
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
