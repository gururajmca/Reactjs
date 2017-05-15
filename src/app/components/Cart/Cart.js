import React, { PropTypes } from 'react';
import CartItem from './CartItem';

const Cart = ({ items, total, currency, quantity }) => {

    var number_of_items = items.length;
    
    return (
        <div>
            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h4>Your Cart Summary</h4>
                        <div className="row carttop">
                            <div className="col-md-6">
                                <p> Items in cart </p>
                                <p className="num_dis"> {number_of_items} </p>
                            </div>
                            <div className="col-md-6">
                                <p> Total: {currency} </p>
                                <p className="num_dis"> {total} </p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                          <div className="col-md-4">Item Name</div>
                          <div className="col-md-2">Quantity</div>
                          <div className="col-md-4">Total</div>
                          <div className="col-md-2">{quantity}</div>
                        </div>
                        {items.length > 0 && (
                            <div className="row">
                            <ul>
                                {items.map(item => (
                                  <li key={item.id}>
                                    <CartItem {...item}/>
                                  </li>
                                ))}
                            </ul>
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    quantity: PropTypes.number
}

export default Cart;
