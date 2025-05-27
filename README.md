# Weather Dashboard

A modern, responsive weather dashboard built with React and Vite that displays current weather conditions and 3-day forecasts for any city worldwide.

## Features

- 🌤️ Real-time weather data using WeatherAPI.com
- 🎨 Modern UI with glassmorphism design
- 📱 Fully responsive layout for all devices
- 🌡️ Temperature unit toggle (Celsius/Fahrenheit)
- 🔍 City search functionality
- 📊 3-day weather forecast
- 🎯 Detailed weather metrics (temperature, humidity, wind speed)
- 💾 Persistent settings (last searched city and temperature unit)
- ⚡ Fast loading with React Query data caching

## Tech Stack

- React 18
- Vite
- React Query
- WeatherAPI.com
- CSS3 (with modern features)
- React Context API
- Error Boundary for error handling

## Project Structure

```
src/
├── assets/          # Static assets and images
├── components/      # Reusable React components
├── context/        # React Context for state management
├── hooks/          # Custom React hooks
└── utils/          # Utility functions and API handling
```

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your WeatherAPI.com API key:
```env
VITE_WEATHER_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## Development Approach

### Design Decisions

1. **Modern UI with Glassmorphism**
   - Implemented a clean, modern interface using glassmorphism effects
   - Used semi-transparent backgrounds with blur effects
   - Added subtle shadows and borders for depth
   - Created smooth transitions for interactive elements

2. **Responsive Layout**
   - Designed mobile-first with responsive breakpoints
   - Created flexible grid systems for forecast cards
   - Adjusted typography and spacing for different screen sizes
   - Implemented vertical layouts for mobile devices

3. **State Management**
   - Used React Context for global state management
   - Implemented local storage for user preferences
   - Added React Query for efficient data fetching and caching
   - Created custom hooks for reusable logic

4. **User Experience**
   - Added loading states for better feedback
   - Implemented error handling with clear messages
   - Created smooth animations for interactions
   - Added persistent storage for last searched city

### Technical Implementation

1. **Component Structure**
   - Created reusable components for weather cards
   - Implemented separate components for current weather and forecast
   - Added error boundary for graceful error handling
   - Created a search component with debounced input

2. **Styling Approach**
   - Used CSS3 with modern features
   - Implemented CSS variables for consistent theming
   - Added media queries for responsive design
   - Created reusable utility classes

3. **API Integration**
   - Integrated WeatherAPI.com for weather data
   - Implemented efficient data caching
   - Added error handling for API failures
   - Created utility functions for data transformation

4. **Performance Optimization**
   - Implemented React Query for data caching
   - Used lazy loading for components
   - Optimized re-renders with proper state management
   - Added debouncing for search functionality

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Future Enhancements

- Add weather alerts
- Implement geolocation for automatic city detection
- Add weather maps
- Include more detailed weather metrics
- Add theme customization
- Implement PWA support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/)
- Icons from [Weather Icons](https://erikflowers.github.io/weather-icons/)
- Background image from [Unsplash](https://unsplash.com)
