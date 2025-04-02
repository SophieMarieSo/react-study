import React from 'react';

export default function Box({ title }) {
  const onErrorImg = (e) => {
    e.target.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJMiUr-wVmSLxrcyBdNfU5DCBOkq7mmCWog&s';
  };

  return (
    <div className='box'>
      <h1>{title}</h1>
      <img
        className='item-img'
        src='https://blackbearwow.gith/image/rockPaperScissors/rock.png'
        alt=''
        onError={onErrorImg}
      />
      <h2>WIN</h2>
    </div>
  );
}
