import React, { useState } from 'react';
import AddAddressForm from './CustomerInformation/AddAddressForm';
import CreditCardForm from './CustomerInformation/CreditCardForm';
import CustomerAddress from './CustomerInformation/CustomerAddress';
import Payment from './CustomerInformation/Payment';
import { customerCards } from '../mocks/customerCards';
import visaIcon from '../pic/icons/294654_visa_icon.svg';
import masterCardIcon from '../pic/icons/380809_card_master_mastercard_icon.svg';

function CustomerInformation({ customerAddress }) {
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [isSelectAnotherCard, setIsSelectAnotherCard] = useState(false);

  return (
    <>
      <h3>CUSTOMER INFORMATION</h3>
      <div
        className='mt-4 d-flex align-items-center justify-content-center rounded'
        style={{ height: '2.34375vw', width: '90%', backgroundColor: '#000', color: '#FFF' }}
      >
        <p className='m-0'>customermail@gmail.com</p>
      </div>
      {isAddingAddress ? (
        <AddAddressForm setIsAddingAddress={setIsAddingAddress} />
      ) : (
        <CustomerAddress customerAddress={customerAddress} setIsAddingAddress={setIsAddingAddress} />
      )}
      <div className='d-flex mt-5 justify-content-between' style={{ width: '90%', borderBottom: '1px solid #0003' }}>
        <h4>PAYMENT</h4>
        <div className='mb-2'>
          <img
            src={visaIcon}
            alt='visa-icon'
            style={{
              height: '2.083333333333333vw',
              border: '2px solid #0003',
              width: '3.020833333333333vw',
            }}
          />
          <img
            className='ms-2 p-1'
            src={masterCardIcon}
            alt='visa-icon'
            style={{ height: '2.083333333333333vw', border: '2px solid #0003' }}
          />
        </div>
      </div>
      {isSelectAnotherCard ? (
        <CreditCardForm setIsSelectAnotherCard={setIsSelectAnotherCard} />
      ) : (
        <Payment customerCards={customerCards} setIsSelectAnotherCard={setIsSelectAnotherCard} />
      )}

      <div className='d-flex justify-content-center mt-5' style={{ width: '90%' }}>
        <button className='btn btn-dark' style={{ width: '17.96875vw', height: '2.604166666666667vw' }}>
          PAY NOW
        </button>
      </div>
    </>
  );
}

export default CustomerInformation;
