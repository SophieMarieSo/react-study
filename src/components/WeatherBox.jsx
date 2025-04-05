import dayjs from 'dayjs';
import React from 'react';

export default function WeatherBox({ weather }) {
  const sunrise = dayjs(new Date(weather?.sys.sunrise * 1000)).format(
    'HH시mm분'
  );
  const sunset = dayjs(new Date(weather?.sys.sunset * 1000)).format('HH시mm분');

  return (
    <div className='weather-box'>
      <h5>
        🌞{sunrise} 🌜{sunset}
      </h5>
      <h3>{weather?.name}</h3>
      <h2 className='temperature'>
        {weather?.main.temp}°C{' '}
        <span className='feels-like'>
          feels like {Math.floor(weather?.main.feels_like)}°C
        </span>
      </h2>
      <h2>{weather?.weather[0].description}</h2>
    </div>
  );
}
