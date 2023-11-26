import React from 'react'
import './App.css';
import Navbar from './Components/NavBar/Navbar'
import ProductCard from "./Components/ProductCard/ProductCard";
import Filter from "./Components/Filter/Filter";
import Detail from "./Components/Detail/Detail";
import Cart from './Components/Cart/Cart'
import Receipt from "./Components/Receipt/Receipt";
import Checkout from "./Components/Checkout/Checkout";
import OrderDetails from "./Components/OrderDetails/OrderDetails";
import SDUNavbar from "./Components/NavBar/Navbar";
import ProductsUi from "./Components/ProductsUi/ProductsUi";

let App = () => {
  return (
      <>
          <SDUNavbar/>
          {/* <Filter/>
          <ProductCard/>
          <Detail/>
          <Cart/>
          <Receipt/>
          <Checkout/>
          <OrderDetails/>
          */}
          <ProductsUi/>
      </>
  );
}

export default App;
