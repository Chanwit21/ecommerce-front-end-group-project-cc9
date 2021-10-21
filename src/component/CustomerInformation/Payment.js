import React, { useState } from 'react';
import CustomerCardsList from './CustomerCardsList';
import visaIcon from '../../pic/icons/294654_visa_icon.svg';
import masterCardIcon from '../../pic/icons/380809_card_master_mastercard_icon.svg';

function Payment({ customerCards, setIsSelectAnotherCard }) {
  const [cardSelect, setCardSelect] = useState(customerCards[0].id);

  const handleChangeCard = (e) => {
    setCardSelect(e.target.value);
  };

  const handleClickAnotherCard = () => {
    setIsSelectAnotherCard(true);
  };

  const customerCardsShow = customerCards.map((card) => (
    <CustomerCardsList key={card.id} card={card} cardSelect={cardSelect} onChange={handleChangeCard} />
  ));

  return (
    <>
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
      {customerCardsShow}
      <button type='button' className='btn' onClick={handleClickAnotherCard}>
        {'Another Card >'}
      </button>
    </>
  );
}

export default Payment;
