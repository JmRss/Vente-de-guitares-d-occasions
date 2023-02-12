import lowprice from "../../assets/images/lowprice.png";
import marques from "../../assets/images/guitare-electrique.png";
import reset from "../../assets/images/reset.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Filters() {
  const location = useLocation();
  const state = location.pathname === "/prixcroissants" ? "enable" : "";

  return (
    <nav className="filters">
      <h2>Filtres</h2>
      <Link to="/" className="filters_box reset">
        <img src={reset} alt="icone réinitialiser" />
        Réinitialiser
      </Link>
      <Link to="/prixcroissants" className={"filters_box " + state}>
        <img src={lowprice} alt="icone prix bas" />
        Prix croissants
      </Link>
      <div className="filters_box brand">
        <img src={marques} alt="icone par marques" />
        <p>Marques</p>
        <Link> Fender </Link>
        <Link> Marshall </Link>
        <Link> Les Paul </Link>
        <Link> Ibanez </Link>
      </div>
    </nav>
  );
}

// si la path: /prixcroissants alors affiche la classe active
