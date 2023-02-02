import React, { useState } from 'react';
//
//
//
function Filter({ select, handleChangeSelect }) {
  return (
    <div className='main__filtering'>
      <span className='main__filtering-text'>фильтрация</span>
      <select
        className='main__filtering-filter'
        value={select}
        onChange={handleChangeSelect}
      >
        <option defaultValue value='Все'>
          Все
        </option>
        <option value='Выполненные'>Выполненные</option>
        <option value='Невыполненные'>Невыполненные</option>
      </select>
    </div>
  );
}

export default Filter;
