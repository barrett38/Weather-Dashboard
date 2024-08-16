import React from "react";

const ForecastDisplay = ({ forecastData }) => {
  if (!forecastData || !forecastData.daily) return null;

  return (
    <div>
      <h3>7-Day Forecast</h3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {forecastData.daily.map((day, index) => (
          <div key={index}>
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p>Temp: {day.temp.day}°C</p>
            <p>Weather: {day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastDisplay;
