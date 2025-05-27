import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const TemperatureToggle = () => {
  const { unit, setUnit } = useContext(WeatherContext);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      marginBottom: '1rem'
    }}>
      <button
        onClick={() => setUnit('C')}
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '8px',
          background: unit === 'C' 
            ? 'linear-gradient(135deg, #2196f3, #1976d2)'
            : 'rgba(255, 255, 255, 0.9)',
          color: unit === 'C' ? '#fff' : '#2196f3',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          fontWeight: '500'
        }}
      >
        °C
      </button>
      <button
        onClick={() => setUnit('F')}
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '8px',
          background: unit === 'F'
            ? 'linear-gradient(135deg, #2196f3, #1976d2)'
            : 'rgba(255, 255, 255, 0.9)',
          color: unit === 'F' ? '#fff' : '#2196f3',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          fontWeight: '500'
        }}
      >
        °F
      </button>
    </div>
  );
};

export default TemperatureToggle;
