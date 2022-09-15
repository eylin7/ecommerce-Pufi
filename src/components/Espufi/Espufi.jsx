import cuadricula from "../../images/cuadro-blanco.png";
import flecha from "../../images/flecha.png"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xrgdpgpv");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className="container-espufi">
    <div>
      <p className="paragraph-one">INSTAGRAM</p>
      <p className="paragraph-two">#ESPUFI</p>
      <img src={cuadricula} className="cuadricula-imagen" alt="fotos" />
    </div>
    <p className="paragraph-one">NEWSLETTER</p>
    <p className="paragraph-two">SUSCRIBITE</p>
    <p>y enterate de todas las novedades</p>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
      </label>
      <div className="espufi-text" >
      <input className="input" 
       placeholder='email adress'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="button-espufi" type="submit" disabled={state.submitting}>
      <img src={flecha} className="flecha" alt="flecha" />
      </button>
      </div>
    </form>
    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
