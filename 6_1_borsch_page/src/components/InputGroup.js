//
//
//
function InputGroup({ value, handleChangeInput }) {
  return (
    <table className='table table-bordered table-product'>
      <thead>
        <tr>
          <th scope='row'>Введите количество порций</th>
          <td>
            <input 
            type='number' 
            id='idProductInput'
            value={value}
            onChange={handleChangeInput} 
            />
          </td>
          {/*<td><input type="number" id="idProductInput" value="0"/></td>*/}
        </tr>
      </thead>
    </table>
  );
}

export default InputGroup;
