import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../products.js';
import products2 from '../data/products2.js';
import { useCart } from '../context/CartContext';
import showProductType_1 from '../services/showProductType_1.jsx';
import showProductType_2 from '../services/showProductType_2.jsx';

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const product2 = products2.find(p => p.id === id);
  const { addToCart } = useCart();

  function showAllProductsPages() {
    if (product) {
      return showProductType_1(product, addToCart)
    };
    if (product2) {
      return showProductType_2(product2, addToCart)
    };
  };

  return (
    showAllProductsPages()
  );
};
