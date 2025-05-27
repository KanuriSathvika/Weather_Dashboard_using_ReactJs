import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { convertTemp } from '../utils/api';

const ForecastCard = () => {
  const { forecastData, isLoading, unit } = useContext(WeatherContext);

  if (isLoading) {
    return (
      <div className="loading-state">
        Loading forecast...
      </div>
    );
  }

  if (!forecastData?.forecast?.forecastday) {
    return null;
  }

  return (
    <div className="forecast-container">
      <h2 className="forecast-title">
        3-Day Forecast
      </h2>
      <div className="forecast-grid">
        {forecastData.forecast.forecastday.map((day) => {
          const maxTemp = convertTemp(day.day.maxtemp_c, unit);
          const minTemp = convertTemp(day.day.mintemp_c, unit);
          
          return (            <div key={day.date} className="forecast-card">
              <p className="forecast-date">
                {new Date(day.date).toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric'
                })}
              </p>
              <img
                src={day.day.condition.icon.replace('http://', 'https://')}
                alt={day.day.condition.text}
                className="forecast-icon"
              />
              <p className="forecast-condition">
                {day.day.condition.text}
              </p>
              <div className="forecast-temp">
                <p className="temp-range">
                  <span className="temp-high">{Math.round(maxTemp)}°</span>
                  {' / '}
                  <span className="temp-low">{Math.round(minTemp)}°</span>
                  {unit}
                </p>
                <p className="forecast-rain">
                  Rain: {day.day.daily_chance_of_rain}%
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastCard;
