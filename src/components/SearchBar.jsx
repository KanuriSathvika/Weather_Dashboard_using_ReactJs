import { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const SearchBar = () => {
  const { setCity } = useContext(WeatherContext);
  const [input, setInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      setIsSubmitting(true);
      console.log('Searching for city:', input.trim());
      setCity(input.trim());
      setInput('');
    } catch (error) {
      console.error('Error in search:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (    <form 
      onSubmit={handleSubmit} 
      className="search-form"
    >
      <input
        type="text"
        placeholder="Enter city name (e.g., London)"
        value={input}
        onChange={(e) => setInput(e.target.value)}        className="search-input"
        disabled={isSubmitting}
      />
      <button 
        type="submit"
        disabled={isSubmitting || !input.trim()}        className="search-button"
      >
        {isSubmitting ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
};

export default SearchBar;
