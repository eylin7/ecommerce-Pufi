import pufi from "../../images/logo-negro-pufi.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import qr from "../../images/codigo-qr.png";
import proteger from "../../images/proteger.png";
export default function Footer() {
  return (
    <div>
      <hr id="linea-main-one" />
      <footer id="footer">
        <div id="pufi">
          <img src={pufi} className="logo-pufi-footer" alt="logo" />
        </div>
        <div className="grupo-pufis">
          <p>PUFI RAIN</p>
          <p>PUFI PUFF</p>
          <p>PUFI CART</p>
          <p>PUFI NAP</p>
        </div>
        <div className="contactos">
          <p>CONTACTO</p>
          <p>AYUDA</p>
          <p>CÓMO COMPRAR</p>
          <p>TÉRMINOS & CONDICIONES</p>
        </div>
        <div className="compra-pufis">
          <p>COMPRA 100% SEGURA</p>
          <img src={proteger} className="logo-redes" alt="logo" />
          <img src={qr} className="logo-redes" alt="logo" />
        </div>
        <div className="seguinos-pufis">
          <p className="redes">SEGUINOS EN</p>
          <img src={facebook} className="logo-redes" alt="logo" />
          <img src={twitter} className="logo-redes" alt="logo" />
          <img src={instagram} className="logo-redes" alt="logo" />
        </div>
      </footer>
      <hr id="linea-main" />
    </div>
  );
}
