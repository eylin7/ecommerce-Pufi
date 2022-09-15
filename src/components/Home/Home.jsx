import "./Home.css";
import  NavbarHome from "../Navbar-Home/NavbarHome";
import Espufi from "../Espufi/Espufi"
import PufiRain from "../Pufi-Rain/Pufi-Rain";
import PufiPuff from "../Pufi-Puff/PufiPuff"
import PufiCart from "../Pufi-Cart/PufiCart"
import PufiNap from "../Pufi-Nap/PufiNap"
import Footer from "../Pufi-Footer/PufiFooter"


export const Home = () => {
    return (
      <div className="home" >
        <NavbarHome/>
        <PufiRain/>
        <PufiPuff/>
        <PufiCart/> 
        <PufiNap/>
        <Espufi/>
        <Footer/>
      </div>
    );
  };
  
  export default Home;