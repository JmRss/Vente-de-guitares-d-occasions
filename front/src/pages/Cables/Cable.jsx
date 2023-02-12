import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import useFetch from "../../utils/hooks";

export default function Cables() {
  const { isLoading, data, error } = useFetch("../datas.json");

  const cablesFilter = data.filter((el) => el.cable === true);

  return (
    <>
      <Header />
      <NavBar />
      <div className="cards cards--filter-active">
        {cablesFilter.map(
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
