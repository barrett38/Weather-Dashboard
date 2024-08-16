import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSubmit(city);
      setCity(""); // Clear the input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        aria-label="city-input"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
