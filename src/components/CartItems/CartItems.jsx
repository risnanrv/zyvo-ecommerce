import React, { useContext, useState } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import { CiCircleRemove } from "react-icons/ci";

function CartItems() {
    const { products, removeFromCart, cartItems } = useContext(ShopContext);
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);

    
    const subtotal = products.reduce((total, item) => {
        return total + (cartItems[item.id] > 0 ? item.newPrice * cartItems[item.id] : 0);
    }, 0);

   
    const applyPromoCode = () => {
        if (promoCode === "SAVE10") {
            setDiscount(subtotal * 0.1);
        } else {
            setDiscount(0);
            alert("Invalid promo code");
        }
    };

    return (
        <div className='cart-items'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {products.map((item) => (
                cartItems[item.id] > 0 && (
                    <div key={item.id}>
                        <div className="cartitems-format">
                            <img src={item.image} alt="" className='carticon-product-icon' />
                            <p>{item.name}</p>
                            <p>${item.newPrice}</p>
                            <button className='cartitems-quantity'>{cartItems[item.id]}</button>
                            <p>${(item.newPrice * cartItems[item.id]).toFixed(2)}</p>
                            <CiCircleRemove className="remove-icon" onClick={() => removeFromCart(item.id)} />
                        </div>
                        <hr />
                    </div>
                )
            ))}

            <div className="cart-summary">
                <div className="promo-code">
                    <input
                        type="text"
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button onClick={applyPromoCode}>Apply</button>
                </div>
                <div className="cart-totals">
                    <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
                    <p>Discount: <span>${discount.toFixed(2)}</span></p>
                    <p className="cart-total">Total: <span>${(subtotal - discount).toFixed(2)}</span></p>
                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
