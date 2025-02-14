import Home from './Pages/Home/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from './Pages/Shop/ShopPage';
import DetalhesPage from './Pages/DetalhesProdutos/DetalhesPage';
import CartPage from './Pages/Cart/CartPage';
import Checkout from './Pages/Checkout/Checkout';
import Contact from './Pages/Contact/Contact';
import ScrollToTop from "./services/hooks/Scrooltop"; 


import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path="/detalhes/produtos/:id" element={<DetalhesPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}


export default App;
