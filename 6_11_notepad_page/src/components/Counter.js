import React, { useState } from 'react';
//
//
//

/*Заменил 'выполненные задачи/ невыполненные задачи' на просто 'выполненные,
невыполненные' */
function Counter({ counter, totalEntries }) {
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
        low={totalEntries * 0.2}
        high={totalEntries * 0.8}
        max={totalEntries}
        optimum={totalEntries * 0.9}
      ></meter>
    </div>
  );
}

export default Counter;
