const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || '37cdd8a5cc5a4f01a22161829252605';

export const fetchWeather = async (city) => {
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`;
    console.log('Fetching weather:', url);
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message);
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};

export const fetchForecast = async (city) => {
  try {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(city)}&days=3&aqi=no`;
    console.log('Fetching forecast:', url);
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message);
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};

export const convertTemp = (celsius, unit = 'C') => {
  return unit === 'F' ? (celsius * 9/5) + 32 : celsius;
};
