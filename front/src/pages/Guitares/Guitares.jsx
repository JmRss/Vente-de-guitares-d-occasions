import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import useFetch from "../../utils/hooks";

export default function Guitares() {
  const { isLoading, data, error } = useFetch("../datas.json");

  const guitareFilter = data.filter((el) => el.guitare === true);

  return (
    <>
      <Header />
      <NavBar className="active" />
      <div className="cards cards--filter-active">
        {guitareFilter.map(
          ({ title, description, price, like, picture, id, index }) => {
            return (
              <Card
                title={title}
                description={description}
                price={price}
                like={like}
                picture={picture}
                id={id}
                key={index}
              />
            );
          }
        )}
      </div>
      <Footer />
    </>
  );
}
