import React, { useState } from 'react';
//
//
//
function Search({ value, handleChangeInput }) {
  return (
    <input
      className='main__input-search'
      type='search'
      id='site-search'
      placeholder='&#128269; поиск записей'
      value={value}
      onChange={handleChangeInput}
    />
  );
}

export default Search;
