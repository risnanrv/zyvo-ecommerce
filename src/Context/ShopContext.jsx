import React, { createContext, useState } from 'react'
import products from '../assets/assets'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < products.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] =useState(getDefaultCart())
 

    const addToCart =(itemId) =>{
        setCartItems((prev) => ({...prev , [itemId]: prev[itemId] + 1}))
       console.log(cartItems);
       
    //    const getTotalCartItems = () =>{
    //     let totalItem = 0;
    //     for(const item in cartItems){
    //         if(cartItems[item] > 0){
    //             totalItem += cartItems[item]
    //         }
    //     }
    //     return totalItem;
    //    }
    const removeFromCart =(itemId) =>{
        setCartItems((prev) => ({...prev , [itemId]: prev[itemId] - 1}))
    }
    const constextValue = {getTotalCartItems ,products , cartItems , addToCart, removeFromCart} 
  return (
    <ShopContext.Provider value={constextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}}

export default ShopContextProvider;
