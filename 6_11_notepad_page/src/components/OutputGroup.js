import React, { useState } from 'react';
//
//
//
function OutputGroup({
  note,
  index,
  editNote,
  handleChangeCheckbox,
  getNumberActiveCheckboxes,
  deleteNoteElement,
}) {
  return (
    <li
      // если отмечен применяем дополнительный стиль
      className={
        note.edit ? 'main__list-item' : 'main__list-item transparently'
      }
    >
      <div className='main__list-item-block1'>
        <span
          className='main__list-item-text'
          id={note.id}
          onDoubleClick={(event) => {
            editNote(event, index, note.id, note.checkbox);
          }}
        >
          {note.text}
        </span>
        <input
          id={note.id}
          type='checkbox'
          checked={note.checkbox}
          onClick={handleChangeCheckbox}
          onChange={getNumberActiveCheckboxes}
        />
      </div>
      <div className='main__list-item-block2'>
        <span className='main__list-item-date'>
          {/* Метод toLocaleDateString() возвращает строку с 
            языкозависимым представлением части с датой в этой дате*/}
          {new Date(note.date).toLocaleDateString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
        <span
          className='main__list-item-close'
          id={note.id}
          onClick={(event) => {
            deleteNoteElement(event, index, note.id, note.checkbox);
          }}
        >
          x
        </span>
      </div>
    </li>
  );
}

export default OutputGroup;
