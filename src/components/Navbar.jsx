
import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

export default function Navbar({ onAuthClick }) {
  return (
    <nav className="navbar">
      {/* Left - Logo */}
      <div className="navbar__logo">
        <Link to="/">
          <img src="/nazario-logo.png" alt="Nazario Logo" />
        </Link>
      </div>

      {/* Center - Search Bar */}
      <SearchBar />

      {/* Right - Links */}
      <div className="navbar__links">
        <a href="#">Track Order</a>
        <a href="#" onClick={onAuthClick}>
          Sign In / Sign Up
        </a>

        <Link to="/wishlist">
            
          <FaHeart className="icon" title="Wishlist" />
          
        </Link>

        <Link to="/cart">
          <div className="cart-icon" title="Cart">
            <FaShoppingCart className="icon" />
            <span className="badge">1</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
