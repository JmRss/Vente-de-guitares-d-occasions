import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Ampli from "./pages/AmpliEffet/Ampli";
import Cables from "./pages/Cables/Cable";
import Cordes from "./pages/Cordes/Cordes";
import Guitares from "./pages/Guitares/Guitares";
import Home from "./pages/Home/Home";
import HomeFilterPrice from "./pages/HomeFilterPrice/HomeFilterPrice";
import Mediators from "./pages/Mediators/Mediators";
import Occasions from "./pages/Occasions/Occasions";
import Products from "./pages/Products/Products";
import Order from "./pages/Order/Order";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prixcroissants" element={<HomeFilterPrice />} />
        <Route path="/product/:id" element={<Products />} />
        <Route path="/basket" element={<Cart />} />
        <Route path="/occasions" element={<Occasions />} />
        <Route path="/occasions/guitares" element={<Guitares />} />
        <Route path="/occasions/amplieffet" element={<Ampli />} />
        <Route path="/occasions/cordes" element={<Cordes />} />
        <Route path="/occasions/cables" element={<Cables />} />
        <Route path="/occasions/mediators" element={<Mediators />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
