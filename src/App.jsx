import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WeatherProvider } from './context/WeatherContext';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import TemperatureToggle from './components/TemperatureToggle';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 300000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <main className="container">
          <h1 className="app-title">Weather Dashboard</h1>
          <div style={{ marginBottom: '2rem' }}>
            <SearchBar />
            <TemperatureToggle />
          </div>
          <ErrorMessage />
          <WeatherCard />
          <ForecastCard />
        </main>
      </WeatherProvider>
    </QueryClientProvider>
  );
}

export default App;
