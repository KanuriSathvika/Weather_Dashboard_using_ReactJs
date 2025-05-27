import { createContext, useState, useEffect } from 'react';
import { fetchWeather, fetchForecast } from '../utils/api';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(() => localStorage.getItem('lastCity') || 'London');
  const [unit, setUnit] = useState(() => localStorage.getItem('tempUnit') || 'C');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const [weather, forecast] = await Promise.all([
          fetchWeather(city),
          fetchForecast(city)
        ]);
        console.log('Weather data:', weather);
        console.log('Forecast data:', forecast);
        setWeatherData(weather);
        setForecastData(forecast);
        localStorage.setItem('lastCity', city);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [city]);

  useEffect(() => {
    localStorage.setItem('tempUnit', unit);
  }, [unit]);

  const value = {
    city,
    setCity,
    unit,
    setUnit,
    weatherData,
    forecastData,
    isLoading,
    error
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};
