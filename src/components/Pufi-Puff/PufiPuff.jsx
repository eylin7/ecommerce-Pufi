// import puff from "../../images/silla-puff.jpeg";
import puffIcons from "../../images/puff-red.png";

const PufiPuff = () => {
    return (
      <div className="container-principal">
      {" "}
      <div className="cluster-puff">
        <img src={puffIcons} className="puff-icons" alt="puff" /> <h3>PUFI PUFF</h3>
        <hr className="linea-puff" />
        <p className="parrafo-puff">
          Descripción del producto. Este es <br /> un texto simulado
        </p>
        <p className="parrafo-puff"> VER MAS</p>
      </div>
      <div className="puff-image">
      {/* <button className="button-" >SHOP</button> */}
        {" "}
        {/* <img src={puff} className="puff-silla" alt="puff" /> */}
      </div>
    </div>
  );
  };
  
  export default PufiPuff;