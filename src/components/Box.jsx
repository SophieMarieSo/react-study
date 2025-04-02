import React from 'react';

export default function Box({ title }) {
  return (
    <div className='box'>
      <h1>{title}</h1>
      <img
        className='item-img'
        src='https://blackbearwow.github.io/image/rockPaperScissors/rock.png'
        alt=''
      />
      <h2>WIN</h2>
    </div>
  );
}
