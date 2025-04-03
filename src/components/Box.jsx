import React from 'react';

export default function Box({ title, select, result }) {
  const onErrorImg = (e) => {
    e.target.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJMiUr-wVmSLxrcyBdNfU5DCBOkq7mmCWog&s';
  };

  let resultValue;
  if (title === 'YOU') {
    resultValue = result ? result : 'PLAY';
  } else {
    // computer
    resultValue =
      result === 'TIE'
        ? result
        : result === 'WIN'
        ? 'LOSE'
        : result === 'LOSE'
        ? 'WIN'
        : 'PLAY';
  }

  return (
    <div className={`box ${resultValue.toLowerCase()}`}>
      <h1 className='box-title'>{title}</h1>
      <img
        className='item-img'
        src={select?.img}
        alt={select?.name}
        onError={onErrorImg}
      />
      <h2 className='result'>{resultValue}</h2>
    </div>
  );
}
