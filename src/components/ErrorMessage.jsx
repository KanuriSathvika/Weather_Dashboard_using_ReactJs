import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const ErrorMessage = () => {
  const { error } = useContext(WeatherContext);
  return error ? <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p> : null;
};

export default ErrorMessage;
