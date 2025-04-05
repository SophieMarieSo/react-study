import dayjs from 'dayjs';
import React from 'react';
import { Badge } from 'react-bootstrap';

export default function CurrentDate() {
  return (
    <h6 className='today'>
      <Badge pill bg='secondary'>
        TODAY
      </Badge>{' '}
      {dayjs().format('YYYY년 MM월 DD일')}
    </h6>
  );
}
