import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cart_reducer';

const CartContext = createContext();

const getLocalStorageCartData = () => {

    let newLocalStorageCartData = localStorage.getItem('expressStore');

    // if(newLocalStorageCartData === []){
    //     return [];
    // } else {
    //     return JSON.parse(newLocalStorageCartData);
    // }

    const parsedData = JSON.parse(newLocalStorageCartData);

    if(!Array.isArray(parsedData)) return [];
    
    return parsedData;
}

const initialState = {
    // cart: [],
    cart: getLocalStorageCartData(),
    total_item: '',
    total_price: 1000,
    shipping_fee: 6000,
}

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({type: 'ADD_TO_CART', payload: {id, color, amount, product}})
    }

    // remove individual item
    const removeItem = (id) => {
        dispatch({type: 'REMOVE_ITEM', payload: id})
    }

    // increment and decrement for cart
    const setDecrease = (id) => {
        dispatch({type: 'SET_DECREASE_CART', payload: id})
    }

    const setIncrease = (id) => {
        dispatch({type: 'SET_INCREASE_CART', payload: id})
    }


    // to clear cart
    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }


    // localStorage
    useEffect(() => {
        dispatch({type: 'CART_TOTAL_ITEM'})
        dispatch({type: 'CART_TOTAL_PRICE'})
        localStorage.setItem('expressStore', JSON.stringify(state.cart));
    }, [state.cart]);


    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setIncrease, setDecrease}}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export {CartProvider, useCartContext};