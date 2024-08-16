import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import ForecastDisplay from "./components/ForecastDisplay";
import CityHistory from "./components/CityHistory";
import useWeather from "./hooks/useWeather";

function App() {
  const [city, setCity] = useState("");
  const [history, setHistory] = useState(
    () => JSON.parse(localStorage.getItem("cityHistory")) || []
  );
  const { weatherData, forecastData, fetchWeather } = useWeather();

  useEffect(() => {
    if (city) {
      fetchWeather(city);
      setHistory((prevHistory) => {
        const newHistory = [
          city,
          ...prevHistory.filter((c) => c !== city),
        ].slice(0, 5);
        localStorage.setItem("cityHistory", JSON.stringify(newHistory));
        return newHistory;
      });
    }
  }, [city, fetchWeather]);

  return (
    <div>
      <SearchBar onSubmit={setCity} />
      <WeatherDisplay weatherData={weatherData} />
      <ForecastDisplay forecastData={forecastData} />
      <CityHistory history={history} onSelect={setCity} />
    </div>
  );
}

export default App;
