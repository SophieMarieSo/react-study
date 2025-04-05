import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import CurrentDate from './components/CurrentDate';
import { Alert, Spinner } from 'react-bootstrap';

function App() {
  const apiKey = process.env.REACT_APP_WEATHER_API;
  const cities = ['new york', 'tokyo', 'sydney', 'paris'];
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (city) getWeatherByCity();
    else getCurrentLocation();
  }, [city]);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCity = async () => {
    setLoading(true);
    setError(false);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const resp = await axios.get(url);
      setWeather(resp.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setErrorMsg(error.message);
    }
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    setLoading(true);
    setError(false);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
      const resp = await axios.get(url);
      setWeather(resp.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setErrorMsg(error.message);
    }
  };

  return (
    <div className='container'>
      <CurrentDate />
      {loading ? (
        <Spinner className='loading' animation='border' variant='secondary' />
      ) : (
        <WeatherBox weather={weather} city={city} />
      )}
      {error && <Alert variant='danger'>{errorMsg}</Alert>}
      <WeatherButton cities={cities} city={city} setCity={setCity} />
    </div>
  );
}

export default App;
