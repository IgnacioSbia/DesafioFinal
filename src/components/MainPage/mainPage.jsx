import Audn from "./img/audnSmall.svg";
import "./mainPage.css";
import iconApple from "./img/iconApple.svg";
import iconGoogle from "./img/iconGoogle.svg";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <main className="mainPage">
      <div className="loginBackground"></div>
      <div className="logoName">
        <img className="logoAudn" src={Audn} alt="audn" />
        <h2 className="logoMusic">Música a medida.</h2>
      </div>
      <section className="btnSections">
        <div>
          <Link to="/SignIn">
            <button className="btnRegister">Registrarse Gratis</button>
          </Link>
        </div>
        <div>
          <button className="btnOthers">
            <img src={iconGoogle} alt="iconGoogle" />
            Continuar con Google
          </button>
        </div>
        <div>
          <button className="btnOthers">
            <img src={iconApple} alt="iconAppple" />
            Continuar con Apple
          </button>
        </div>
        <div className="divLogin">
          <Link to="/Login">
            <button className="btnLogin">Iniciar Sesión</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default MainPage;
