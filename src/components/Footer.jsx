
import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaCommentDots } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__top">
          <div className="footer__section">
            <h3>About Nazario</h3>
            <p>
              Nazario is a premium eyewear brand blending fashion and function. Our
              frames are crafted for comfort, clarity, and confidence.
            </p>
          </div>

          <div className="footer__section">
            <h3>Contact Us</h3>
            <p>Email: support@nazario.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Mon–Sat: 10 AM – 6 PM</p>
          </div>

          <div className="footer__section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Nazario Eyewear. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating Social Icons */}
      <div className="floating-icons">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaCommentDots title="Chat with us" /></a>
      </div>
    </>
  );
}
