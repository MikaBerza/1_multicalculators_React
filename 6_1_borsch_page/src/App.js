//
import { useState } from 'react';
// import uuid from 'react-uuid'
import { v4 } from 'uuid';

import './App.css';
import '../src/bootstrap.min.css';
import Heading from './components/Heading';
import Description from './components/Description';
import InputGroup from './components/InputGroup';
import ButtonCalculate from './components/ButtonCalculate';
import TableOutputGroup from './components/TableOutputGroup';

// Массив c объектом данных позиции продукта!!!
const formProductData = [
  {
    id: v4(),
    position: 1,
    products: 'Говядина',
    quantity: 0,
    unit: 'г',
    weightOfOneServing: 62.5,
  },
  {
    id: v4(),
    position: 2,
    products: 'Картофель',
    quantity: 0,
    unit: 'г',
    weightOfOneServing: 62.5,
  },
  {
    id: v4(),
    position: 3,
    products: 'Капуста белокочанная',
    quantity: 0,
    unit: 'г',
    weightOfOneServing: 62.5,
  },
  {
    id: v4(),
    position: 4,
    products: 'Свекла',
    quantity: 0,
    unit: 'г',
    weightOfOneServing: 37.5,
  },
  {
    id: v4(),
    position: 5,
    products: 'Морковь',
    quantity: 0,
    unit: 'г',
    weightOfOneServing: 37.5,
  },
  {
    id: v4(),
    position: 6,
    products: 'Лук репчатый',
    quantity: 0,
    unit: 'шт',
    weightOfOneServing: 0.25,
  },
  {
    id: v4(),
    position: 7,
    products: 'Чернослив',
    quantity: 0,
    unit: 'шт',
    weightOfOneServing: 0.625,
  },
  {
    id: v4(),
    position: 8,
    products: 'Зелень петрушки',
    quantity: 0,
    unit: 'пуч',
    weightOfOneServing: 0.125,
  },
  {
    id: v4(),
    position: 9,
    products: 'Томат паста',
    quantity: 0,
    unit: 'ст.л',
    weightOfOneServing: 0.25,
  },
  {
    id: v4(),
    position: 10,
    products: 'Соль',
    quantity: 0,
    unit: 'ст.л',
    weightOfOneServing: 'по вкусу',
  },
  {
    id: v4(),
    position: 11,
    products: 'Масло растительное',
    quantity: 0,
    unit: 'ст.л',
    weightOfOneServing: 0.25,
  },
  {
    id: v4(),
    position: 12,
    products: 'Вода',
    quantity: 0,
    unit: 'ст.л',
    weightOfOneServing: 0.25,
  },
];

function App() {
  const [value, setValue] = useState(0);

  // начальное состояние продуктов
  const [productData, setProductData] = useState(formProductData);

  //___функция указывает на значение введенное в input
  function handleChangeInput(event) {
    // event.target - ссылка на DOM элемент input
    // event.target.value - текущий текст input
    setValue(event.target.value);
  }

  //___функция рассчитывает требуемое количество продуктов для числа порций
  function calculateNumberOfProductData() {
    return setProductData(
      productData.map(function (item) {
        if (value === '' || value[0] === '-' || value.length > 3 || value < 1) {
          setValue(0);
          return {
            ...item,
            quantity: 0,
          };
        } else if (item.weightOfOneServing === 'по вкусу') {
          return {
            ...item,
            quantity: 'по вкусу',
          };
        } else {
          return {
            ...item,
            quantity: (item.weightOfOneServing * value).toFixed(2),
          };
        }
      })
    );
  }

  return (
    <main>
      {/* <!-----SectionOne---------------------------------------------------------------------------> */}
      <section className='section-one'>
        <Heading />
        <Description />
        {/* <!--Адаптивная таблица (.table-responsive) для горизонтальной прокрутки таблиц--> */}
        <div className='container-xxl table-responsive'>
          <InputGroup value={value} handleChangeInput={handleChangeInput} />
          <div className='btnBlock-section-one'>
            <ButtonCalculate calculateNumberOfProductData={calculateNumberOfProductData} />
          </div>
          <TableOutputGroup productData={productData} value={value} />
        </div>
      </section>
    </main>
  );
}
export default App;
