import labelPrice from "../../assets/images/etiquette-de-prix.png";
import ButtonAddToCart from "../../components/ButtonAddToCart/button";

export default function Products({
  title,
  description,
  picture,
  price,
  like,
  id,
}) {
  return (
    <div className="container_product">
      <div className="container_product_img">
        <img
          src={picture}
          key={picture + id}
          alt="Photo de la guitare à vendre"
          className="product_img "
        />
      </div>
      <ul>
        <img
          src={labelPrice}
          alt="image etiquette de prix"
          className="label-price"
        />
        <li key={title + id} className="product_title">
          {title}
        </li>
        <li key={description + id}>{description}</li>
        <li key={price + id} className="product_price">
          {price}euros
        </li>
        <ButtonAddToCart
          title={title}
          description={description}
          price={price}
          picture={picture}
          objectId={id}
        />
      </ul>
    </div>
  );
}
