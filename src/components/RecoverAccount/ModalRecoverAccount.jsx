import React from "react";
import "./ModalRecoverAccount.css";
import iconModal from "./Img/iconModal.svg";

function ModalRecoverAccount(props) {
  return (
    <div className="modal">
      <div className="modalContent">
        <div className="ModalContainerRecAccount">
          <p className="textOne">
            {" "}
            Te enviamos un mensaje a <br />
            tu e-mail con un link <br />
            verificador.
          </p>
          <br />
          <div className="iconModalRecoverAccount">
            <img src={iconModal} className="iconModalImg" />
          </div>
          <br />
          <p className="textTwo">
            {" "}
            Para recuperar tu cuenta <br />
            debes ingresar al mismo y <br />
            luego seguir las <br />
            instrucciones
          </p>
          <div className="btnContainerModal">
            <button onClick={props.onClose} className="btnModalRecoverAccount">
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalRecoverAccount;
// ver tema de email
