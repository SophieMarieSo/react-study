import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';

function App() {
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
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const resp = await axios.get(url);
    console.log('====================================');
    console.log(resp);
    console.log('====================================');
  };

  return (
    <div className='container'>
      <WeatherBox />
      <WeatherButton />
    </div>
  );
}

export default App;
