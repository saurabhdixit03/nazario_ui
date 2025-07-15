import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import FilterBar from "./components/FilterBar";
import ReviewCard from "./components/ReviewCard";
import Wishlist from "./components/Wishlist";
import AuthPopup from "./components/AuthPopup";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import "./styles/variables.css";
import "./styles/ProductGrid.css";
import "./styles/FilterBar.css";

function HomePage() {
  return (
    <>
      <Hero />
      <div style={{ padding: "0 40px" }}>
        <div className="center-heading-wrapper">
          <h2 className="reviews-heading">Explore Our Frames</h2>
        </div>
        <ProductGrid />
      </div>
      <section className="reviews-section">
        <div className="center-heading-wrapper">
          <h2 className="reviews-heading">Customer Love for Nazario</h2>
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <ReviewCard
            name="Aarav Sharma"
            rating={5}
            review="Absolutely love the quality of these frames!"
            date="July 10, 2025"
          />
          <ReviewCard
            name="Mira Kapoor"
            rating={4}
            review="Very stylish and comfortable. Fast delivery too!"
            date="July 9, 2025"
          />
          <ReviewCard
            name="Ravi Menon"
            rating={5}
            review="These glasses are top-notch. Super comfy and trendy!"
            date="July 8, 2025"
          />
        </div>
      </section>
    </>
  );
}

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="sticky-wrapper">
        <Navbar onAuthClick={() => setShowPopup(true)} />
        <FilterBar />
      </div>

      {showPopup && <AuthPopup onClose={() => setShowPopup(false)} />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
