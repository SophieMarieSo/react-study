import React from 'react';
import { Button } from 'react-bootstrap';

export default function WeatherButton({ cities }) {
  return (
    <div>
      <Button variant='primary' size='sm'>
        Current Location
      </Button>
      {cities?.map((city, idx) => (
        <Button key={idx} variant='success' size='sm'>
          {city}
        </Button>
      ))}
    </div>
  );
}
