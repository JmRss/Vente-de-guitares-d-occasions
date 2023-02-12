import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import useFetch from "../../utils/hooks";

export default function Mediators() {
  const { isLoading, data, error } = useFetch("../datas.json");

  const mediatorsFilter = data.filter((el) => el.mediator === true);

  return (
    <>
      <Header />
      <NavBar />
      <div className="cards cards--filter-active">
        {mediatorsFilter.map(
          ({ title, description, price, like, picture, id }) => {
            return (
              <Card
                title={title}
                description={description}
                price={price}
                like={like}
                picture={picture}
                id={id}
              />
            );
          }
        )}
      </div>
      <Footer />
    </>
  );
}
