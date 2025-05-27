import { useQuery } from '@tanstack/react-query';
import { fetchWeather, fetchForecast } from '../utils/api';

export const useWeatherData = (city) => {
  console.log('useWeatherData hook called with city:', city);
  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    error: weatherError,
    isError: isWeatherError
  } = useQuery({
    queryKey: ['weather', city],
    queryFn: () => fetchWeather(city),
    enabled: !!city,
    staleTime: 300000, // 5 minutes
    retry: 1,
    refetchOnWindowFocus: false
  });
  const {
    data: forecastData,
    isLoading: isForecastLoading,
    error: forecastError,
    isError: isForecastError
  } = useQuery({
    queryKey: ['forecast', city],
    queryFn: () => fetchForecast(city),
    enabled: !!city,
    staleTime: 300000, // 5 minutes
    retry: 1,
    refetchOnWindowFocus: false
  });

  return {
    weatherData,
    forecastData,
    isLoading: isWeatherLoading || isForecastLoading,
    error: weatherError || forecastError
  };
};