import bags from "../../images/bags-icons.png";
import parasol from "../../images/parasol-icons.png";
import pufi from "../../images/sleep-icons.png";
import puff from "../../images/puff-icons.png";
import logo from "../../images/logo-pufi.png";
import line from "../../images/line.png";

const NavbarHome = () => {
  return (
    <div className="navbar-content">
      <div className="container-menu">
        <ul className="nav-menu-one">
          <li>
            {
              <a className="nav-menu-link-one" id="cuenta">
                MI CUENTA{" "}
              </a>
            }
          </li>
          <li>
            <a className="nav-menu-link-one" id="compra">MI COMPRA</a>
          </li>
        </ul>
        <ul className="nav-menu">
          <img src={logo} className="logo" alt="pufi" />
          <li className="nav-menu-item">
            {<img src={puff} className="icons" alt="puff" />}
            <a className="nav-menu-link">PUFI PUFF</a>
          </li>
          <img src={line} className="line" alt="line" />
          <li className="nav-menu-item">
            {<img src={parasol} className="icons" alt="parasol" />}
            <a className="nav-menu-link">PUFI RAIN</a>
          </li>
          <img src={line} className="line" alt="line" />
          <li className="nav-menu-item">
            {<img src={bags} className="icons" alt="market bag" />}
            <a className="nav-menu-link">PUFI CART</a>
          </li>
          <img src={line} className="line" alt="line" />
          <li className="nav-menu-item">
            {<img src={pufi} className="icons" alt="pufi" />}
            <a className="nav-menu-link">PUFI NAP</a>
          </li>
        </ul>
      </div>
      <h1 className="titulo">
        ESTÁR CÓMODO,
        <br />
        NUNCA FUE TAN FÁCIL.
      </h1>
      <button className="parrafo">SHOP</button>
    </div>
  );
};
export default NavbarHome;
