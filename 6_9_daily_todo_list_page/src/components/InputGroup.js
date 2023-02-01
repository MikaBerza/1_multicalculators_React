import React, { useState } from 'react';

function InputGroup({ value, handleChange, addNewNoteElement }) {
  return (
    <div className='main-item2'>
      <input
        id='main-input'
        type='text'
        placeholder=' запишите своё дело сюда'
        autoComplete='off'
        value={value}
        onChange={(event) => handleChange(event)}
      />
      <button id='main-button' onClick={addNewNoteElement}>
        Добавить
      </button>
    </div>
  );
}
export default InputGroup;
