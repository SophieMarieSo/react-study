import React from 'react';
import { Button } from 'react-bootstrap';

export default function WeatherButton({ cities, city, setCity }) {
  return (
    <div>
      <Button
        className='weather-btn'
        variant={!city ? 'primary' : 'outline-primary'}
        size='sm'
        onClick={() => setCity(null)}
      >
        Current
      </Button>
      {cities?.map((c, idx) => (
        <Button
          key={idx}
          className='weather-btn'
          variant={c === city ? 'success' : 'outline-success'}
          size='sm'
          onClick={() => setCity(c)}
        >
          {c}
        </Button>
      ))}
    </div>
  );
}
