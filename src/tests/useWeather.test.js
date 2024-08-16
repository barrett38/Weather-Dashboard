import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import useWeather from "../hooks/useWeather";

jest.mock("axios");

test("fetches weather and forecast data successfully", async () => {
  const weatherData = {
    coord: { lat: 51.5074, lon: -0.1278 },
    main: { temp: 20 },
    weather: [{ description: "clear sky" }],
  };
  const forecastData = {
    daily: [
      {
        dt: 1628496000,
        temp: { day: 22 },
        weather: [{ description: "clear sky" }],
      },
    ],
  };

  axios.get.mockResolvedValueOnce({ data: weatherData });
  axios.get.mockResolvedValueOnce({ data: forecastData });

  const { result, waitForNextUpdate } = renderHook(() => useWeather());

  result.current.fetchWeather("London");
  await waitForNextUpdate();

  expect(result.current.weatherData).toEqual(weatherData);
  expect(result.current.forecastData).toEqual(forecastData);
});
