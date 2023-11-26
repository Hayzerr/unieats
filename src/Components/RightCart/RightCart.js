import {Button} from "react-bootstrap";
import React from "react";

let RightCart = () => {
    return (
        <div className="right-cart col-3 mt-3" style={{display: "flex", justifyContent: "start", paddingTop: "16px"}}>
            <div style = {{display: "flex", justifyContent: "space-between"}}>
                     <span style={{ color: '#ECECEC', textAlign: 'center', fontFamily: 'Inter', fontSize: '24px', fontStyle: 'normal', fontWeight: '700', lineHeight: '32px' }}>
                        Итого:
                    </span>
                <span style={{ color: '#ECECEC', textAlign: 'center', fontFamily: 'Inter', fontSize: '24px', fontStyle: 'normal', fontWeight: '700', lineHeight: '32px'}}>
                        5800
                     </span>
            </div>

            <div>
                <Button
                    variant="primary"
                    className="btn btn-primary btn-lg btn-blk mt-3 row"
                    style={{
                        color: '#000',
                        fontFamily: 'Inter',
                        width: '100%',
                        fontSize: '22px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal',
                        borderRadius: '30px',
                        background: '#00FFA4'

                    }}
                >
                    Оформить заказ
                </Button>
            </div>
        </div>
    );
}

export default RightCart;