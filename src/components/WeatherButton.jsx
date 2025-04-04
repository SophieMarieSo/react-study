import React from 'react';
import { Button } from 'react-bootstrap';

export default function WeatherButton() {
  return (
    <div>
      <Button variant='primary' size='sm'>
        Current
      </Button>
      <Button variant='success' size='sm'>
        NewYork
      </Button>
      <Button variant='success' size='sm'>
        Tokyo
      </Button>
      <Button variant='success' size='sm'>
        Bali
      </Button>
    </div>
  );
}
