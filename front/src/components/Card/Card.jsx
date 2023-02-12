import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../ButtonAddToCart/button";

export default function Card({ title, description, price, picture, id }) {
  let location = useLocation();
  const locationCard = location.pathname === "/basket" ? "card_basket" : "";
  const locationCardImg =
    location.pathname === "/basket" ? "card_basket--img" : "";
  const locationCardText =
    location.pathname === "/basket" ? "card_basket--text" : "";
  const disable = location.pathname === "/basket" ? "#" : "/product/" + id;

  return (
    <Link to={disable} className={"card " + locationCard} key={id}>
      <img
        src={picture}
        alt={title}
        className={"card_img " + locationCardImg}
      ></img>
      <div className={"card_text " + locationCardText}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="price">{price}€</p>
      </div>
      <Button title={title} />
    </Link>
  );
}
