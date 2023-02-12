import Card from "../../components/Card/Card";
import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import like from "../../assets/images/like.png";
import Footer from "../../components/Footer/Footer";
import useFetch from "../../utils/hooks";

export default function Home() {
  const { isLoading, data, error } = useFetch("../datas.json");
  const guitareFilter = data.filter((el) => el.guitare === true);
  const mostLikedGuitar = guitareFilter.sort((a, b) => {
    return -a.like + b.like;
  });
  const mostLiked = mostLikedGuitar.slice(0, 4);

  return (
    <>
      <Header />
      <Search />
      <Filters />

      <div className="container_article">
        <div className="cards">
          <h2 className="hebergement">Nos occasions</h2>
          {guitareFilter.map(({ title, description, price, picture, id }) => (
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
          {mostLiked.map(({ title, description, price, picture, id }) => (
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
