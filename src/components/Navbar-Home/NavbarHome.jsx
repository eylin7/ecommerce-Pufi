import bags from "../../images/bags-icons.png";
import parasol from "../../images/parasol-icons.png";
import pufi from "../../images/sleep-icons.png";
import puff from "../../images/puff-icons.png";
import logo from "../../images/logo-pufi.png";

const NavbarHome = () => {
  return (
    <div className="navbar-content">
      <div className="container-menu">
        <ul className="nav-menu-one">
          <li className="menu">MI CUENTA {""}</li>
          <li className="menu">
            <a>MI COMPRA</a>
          </li>
        </ul>
        <ul className="nav-menu">
          <img src={logo} className="logo" alt="pufi" />
          <li className="nav-menu-item">
            <img src={puff} className="icons" alt="puff" />
            <a className="nav-menu-link">PUFI PUFF</a>
          </li>
          <li className="nav-menu-item">
            {<img src={parasol} className="icons" alt="parasol" />}
            <a className="nav-menu-link">PUFI RAIN</a>
          </li>
          <li className="nav-menu-item">
            <img src={bags} className="icons" alt="market bag" />
            <a className="nav-menu-link">PUFI CART</a>
          </li>
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
      <p className="parrafo">SHOP</p>
    </div>
  );
};
export default NavbarHome;
