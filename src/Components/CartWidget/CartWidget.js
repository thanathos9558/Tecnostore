import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import  "./CartWidget.css";

export const CartWidget = () => {
    return (
        <div>
            <Icon.Cart className="carrito" color="#db6400" size={36} />
        </div>
    )
}

export default CartWidget;
