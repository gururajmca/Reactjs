import React, { Component, PropTypes } from 'react';

class Product extends Component {
    
    constructor(props) {
        super(props);
        console.log('inside constructor');
        console.log(props);
    }

    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart, couterPlus } = this.props;

        if (isInCart) {
            this.setState({ added_qty: this.props.added_qty + 1 });
            //couterPlus(id);
        } else {
            addToCart(id);
        }
    }

    render() {
        const { name, brand, pack, price, currency, image, url, isInCart } = this.props;

        return (
            <div className="product thumbnail">
                <img src={image} alt="product" className="img img-responsive"/>
                <div className="caption text-center">
                    <p> {brand} </p>
                    <h5 className="text-center">{name}</h5>
                    <p> {pack} </p>
                    <h4 className="text-center"> Rs {price} {currency}</h4>
                    <div className="text-center">
                        {isInCart == false && (
                            <button className='btn btn-primary' onClick={this.handleClick} >
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
    couterPlus: PropTypes.func
}

export default Product;
