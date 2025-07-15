
import React from "react";
import { FaStar } from "react-icons/fa";
import "../styles/ReviewCard.css";

export default function ReviewCard({ name, rating, review, date }) {
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating ? "filled" : "empty"} />
          ))}
        </div>
        <span className="verified-badge">✔ Verified Purchase</span>
      </div>
      <p className="review-text">“{review}”</p>
      <p className="reviewer">
        {name} <span className="review-date">| {date}</span>
      </p>
    </div>
  );
}
