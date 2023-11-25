import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import ProductCard from "./Components/ProductCard";
import Filter from "./Components/Filter";

let App = () => {
  return (
      <>
          <Navbar/>
          <ProductCard/>
          <Filter/>
      </>
  );
}

export default App;
