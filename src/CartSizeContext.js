import React, { createContext, useContext, useState } from 'react';
import { cartItems } from './Card';
import Welcome from './welcome';

export const CartSizeContext = createContext();

export const useCartSize = () => {
    return useContext(CartSizeContext);
};

export const CartSizeProvider = ({children}) => {
    const [cartSize,setCartSize] = useState(cartItems.length);

    const updateCartSize = () => {
        setCartSize(cartSize => cartItems.length);
    };
    return (
        <CartSizeContext.Provider value={{cartSize,updateCartSize}}>

            <Welcome/>
        </CartSizeContext.Provider>
    )
}