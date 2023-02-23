// import FillingInTheLine from './FillingInTheLine';

//
//
//

function TableRow({ position, products, quantity, unit }) {
  return (
    <tr>
      <th className='table-num-position' scope='row'>
        {position}
      </th>
      <td className='table-products'>{products}</td>
      <td className='table-quantity'>{quantity}</td>
      <td className='table-unit'>{unit}</td>
    </tr>
  );
}
export default TableRow;
