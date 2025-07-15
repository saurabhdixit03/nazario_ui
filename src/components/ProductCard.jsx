
import React from "react";

export default function ProductCard({ img, label, subtext }) {
  return (
    <div className="carousel-card">
      <img src={img} alt={label} />
      <h4>{label}</h4>
      <p>{subtext}</p>
    </div>
  );
}
