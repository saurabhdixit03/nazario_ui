
import React, { useState } from "react";
import "../styles/AuthPopup.css";
import { FaWhatsapp } from "react-icons/fa";

export default function AuthPopup({ onClose }) {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="auth-overlay">
      <div className="auth-popup-unique">
        <div className="auth-left">
          <h2>Welcome to Nazario</h2>
          <p>{isSignIn ? "Glad to see you back!" : "Let’s get you started!"}</p>
        </div>

        <div className="auth-right">
          <button className="close-btn" onClick={onClose}>×</button>
          <h3>{isSignIn ? "Sign In" : "Create Account"}</h3>

          <form className="auth-form">
            {!isSignIn && (
  <>
    <input type="text" placeholder="Full Name" required />
    <input
      type="tel"
      placeholder="Mobile Number"
      pattern="[0-9]{10}"
      maxLength="10"
      required
    />
  </>
)}

<input type="email" placeholder="Email" required />
<input type="password" placeholder="Password" required />

{isSignIn && (
  <p className="forgot-link">
    <a href="#">Forgot Password?</a>
  </p>
)}

{!isSignIn && (
  <>
    {/* 🔗 Referral link */}
    <p className="referral-link">
      <a href="#">Got a referral code?</a>
    </p>

    {/* ✅ WhatsApp checkbox */}
    <label className="whatsapp-optin">
      <input type="checkbox" />
      <FaWhatsapp className="whatsapp-icon" />
      Get updates on WhatsApp
    </label>

    {/* 🔐 Policy text */}
    <p className="policy-note">
      By creating an account, you agree to our{" "}
      <a href="#" className="policy-link">Privacy Policy</a>.
    </p>
  </>
)}


            <button type="submit" className="auth-action-btn">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <p className="toggle">
            {isSignIn ? "Don't have an account?" : "Already registered?"}{" "}
            <span onClick={() => setIsSignIn(!isSignIn)}>
              {isSignIn ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
