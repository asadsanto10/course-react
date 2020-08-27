import React from 'react';

const CartAdded = (props) => {
    const {name, image, price} = props.cartAddedData;
    // console.log(props.cartData);
    return (
        <div className="order_added">
            <img src={image} alt={image}/>
            <p style={{width:"100%"}}>{name}</p>
            <p className="price">${price}</p>
        </div>
    );
};

export default CartAdded;