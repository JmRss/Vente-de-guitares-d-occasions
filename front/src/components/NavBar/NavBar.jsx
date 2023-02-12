import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="container__nav-bar">
      <ul>
        <Link to="/occasions/guitares" className="nav-link ">
          Guitares
        </Link>
        <Link to="/occasions/amplieffet" className="nav-link ampli">
          Amplis/Effets
        </Link>
        <Link to="/occasions/cordes" className="nav-link cordes">
          Cordes
        </Link>
        <Link to="/occasions/cables" className="nav-link cables">
          Câbles
        </Link>
        <Link to="/occasions/mediators" className="nav-link mediators">
          Médiators
        </Link>
        <Link to="" className="nav-link">
          Accessoires
        </Link>
      </ul>
    </nav>
  );
}
