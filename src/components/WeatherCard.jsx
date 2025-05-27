import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { convertTemp } from '../utils/api';

const WeatherCard = () => {
  const { weatherData, isLoading, unit } = useContext(WeatherContext);

  if (isLoading) {
    return (
      <div className="loading-state">
        Loading weather data...
      </div>
    );
  }

  if (!weatherData) return null;

  const { location, current } = weatherData;
  const iconUrl = current.condition.icon.replace('http://', 'https://');
  const temp = convertTemp(current.temp_c, unit);
  const feelsLike = convertTemp(current.feelslike_c, unit);
  
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2 className="weather-city">{location.name}</h2>
        <p className="weather-date">{currentDate}</p>
      </div>

      <div className="weather-main">
        <img 
          src={iconUrl} 
          alt={current.condition.text}
          className="weather-icon"
        />
        <div className="weather-temp">
          {Math.round(temp)}°{unit}
        </div>
        <p className="weather-condition">
          {current.condition.text}
        </p>
      </div>

      <div className="weather-details-grid">
        <div className="weather-detail-card feels-like">
          <h3 className="detail-title">Feels Like</h3>
          <div className="detail-value">
            {Math.round(feelsLike)}°{unit}
          </div>
        </div>

        <div className="weather-detail-card humidity">
          <h3 className="detail-title">Humidity</h3>
          <div className="detail-value">
            {current.humidity}%
          </div>
        </div>

        <div className="weather-detail-card wind">
          <h3 className="detail-title">Wind Speed</h3>
          <div className="detail-value">
            {current.wind_kph} km/h
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
