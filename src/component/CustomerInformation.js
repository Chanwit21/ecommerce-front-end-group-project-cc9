import React, { useState } from 'react';
import AddAddressForm from './CustomerInformation/AddAddressForm';
import CreditCardForm from './CustomerInformation/CreditCardForm';
import CustomerAddress from './CustomerInformation/CustomerAddress';
import Payment from './CustomerInformation/Payment';
import { customerCards } from '../mocks/customerCards';

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
