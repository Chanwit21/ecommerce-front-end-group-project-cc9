import React from 'react';
import visaIcon from '../../pic/icons/294654_visa_icon.svg';
import masterCardIcon from '../../pic/icons/380809_card_master_mastercard_icon.svg';

function CreditCardForm({ setIsSelectAnotherCard }) {
  const handleClickBack = () => {
    setIsSelectAnotherCard(false);
  };

  return (
    <>
      <div className='d-flex mt-5 justify-content-between' style={{ width: '90%', borderBottom: '1px solid #0003' }}>
        <h4>PAYMENT</h4>
        <div>
          <img
            src={visaIcon}
            alt='visa-icon'
            style={{
              height: '2.083333333333333vw',
              border: '2px solid #0003',
              borderRadius: '0.54vw',
              width: '3.020833333333333vw',
            }}
          />
          <img
            className='ms-2 p-1'
            src={masterCardIcon}
            alt='visa-icon'
            style={{ height: '2.083333333333333vw', border: '2px solid #0003', borderRadius: '0.54vw' }}
          />
        </div>
      </div>
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
