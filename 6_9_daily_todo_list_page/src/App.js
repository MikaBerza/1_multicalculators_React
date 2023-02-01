import React, { useState } from 'react';
// уникальный идентификатор
import uuid from 'react-uuid';

// Импортируем заголовок
import Heading from './components/Heading.js';
// Импортируем описание
import Description from './components/Description.js';
// Импортируем группу ввода
import InputGroup from './components/InputGroup.js';
// Импортируем группу вывода
import OutputGroup from './components/OutputGroup';

function App() {
  // стейт value, содержащий в себе value инпута
  const [value, setValue] = useState('');
  // стейт notes, содержащий в себе массив добавленных элементов с инпута
  const [notes, setNotes] = useState([]);
  // стйт done, для управления состоянием (сделано/не сделано)
  const [done, setDone] = useState(false);

  //__функция указывает на значение input
  function handleChange(event) {
    // event.target - ссылка на DOM элемент инпута
    // event.target.value - текущий текст инпута
    setValue(event.target.value);
    // console.log(value);
  }

  //___функция добавляет новую заметку в список
  function addNewNoteElement() {
    if (value === '') {
      console.log('Пустая строка');
    } else if (value !== '') {
      setNotes([...notes, { id: uuid(), text: value, change: done }]);
      setValue('');
    }
  }

  //___функция изменяет состояние (сделано/не сделано)
  function markAsDone(elem) {
    if (elem.change === false) {
      setDone((elem.change = true));
    } else {
      setDone((elem.change = false));
    }
  }

  //___функция удаляет заметку из списка
  function deleteNoteElement(event, index) {
    if (event.target.className === 'close') {
      // вырезаем нужный нам элемент
      setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
    } else {
      setNotes(notes);
    }
  }

  return (
    <main className='flex-container'>
      {/*===Заголовок===*/}
      <Heading heading={'Ежедневный список дел'} />
      {/*===Описание===*/}
      <Description
        item1={'- одинарное нажатие на текст вносит дело в список выполненных;'}
        item2={'- одинарное нажатие на красный крестик удаляет дело.'}
      />
      {/*===Группа ввода===*/}
      <InputGroup
        value={value}
        handleChange={handleChange}
        addNewNoteElement={addNewNoteElement}
      />
      {/*===Группа вывода (формируем записи)===*/}
      <OutputGroup
        notes={notes}
        markAsDone={markAsDone}
        deleteNoteElement={deleteNoteElement}
      />
    </main>
  );
}
export default App;
