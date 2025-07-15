
import React from "react";
import "../styles/Cart.css";

export default function Cart() {
  return (
    <div className="cart">
      <h2>— Your Shopping Cart —</h2>
      <div className="cart__container">
        {/* Cart Items */}
        <div className="cart__items">
          <div className="cart__item">
            <img src="/ci6.jpeg" alt="Product" />
            <div className="item__details">
              <h3>Stylish Frame</h3>
              <p>₹1,999</p>
              <div className="quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button className="remove-btn">Remove</button>
            </div>
          </div>

          <div className="cart__item">
            <img src="/ci2.jpeg" alt="Product" />
            <div className="item__details">
              <h3>Trendy Round Glass</h3>
              <p>₹2,499</p>
              <div className="quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="cart__summary">
          <h3>Summary</h3>
          <p>Subtotal: ₹4,498</p>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}
