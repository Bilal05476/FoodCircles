import React, {useState, createContext } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    // const removeCart = (id) => {
    //     setCart(cart.filter(cart => cart.id !== id))
    // };

    return(
        <CartContext.Provider value={[cart,setCart]}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;

