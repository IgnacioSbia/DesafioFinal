import React, { useState } from "react";
import "./SignIn.css";
import leftArrow from "./Img/leftArrow.svg";

function SignIn() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aca va código para enviar el correo electrónico al servidor
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(emailValue);
    let isValid = emailRegex.test(emailValue);
    setValidEmail(isValid);
  };

  return (
    <div >
      <div className="formContainerSignIn">
        <section className="formAccountTextSignIn">  
          <img src={leftArrow} className="leftArrowSignIn" />
          <div>
            <h5 className="textCreateAccountSignIn">Crear Cuenta</h5>
          </div>
        </section>
        <br />
        <div>
          <h2 className="textEmailSignIn">
            ¿Cuál es tu correo <br /> electrónico?
          </h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formSignIn">
          <label>
            <div className="titleEmailSignIn">Correo electrónico: <br /> </div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="inputBorderSignIn"
              />
          </label>
          <p className="textConfirmationSignIn">Deberás poder confirmar luego.</p>
          <br />
          <button type="submit" className="buttonSignIn" disabled={validEmail ? false : true } >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
