import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Products() {
  let { id } = useParams();
  const [ProductData, setProductData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      await fetch("../datas.json")
        .then((res) => res.json())
        .then((res2) => {
          const dataLodging = res2.find((e) => e.id === id);
          setProductData([dataLodging]);
          if (!dataLodging) {
            navigate("/error");
          }
        })
        .catch((error) => console.log(error));
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {ProductData.map(({ title, description, like, price, picture, id }) => (
        <Product
          key={id}
          title={title}
          description={description}
          like={like}
          price={price}
          picture={picture}
          id={id}
        />
      ))}
      <Footer />
    </>
  );
}
