import React, { PropTypes } from 'react';

const CartItem = ({ id, name, quantity, price, currency }) => {
    
    // handleClick = () => {
    //     const { id, addToCart, removeFromCart, isInCart, increaseQuantity } = this.props;

    //     //addToCart(id);
    //     if (isInCart) {
    //         //removeFromCart(id);
    //         increaseQuantity(id);
    //     } else {
    //         addToCart(id);
    //     }
    // }

    return (
        <div className="col-md-12">
          <div className="col-md-4">{name}</div>
          <div className="col-md-2">{quantity}</div>
          <div className="col-md-4">{price}</div>
          <div className="col-md-2">
              <button className="btn btn-xs btn-danger" type="button">
                Remove
              </button>
          </div>
        </div>
    );
}

CartItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
}

export default CartItem;
