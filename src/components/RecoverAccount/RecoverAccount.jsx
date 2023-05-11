import React, { useState } from "react";
import "./RecoverAccount.css";
import leftArrow from "./../SignIn/Img/leftArrow.svg";
import { Link } from "react-router-dom";
import ModalRecoverAccount from "./ModalRecoverAccount";

function RecoverAccount() {
  const [userName, setUserName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aca va código para enviar el correo electrónico al servidor
    setShowModal(true);
  };

  return (
    <div>
      <div className="formContainerRecAccount">
        <section className="formTextAccount">
          <Link to={"/"}>
            <img src={leftArrow} className="leftArrowRecAccount" />
          </Link>
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
            </button>
          </div>
        </div>
      </form>
      {showModal && <ModalRecoverAccount userName={userName} onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default RecoverAccount;
