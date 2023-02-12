import { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Button({
  title,
  description,
  price,
  picture,
  objectId,
}) {
  let location = useLocation();
  const display =
    location.pathname === "/basket" ? "display-on" : "display-none";
  const displayProductPage =
    location.pathname === "/product/" + objectId
      ? "display-on"
      : "display-none";

  const { id } = useParams();
  const [addProd, setAddProd] = useState({
    title: title,
    description: description,
    price: price,
    picture: picture,
    id: parseInt(id),
  });
  function addToCart() {
    let basket = JSON.parse(localStorage.getItem("basket") || "[]");
    const foundProduct = basket.find((e) => e.title === title);
    if (foundProduct != undefined) {
      localStorage.setItem("basket", JSON.stringify(basket));
      alert("Votre article à bien été ajouté au panier");
    } else {
      basket.push(addProd);
      localStorage.setItem("basket", JSON.stringify(basket));
      alert("Votre article à bien été ajouté au panier");
    }
  }
  // recupére le title via la props parent Card
  function deleteItem(title) {
    let basket = JSON.parse(localStorage.getItem("basket") || "[]");
    const newBasket = basket.filter((el) => el.title !== title);
    localStorage.setItem("basket", JSON.stringify(newBasket));
    window.location.reload();
  }

  return (
    <>
      <button
        className={"button_addtocart " + displayProductPage}
        onClick={addToCart}
      >
        Ajouter au panier
      </button>
      <button
        className={"delete_product " + display}
        onClick={() => deleteItem(title)}
      >
        Supprimer
      </button>
    </>
  );
}
