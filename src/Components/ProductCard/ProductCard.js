import React, {useState} from 'react';
import './ProductCard.css'
import { Card, Button } from 'react-bootstrap';
import productImage from '../../Image/ProductImage.png'

const ProductCard = () => {
    const [counter, setCounter] = useState(0);

    return (
        <Card bg = "dark" style={{ width: '16rem' }}>
            <Card.Img variant="top" src={productImage} style = {{height: "230px", objectFit: "cover", objectPosition: "0% 77%"}}/>
            <Card.Body>
                <Card.Title className="title" style={{fontSize:"15px", color: "white"}}>Product name</Card.Title>
                <Card.Text className="location" style={{fontSize:"12px"}}>
                    Product Location
                </Card.Text>
                <Card.Text className="price">
                    570
                </Card.Text>
                <div className="row-decision">
                    <div className="row-price">

                            <div style = {{display: "flex", alignItems: "baseline"}}>
                            <Button style = {{marginRight: "5px"}} variant = "outline-primary" onClick={() => setCounter(counter-1)}>
                                -
                            </Button>
                                <span style={{color: "white"}}>{counter}</span>
                            <Button style = {{marginLeft: "5px"}} variant = "outline-primary" onClick={() => setCounter(counter+1)}>
                                +
                            </Button>
                        <   /div>
                    </div>
                    <Button size = "sm" variant="primary" style={{marginLeft: "20px"}}>В корзину</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;