import React, { useState } from "react";
import "./SearchBar.css";
import searchbar from "../assets/searchbar.png";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
    }
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search Location"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button><img onClick={handleSearch} src={searchbar} /></button>

    </div>
  );
};

export default SearchBar;
