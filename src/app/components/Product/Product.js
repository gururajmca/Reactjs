import React, { Component, PropTypes } from 'react';

class Product extends Component {
    
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart, increaseQuantity } = this.props;

        //addToCart(id);
        if (isInCart) {
            //removeFromCart(id);
            increaseQuantity(id);
        } else {
            addToCart(id);
        }
    }

    render() {
        const { name, price, currency, image, url, isInCart } = this.props;

        return (
            <div className="product thumbnail">
                <img src={image} alt="product" className="img img-responsive"/>
                <div className="caption">
                    <h3>
                        <a href={url}>{name}</a>
                    </h3>
                    <div className="product__price">{price} {currency}</div>
                    <div className="product__button-wrap">
                        {isInCart == false && (
                            <button className='btn btn-primary' onClick={this.handleClick}>
                                Add to cart
                            </button>
                        )}
                        {isInCart && (
                            <div className="btn-group">
                              <button type="button" className="btn btn-default" onClick={this.handleClick}>-</button>
                              <button type="button" className="btn btn-default">In cart</button>
                              <button type="button" className="btn btn-default" onClick={this.handleClick}>+</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    increaseQuantity: PropTypes.func.isRequired
}

export default Product;
