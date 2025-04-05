import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';

function App() {
  const cities = ['NewYork', 'Tokyo', 'Bali'];
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const apiKey = process.env.REACT_APP_WEATHER_API;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const resp = await axios.get(url);
    setWeather(resp.data);
  };

  return (
    <div className='container'>
      <WeatherBox weather={weather} />
      <WeatherButton cities={cities} />
    </div>
  );
}

export default App;
