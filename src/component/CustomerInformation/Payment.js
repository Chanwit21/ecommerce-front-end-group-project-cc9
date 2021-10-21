import React, { useState } from 'react';
import CustomerCardsList from './CustomerCardsList';

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
      {customerCardsShow}
      <button type='button' className='btn' onClick={handleClickAnotherCard}>
        {'Another Card >'}
      </button>
    </>
  );
}

export default Payment;
