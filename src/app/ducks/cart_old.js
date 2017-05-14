import { getProduct } from '../ducks/products';

// actions
const CART_ADD   = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE';
const CART_INC = 'cart/INC';
const CART_DES = 'cart/DES';

// reducer
const initialState = {
    items: [], // array of product ids
    currency: 'INR',
    quantityById: {} // Item Quantities
};

export default function cart(state = initialState, action = {}) {
    switch (action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.payload);
        case CART_REMOVE:
            return handleCartRemove(state, action.payload);
        case CART_INC:
            return handleCartIncrease(state, action.payload);
        case CART_DES:
            return handleCartDescrease(state, action.payload);
        default:
            return state;
    }
}

function handleCartAdd(state, payload) {
    console.log('inside handleCartAdd');
    console.log(state.items);
    state = {...state, items: []}
    return {
        ...state,
        items: [ ...state.items, payload.productId ]
    };
}

function handleCartRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(id => id !== payload.productId)
    };
}


function handleCartIncrease(state, payload) {
    console.log('inside the increaseQuantity in ducks');
    console.log(...state);
    return {
        ...state,
        items: [ ...state.items, payload.productId ]
    };
}

function handleCartDescrease(state, payload) {
    return {
        ...state,
        items: [ ...state.items.quantity, payload.quantity ]
    };
}

// action creators
export function addToCart(productId) {
    return {
        type: CART_ADD,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        payload: {
            productId
        }
    }
}

export function increaseQuantity(productId) {
    return {
        type: CART_INC,
        payload: {
            productId
        }
    }
}
export function descreaseQuantity(productId) {
    return {
        type: CART_DES,
        payload: {
            productId
        }
    }
}

// selectors
export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
    return state.cart.items.map(id => getProduct(state, { id }));
}

export function getCurrency(state, props) {
    return state.cart.currency;
}

export function getTotal(state, props) {
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, { id });
        return acc + ( item.price * item.quantity);
    }, 0);
}
