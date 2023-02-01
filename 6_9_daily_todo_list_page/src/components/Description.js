import React, { useState } from 'react';

function Description({ item1, item2, item3 }) {
  return (
    <h5 className='main-item1__h5'>
      После добавления дела: <br />
      <span>{item1}</span>
      <br />
      <span>{item2}</span>
    </h5>
  );
}
export default Description;
