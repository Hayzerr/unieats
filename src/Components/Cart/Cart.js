import React from 'react';
import './Cart.css'
import {Button} from "react-bootstrap";
import RightCart from "../RightCart/RightCart";

const Cart = () => {
    return (
        <div className="content container-fluid d-flex flex-row justify-content-between align-items-center">
            <div className="left-cart col-6 mt-3">
                <div className="row" style={{ fontFamily: 'Inter', textAlign: 'center' }}>
                    <div className="col-4 text-success" >
                        <span className="text-center" >Корзина</span>
                        <hr className="bg-success mt-1" />
                    </div>
                    <div className="col-4">
                        <span className="text-center" style = {{color: "white"}}>Оформление</span>
                        <hr style = {{color: "white"}} className="bg-secondary mt-1" />
                    </div>
                    <div className="col-4">
                        <span className="text-center" style = {{color: "white"}}>Заказ принят</span>
                        <hr style = {{color: "white"}} className="bg-secondary mt-1" />
                    </div>
                </div>

                {/* Cart item */}
                <div className="col mt-3">
                    <div className="row">
                        <img className="img-fluid col-2 p-0 rounded" src="https://via.placeholder.com/300" alt="Card image cap" />
                        <div className="col">
                            <h5 className="card-title" style={{
                                color: '#FFF',
                                fontFamily: 'Inter',
                                fontSize: '25px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: 'normal'
                            }}>
                                Название
                                {/* delete */}
                                <Button variant="outline-secondary" className="close" aria-label="Close" style={{ color: '#fefefe', alignItems: 'end'}}>
                                    <span aria-hidden="true">&times;</span>
                                </Button>
                            </h5>
                            <div className="row-9 d-flex flex-row justify-content-between align-items-center">
                                {/* Quantity */}
                                <div className="row-3 d-flex flex-row justify-content-between align-items-center">
                                    <Button style = {{marginRight: "5px"}} variant = "outline-primary" onClick={() => document.getElementById('form1').stepDown()}>
                                        -
                                    </Button>
                                    <input id="form1" min="0" name="quantity" defaultValue="1" type="number" className="form-control form-control-sm" />
                                    <Button style = {{marginLeft: "5px"}} variant = "outline-primary" onClick={() => document.getElementById('form1').stepUp()}>
                                        +
                                    </Button>
                                </div>
                                {/* Price */}
                                <div className="row d-flex flex-row justify-content-center align-items-center">
                                    <h3 className="card-title" style={{
                                        color: 'var(--sky-white, #FFF)',
                                        textAlign: 'center',
                                        fontFamily: 'Inter',
                                        fontSize: '32px',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        lineHeight: '32px' /* 66.667% */
                                    }}>
                                        575 тенге
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RightCart/>
        </div>
    );
};

export default Cart;
