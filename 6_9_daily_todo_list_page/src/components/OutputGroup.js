import React, { useState } from 'react';

function OutputGroup({ notes, markAsDone, deleteNoteElement }) {
  // отрисовка полученных записей
  const result = notes.map(function (elem, index) {
    // console.log(elem.id);
    return (
      <ol key={elem.id} className='content-items'>
        <li
          key={elem.id}
          onClick={() => markAsDone(elem)}
          className={
            elem.change ? 'content-items__li done' : 'content-items__li'
          }
        >
          {elem.text}
          <span
            className='close'
            onClick={(event) => deleteNoteElement(event, index)}
          >
            x
          </span>
        </li>
      </ol>
    );
  });

  return <>{result}</>;
}
export default OutputGroup;
