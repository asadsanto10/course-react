import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import CartAdded from './CartAdded';


const Cart = (props) => {
    const cartInfo = props.cartInfo;
    // console.log(cartInfo);
    const totalPrice = cartInfo.reduce((sum, price) => sum + price.price,0)
    let shipping = 0;
    if (totalPrice > 1200) {
        shipping = 100;
    }
    else if (totalPrice > 700) {
        shipping = 80;
    }
    else if (totalPrice > 500) {
        shipping = 50;
    }
    else if (totalPrice > 250) {
        shipping = 20;
    }
    else if (totalPrice > 160) {
        shipping = 10;
    }
    else if (totalPrice > 90){
        shipping = 4;
    }
    const tax = totalPrice / 5;

    return (
        <div className="course-cart">
            <div className="order">
                <h4>Order Details</h4>
            </div>
            {
                cartInfo.map(cartAdded => <CartAdded key={cartAdded.id} cartAddedData={cartAdded} ></CartAdded>)
            }
            <div className="all_charge mt-3">
                <p>Course Orderd: <span>${cartInfo.length}</span></p>
                <p>Price: <span>${totalPrice}</span></p>
                <p>Shipping: <span>${shipping}</span></p>
                <p>Tax: <span>${tax}</span></p>
                <p className="total_amount">Total Amount: <span>${totalPrice + shipping + tax} <FontAwesomeIcon icon={faTag} /></span> </p>
            </div>
        </div>
    );
};

export default Cart;