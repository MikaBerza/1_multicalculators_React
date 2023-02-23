//
//
//
function ButtonCalculate({calculateNumberOfProductData}) {
  return (
    <button
      id='btnProduct'
      className='btn btn-success btn__itemOne'
      type='button'
      onClick={calculateNumberOfProductData}
    >
      Рассчитать
    </button>
  );
}

export default ButtonCalculate;
