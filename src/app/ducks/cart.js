import { getProduct } from '../ducks/products';

// actions
const CART_ADD   = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE';
const CART_QUA = 'cart/QUA';
const CART_PLUS = 'cart/PLUS';

// reducer
const initialState = {
    items: [], // array of product ids
    currency: 'INR', //Product currency
    quantityById: 0 // Item Quantities
};

export default function cart(state = initialState, action = {}) {
    switch (action.type) {
        case CART_ADD: 
            return handleCartAdd(state, action.payload);
        case CART_REMOVE:
            return handleCartRemove(state, action.payload);
        case CART_PLUS:
            return handleCartPlus(state, action.payload);
        default:
            return state;
    }
}


function handleCartAdd(state, payload) {
    return {
        ...state,
        items: [ ...state.items, payload.productId ],
        currency: 'INR',
        quantityById: [ ...state.quantityById, state.quantityById] + 1
    };
}

function handleCartRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(id => id !== payload.productId)
    };
}

function handleCartPlus(state, payload) {
    return {
        ...state,
        items: [ ...state.items, payload.productId ],
        currency: 'INR',
        quantityById: [ ...state.quantityById, state.quantityById] + 1
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


export function couterPlus(productId) {
    return {
        type: CART_PLUS,
        payload: {
            productId
        }
    }
}

// selectors
export function isInCart(state, props) {
    console.log('inside is in cart ');
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
    console.log('getItems ***');
    return state.cart.items.map(id => getProduct(state, { id }));
}

export function getCurrency(state, props) {
    console.log('getCurrency ***');
    return state.cart.currency;
}

export function getTotal(state, props) {
    console.log('getTotal ***');
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, { id });
        return acc + ( item.price * item.added_qty);
    }, 0);
}

export function getItemQuantity(state, props) {
    return 1;
}
