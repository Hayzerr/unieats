import React, { useState } from 'react';
import {Button} from "react-bootstrap";
import './Checkout.css'
import RightCart from "../RightCart/RightCart";

const Checkout = () => {
    const [selectedAddress, setSelectedAddress] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedPayment, setSelectedPayment] = useState('');

    const handleAddressSelection = (address) => {
        setSelectedAddress(address);
    };

    const handleTimeSelection = (time) => {
        setSelectedTime(time);
    };

    const handlePaymentSelection = (paymentType) => {
        setSelectedPayment(paymentType);
    };

    return (
        <div className="content container-fluid d-flex flex-row justify-content-between ">
            <div className="left-cart col-6 mt-3">
                {/* Stages */}
                <div className="row" style={{ fontFamily: 'Inter', textAlign: 'center' }}>
                    {/* Stages: Korzina, Oformlenie, Zakaz Prinyat */}
                    {/* ... */}
                </div>

                <div className="col mt-3">
                    {/* Heading */}
                    <span style={{ color: '#FFF', fontFamily: 'Inter', fontSize: '32px', fontWeight: '600' }}>
              Оформление заказа
            </span>

                    {/* Address selection */}
                    <div className="adresses col mt-3" style={{
                        borderRadius: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#FFF',
                        fontFamily: 'Inter',
                        fontSize: '24px',
                        padding: '20px',
                        fontWeight: '600',
                        lineHeight: 'normal',
                        background: '#222',
                    }}>
                        <span style={{ marginBottom: '15px' }}>Адресы:</span>
                        <Button className="btn" onClick={() => handleAddressSelection('1 этаж блок H кабинет 104')}>1 этаж блок H кабинет 104</Button>
                        <Button className="btn" onClick={() => handleAddressSelection('Another address')}>Another Address</Button>
                        <p>Selected Address: {selectedAddress}</p>
                    </div>

                    {/* Time selection */}
                    <div className="time col mt-3" style={{
                        borderRadius: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#FFF',
                        fontFamily: 'Inter',
                        fontSize: '24px',
                        padding: '20px',
                        fontWeight: '600',
                        lineHeight: 'normal',
                        background: '#222',
                    }}>
                        <span style={{ marginBottom: '15px' }}>Время доставки/самовывоза</span>
                        <form className="col">
                            {/* Replace these buttons with radio inputs */}
                            <Button className="btn" onClick={() => handleTimeSelection('09:00-10:00')}>09:00-10:00</Button>
                            <Button className="btn" onClick={() => handleTimeSelection('10:00-11:00')}>10:00-11:00</Button>
                            {/* ... */}
                        </form>
                        <p>Selected Time: {selectedTime}</p>
                    </div>

                    {/* Payment selection */}
                    <div className="paymentType col mt-3" style={{
                        borderRadius: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#FFF',
                        fontFamily: 'Inter',
                        fontSize: '24px',
                        padding: '20px',
                        fontWeight: '600',
                        lineHeight: 'normal',
                        background: '#222',
                    }}>
                        <span style={{ marginBottom: '15px' }}>Способ оплаты</span>
                        <form className="col">
                            {/* Replace these buttons with radio inputs */}
                            <Button className="btn" onClick={() => handlePaymentSelection('Наличные')}>Наличные</Button>
                            <Button className="btn" onClick={() => handlePaymentSelection('Kaspi')}>Kaspi</Button>
                        </form>
                        <p>Selected Payment: {selectedPayment}</p>
                    </div>

                    {/* Add a button to submit the order */}
                    <button className="btn" onClick={() => console.log('Order Submitted')}>Оформить заказ</button>
                </div>

            </div>
            <RightCart/>
        </div>
    );
};

export default Checkout;
