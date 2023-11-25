import React from 'react';
import './ProductCard.css'
import { Card, Button } from 'react-bootstrap';
import productImage from '../Image/ProductImage.png'

const ProductCard = () => {
    return (
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={productImage} style = {{height: "230px", objectFit: "cover", objectPosition: "0% 77%"}}/>
            <Card.Body>
                <Card.Title className="title" style={{fontSize:"15px"}}>Product name</Card.Title>
                <Card.Text className="location" style={{fontSize:"12px"}}>
                    Product Location
                </Card.Text>
                <Card.Text className="price">
                    570
                </Card.Text>
                <div className="row-decision">
                    <div className="row-price">
                        <Button size = "sm" variant="outline-primary">-</Button>
                        0
                        <Button size = "sm" variant="outline-primary">+</Button>
                    </div>
                    <Button size = "sm" variant="primary" style={{marginLeft: "20px"}}>В корзину</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;