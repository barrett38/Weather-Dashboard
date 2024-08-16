import React from "react";

const CityHistory = ({ history, onSelect }) => {
  if (history.length === 0) return null;

  return (
    <div>
      <h4>Recently Searched Cities</h4>
      <ul>
        {history.map((city, index) => (
          <li key={index} onClick={() => onSelect(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityHistory;
