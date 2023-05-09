import React, { useState } from "react";
import "./RecoverAccount.css";
import leftArrow from "./../SignIn/Img/leftArrow.svg";

function RecoverAccount() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Correo electrónico: ${email}`);
    // Aca va código para enviar el correo electrónico al servidor
  };

  return (
    <div>
      <div className="formContainerRecAccount">
        <section className="formTextAccount">
          <img src={leftArrow} className="leftArrowRecAccount" />
          <h5 className="TitleRecAccount">Recuperar Cuenta</h5>
        </section>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formRecAccount">
          <label>
            <h3 className="textUserEmailRecAccount">
              Nombre de Usuario o E-mail:
            </h3>
            <br />
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="inputBorderRecAccount"
            />
          </label>
          <p className="textRecAccount">
            Deberás poder ingresar al e-mail de la cuenta <br /> para poder
            recuperarla.
          </p>
          <div>
            <button type="submit" className="buttonRecAccount">
              Continuar
            </button>{" "}
          </div>
        </div>
      </form>
    </div>
  );
}

export default RecoverAccount;
