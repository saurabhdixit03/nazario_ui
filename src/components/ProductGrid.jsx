
import React, { useState } from "react";
import "../styles/ProductGrid.css";

const products = [
  { img: "/ci1.jpeg", title: "Classic Black Frame" },
  { img: "/ci2.jpeg", title: "Transparent Round Glass" },
  { img: "/ci3.jpeg", title: "Retro Matte Finish" },
  { img: "/ci4.jpg", title: "Aviator Metal Frame" },
  { img: "/ci5.jpg", title: "Blue Light Blocker" },
  { img: "/ci6.jpeg", title: "Premium Silver Style" },
  { img: "/ci7.jpg", title: "Matte Brown" },
  { img: "/ci8.jpg", title: "Crystal Clear" },
];

export default function ProductGrid() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleProducts = products.slice(startIndex, startIndex + 4);

  const nextSlide = () => {
    if (startIndex + 4 < products.length) {
      setStartIndex(startIndex + 4);
    }
  };

  const prevSlide = () => {
    if (startIndex - 4 >= 0) {
      setStartIndex(startIndex - 4);
    }
  };

  return (
    <section className="product-showcase">
      <div className="left-banner">
        <h2 className="banner-heading">Crafted for Everyday Elegance</h2>
        <p>Style that reflects your vibe. Only at Nazario.</p>
      </div>

      <div className="right-cards">
  <button className="arrow-btn" onClick={prevSlide}>←</button>

  <div className="card-slider-wrapper">
    <div className="card-group">
      {visibleProducts.map((p, i) => (
        <div key={i} className="product-card">
          <div className="card-img">
            <img src={p.img} alt={p.title} />
          </div>
          <h4 className="card-title">{p.title}</h4>
          <button className="explore-btn">Explore</button>

        </div>
      ))}
    </div>
  </div>

  <button className="arrow-btn" onClick={nextSlide}>→</button>
</div>

    </section>
  );
}
