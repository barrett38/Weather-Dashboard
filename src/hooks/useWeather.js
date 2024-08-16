import { useState, useCallback } from "react";
import axios from "axios";
require("dotenv").config();

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchWeather = useCallback(async (city) => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherResponse.data.coord.lat}&lon=${weatherResponse.data.coord.lon}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
      );

      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
      setForecastData(null);
    }
  }, []);

  return { weatherData, forecastData, fetchWeather };
};

export default useWeather;
