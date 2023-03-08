import React, { useState } from 'react';
//
//
//

function Counter({ counter, totalEntries }) {
  const twentyPercent = 0.2;
  const eightyPercent = 0.8;
  const ninetyPercent = 0.9;

  return (
    <div className='main__counter'>
      <span className='main__counter-text-done'>
        выполненные-{counter}
        {<br />}невыполненные-
        {totalEntries - counter}
      </span>
      <meter
        className='main__counter-indicator'
        value={counter}
        min='0'
        low={totalEntries * twentyPercent}
        high={totalEntries * eightyPercent}
        max={totalEntries}
        optimum={totalEntries * ninetyPercent}
      ></meter>
    </div>
  );
}

export default Counter;
