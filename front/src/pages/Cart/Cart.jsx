import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import CustomForm from "../../components/CustomForm/CustomForm";

export default function Cart() {
  const basket = JSON.parse(localStorage.getItem("basket") || "[]");
  const numberProducts = basket.length;
  const arrayPrice = [];
  {
    basket.map(({ price }) => arrayPrice.push(price));
  }
  function totalProd() {
    if (numberProducts === 0) {
      return null;
    }
    if (numberProducts === 1) {
      return "1 article";
    } else {
      return numberProducts + " articles";
    }
  }
  function totalPrice() {
    const sum = (acc, elem) => acc + elem;
    return arrayPrice.reduce(sum);
  }
  if (basket.length === 0) {
    return (
      <>
        <Header />
        <section className="section_cart">
          <div className="container_basket">
            <h3 className="title_basket "> Votre panier est vide</h3>
          </div>
        </section>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <section className="section_cart">
          <div className="container_basket">
            <h3 className="title_basket "> Votre panier</h3>
            {basket.map(({ title, description, price, picture, id }) => (
              <Card
                title={title}
                description={description}
                price={price}
                key={price + title + description}
                picture={picture}
                id={id}
              />
            ))}
            <h3 className="total">
              Total({totalProd()}): {totalPrice()} €
            </h3>
          </div>
          <CustomForm />
        </section>
        <Footer />
      </>
    );
  }
}
