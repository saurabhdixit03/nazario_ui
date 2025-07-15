
import React from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/SearchBar.css";

export default function SearchBar() {
  return (
    <div className="navbar__search">
      <FaSearch className="search-icon" />
      <input type="text" placeholder="What are you looking for?" />
    </div>
  );
}
