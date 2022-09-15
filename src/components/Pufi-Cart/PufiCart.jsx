import cart from "../../images/bolsa.png"

const PufiCart= () => {
    return (
      <div className="container-cart">
        <div className="container-img-card">
        </div>
        <div className="cart">
        {<img src={cart} className="cart-icons" alt="bolsa de mercado" />}
          <h3>PUFI CART</h3>
          <hr className="linea-rain" />
          <p className="cart2">
            Descripción del producto. Este es <br />
            un texto simulado
          </p>
          <p className="parrafo-cart"> VER MAS </p>
        </div>
      </div>
    )
  };
  
  export default PufiCart;