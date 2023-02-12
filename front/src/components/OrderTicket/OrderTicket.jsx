import useFetch from "../../utils/hooks";
import { useLocation } from "react-router-dom";
import React from "react";

export default function OrderTicket() {
  const location = useLocation();
  const orderId = location.state.response;
  const { isLoading, data, error } = useFetch(
    `http://localhost:4000/api/order/${orderId}`
  );

  //utilise la destructuration pour récupérer les données vouluent
  if (!data || isLoading || error) {
    return <p>Chargement...</p>;
  }
  const { firstName, lastName, address, city, email } = data;
  const { basket = [] } = data || {};
  return (
    <div className="container_order">
      <div className="order_ticket">
        <p>
          Votre commande n°
          <span className="orderId-color">{orderId}</span> à bien été validé
        </p>
        <p>Veuillez conserver votre numéro de commande</p>
      </div>

      <div className="summary_order">
        <ul>
          <p>
            <strong>Résumé de votre commande :</strong>
          </p>
          {basket &&
            basket.length > 0 &&
            basket.map((item, index) => (
              <React.Fragment key={index}>
                <li>{item.title}</li>
                <li>{item.price} €</li>
              </React.Fragment>
            ))}
        </ul>
      </div>
      <div className="delivery">
        <ul>
          <p>
            <strong>Détails de livraison :</strong>
          </p>
          <li>
            {lastName}, {firstName}
          </li>
          <li>
            Adresse de livraison : {address}; {city}
          </li>
          <li>Date de livraison estimée : 3 à 5 jours</li>
          <li>Méthode de livraison : Livraison Standard</li>
        </ul>
      </div>
    </div>
  );
}
