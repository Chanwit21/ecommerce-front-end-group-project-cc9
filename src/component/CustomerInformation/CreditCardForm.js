import React from 'react';

function CreditCardForm({ setIsSelectAnotherCard }) {
  const handleClickBack = () => {
    setIsSelectAnotherCard(false);
  };

  return (
    <>
      <div style={{ width: '90%' }}>
        <form>
          <div className='row mt-4'>
            <div className='mb-3 col-12'>
              <input type='text' className='form-control border-dark' placeholder='Card Number' />
            </div>
            <div className='mb-3 col-12'>
              <input type='text' className='form-control border-dark' placeholder='Cardholder Name' />
            </div>
            <div className='mb-3 col-6'>
              <input type='text' className='form-control border-dark' placeholder='Expiration Date (MM/YY)' />
            </div>
            <div className='mb-3 col-6'>
              <input type='password' className='form-control border-dark' placeholder='Security Code' />
            </div>
          </div>
        </form>
        <button type='button' className='btn' onClick={handleClickBack}>
          {'< Back To Choose Card'}
        </button>
      </div>
    </>
  );
}

export default CreditCardForm;
