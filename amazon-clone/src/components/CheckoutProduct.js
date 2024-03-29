import React from 'react';
import '../assets/css/CheckoutProduct.css'
import { useStateValue } from "../context/StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image"/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><span aria-labelledby="star" role="img">⭐</span></p>
                    ))}
                </div>
                <button
                    onClick={removeFromBasket}
                >Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
