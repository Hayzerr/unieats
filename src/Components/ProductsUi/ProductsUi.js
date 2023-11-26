import React from 'react'
import './ProductsUi.css';
import SDUNavbar from "../NavBar/Navbar";
import Filter from "../Filter/Filter";
import ProductCard from "../ProductCard/ProductCard";

let ProductsUi = () => {
    return (
        <div>
            <Filter/>
            <div className="col mt-3 m-3" style={{ color: '#FFF', fontFamily: 'Inter', fontSize: '32px', fontStyle: 'normal', fontWeight: '600', lineHeight: 'normal', textAlign: 'start' }}>
                Товары
            </div>
            <div className="product-cards">
                <div className="product-card">
                    <ProductCard/>
                </div>
                <div className="product-card">
                    <ProductCard/>
                </div>
            </div>
        </div>
    );
}

export default ProductsUi;
