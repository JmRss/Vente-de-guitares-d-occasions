import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.png";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <header>
      <h1>
        <Link to="/">
          <img src={logo} alt="logo du site" className="logo" />
        </Link>
        Guitares d'occasions
      </h1>

      <nav className={`onglet ${showLinks ? "show-nav" : "hide-nav"}`}>
        <Link to="/" className="bestsell">
          <h3>Accueil</h3>
        </Link>
        <Link to="/occasions" className="list">
          <h3>Nos Occasions</h3>
        </Link>
        <Link to="/basket" className="cart">
          <h3>
            <img src={cart} alt="icone panier" className="icone-basket" />
            Panier
          </h3>
        </Link>
        <button className="navbar__burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>
    </header>
  );
}
