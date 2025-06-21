import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Home2 from './pages/Home2.jsx';
import Home3 from './pages/Home3.jsx';
import Navbar from './components/NavBar.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/produto/:id" element={<Product />} />
        <Route path="/carrinho" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
