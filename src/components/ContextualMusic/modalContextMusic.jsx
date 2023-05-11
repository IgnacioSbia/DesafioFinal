import React from "react";
import "./ModalContextMusic.css";
import iconQuestion from "./img/questionIcon.svg";

function ModalRecoverAccount(props) {
  return (
    <div className="modal">
      <div className="modalContent">
        <div className="ModalContext">
          <h2>Música Contextual</h2>
          <div className="iconGradient">
            <img src={iconQuestion} className="iconModalImg" />
          </div>
          <br />
          <h2 className="textModal">
            Llena cuantos campos <br />
            quieras y creamos una <br />
            playlist en base a tus <br />
            respuestas
          </h2>
          <div className="divBtnModal">
            <button onClick={props.onClose} className="btnModalContext">
              Entendido
            </button>
            <button onClick={props.onClose} className="btnSecondModal">
              No volver a mostrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalRecoverAccount;
