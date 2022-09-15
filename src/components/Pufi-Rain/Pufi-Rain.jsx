import rain from "../../images/rain.png";

const PufiRain = () => {
  return (
    <div className="container-rain">
      <div className="container-img">
        <button className="button-shop">SHOP</button>
      </div>
      <div className="prueba">
        {<img src={rain} className="parasol-rain" alt="parasol" />}
        <h3>PUFI RAIN</h3>
        <hr className="linea-rain" />
        <p className="prueba1">
          Descripción del producto. Este es <br />
          un texto simulado
        </p>
        <p className="parrafo-rain"> VER MAS </p>
      </div>
    </div>
  );
};

export default PufiRain;
