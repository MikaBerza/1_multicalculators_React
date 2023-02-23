import TableRow from './TableRow';
//
//
//
function TableOutputGroup({ productData }) {
  return (
    <table className='table table-bordered table-product'>
      <thead>
        <tr>
          <th className='table-heading' scope='col'>
            № поз.
          </th>
          <th className='table-heading' scope='col'>
            Продукты
          </th>
          <th className='table-heading' scope='col'>
            Количество
          </th>
          <th className='table-heading' scope='col'>
            Ед. изм.
          </th>
        </tr>
      </thead>
      <tbody>
        {productData.map(function (note) {
          return <TableRow key={note.id} 
          position={note.position} 
          products={note.products} 
          quantity={note.quantity} 
          unit={note.unit}
          />;
        })}
      </tbody>
    </table>
  );
}

export default TableOutputGroup;
