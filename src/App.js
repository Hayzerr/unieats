import React from 'react'
import './App.css';
import Navbar from './Components/NavBar/Navbar'
import ProductCard from "./Components/ProductCard/ProductCard";
import Filter from "./Components/Filter/Filter";
import Detail from "./Components/Detail/Detail";
import Cart from './Components/Cart/Cart'
import Receipt from "./Components/Receipt/Receipt";
import Checkout from "./Components/Checkout/Checkout";

let App = () => {
  return (
      <>
          <Navbar/>
          {/* <Filter/>
          <ProductCard/>
          <Detail/>
          <Cart/>
          <Receipt/>
          */}
          <Checkout/>
      </>
  );
}

export default App;
