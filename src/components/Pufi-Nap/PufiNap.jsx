import nap from "../../images/almohada-de-cuello (1).png"

const PufiNap = () => {
    return (
      <div className="container-nap">
      {" "}
      <div className="cluster-nap">
        <img src={nap} className="nap-icons" alt="nap" /> <h3>PUFI NAP</h3>
        <hr className="linea-puff" />
        <p className="parrafo-puff">
          Descripción del producto. Este es <br /> un texto simulado
        </p>
        <p className="parrafo-nap"> VER MAS</p>
      </div>
      <div className="nap-image">
      </div>
    </div>
  );
  };
  
  export default PufiNap;