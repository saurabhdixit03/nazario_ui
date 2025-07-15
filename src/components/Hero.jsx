
import React from "react";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__badge">#EyewearGoals</span>
        <h1 className="hero__headline">
          Redefine Your <span>Vision</span> with Nazario
        </h1>
        <p className="hero__text">
          Premium eyewear crafted for unmatched <strong>style</strong>, 
          <strong>comfort</strong>, and <strong>clarity</strong>.
        </p>
        <button className="hero__cta">Shop Now</button>
      </div>

      <div className="hero__image">
        <img src="/img1e.jpeg" alt="Eyewear banner" />
      </div>
    </section>
  );
}
