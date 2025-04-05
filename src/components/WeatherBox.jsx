import dayjs from 'dayjs';
import React from 'react';

export default function WeatherBox({ weather, city }) {
  const sunrise = dayjs(new Date(weather?.sys.sunrise * 1000)).format(
    'HH시mm분'
  );
  const sunset = dayjs(new Date(weather?.sys.sunset * 1000)).format('HH시mm분');

  return (
    <div className='weather-box'>
      {!city && (
        <h6>
          🌞{sunrise} 🌜{sunset}
        </h6>
      )}
      <h2>{weather?.name}</h2>
      <h2 className='temperature'>
        {Math.floor(weather?.main.temp)}°C{' '}
        <span className='feels-like'>
          feels like {Math.floor(weather?.main.feels_like)}°C
        </span>
      </h2>
      <h6 className='description'>
        {weather?.weather[0].description.toUpperCase()}
      </h6>
    </div>
  );
}
