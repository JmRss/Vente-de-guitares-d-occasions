import Card from "../../components/Card/Card";
import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import like from "../../assets/images/like.png";
import Footer from "../../components/Footer/Footer";
import useFetch from "../../utils/hooks";

export default function HomeFilterPrice() {
  const { isLoading, data, error } = useFetch("datas.json");

  //trie par prix , puis prix croissant
  const dataPrice = data.sort((a, b) => {
    return a.price - b.price;
  });
  const ascendingPrice = dataPrice.slice(0, 6);

  // filtre les produits par like décroissant
  const dataLike = dataPrice.sort((a, b) => {
    return -a.like + b.like;
  });
  const filterLike = dataLike.slice(0, 4);

  return (
    <>
      <Header />
      <Search />
      <Filters />

      <div className="container_article">
        <div className="cards">
          <h2 className="hebergement">Nos occasions</h2>
          {ascendingPrice.map(({ title, description, price, picture, id }) => (
            <Card
              title={title}
              description={description}
              price={price}
              picture={picture}
              id={id}
              key={title + id}
            />
          ))}
        </div>
        <div className="cards cards_right">
          <h2 className="cards_title">
            Les plus appréciés
            <img src={like} alt="like" />
          </h2>

          {filterLike.map(({ title, description, price, picture, id }) => (
            <Card
              title={title}
              description={description}
              price={price}
              picture={picture}
              id={id}
              key={title + id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
