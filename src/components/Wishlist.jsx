
import React from "react";
import "../styles/Wishlist.css";

export default function Wishlist() {
  return (
    <div className="wishlist">
      <h2>— Your Favorites  —</h2>
      <div className="wishlist__grid">
        <div className="wishlist__card">
          <img src="/fi1.jpeg" alt="Eyewear" />
          <h3>Classic Round Frame</h3>
          <p>₹1,999</p>
          <button className="remove-btn">Remove</button>
        </div>
        <div className="wishlist__card">
          <img src="/fi2.jpeg" alt="Eyewear" />
          <h3>Bold Cat Eye</h3>
          <p>₹2,499</p>
          <button className="remove-btn">Remove</button>
        </div>
      </div>
    </div>
  );
}
