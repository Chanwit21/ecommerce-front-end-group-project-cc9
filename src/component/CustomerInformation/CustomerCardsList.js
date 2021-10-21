import React from 'react';
import visaIcon from '../../pic/icons/294654_visa_icon.svg';
import masterCardIcon from '../../pic/icons/380809_card_master_mastercard_icon.svg';

function customerCardsList({ card, cardSelect, onChange }) {
  const iconSrc = card.brand === 'Visa' ? visaIcon : masterCardIcon;
  const alt = card.brand === 'Visa' ? 'visa-icon' : 'master-card-icon';

  return (
    <div className='mt-3 ps-4 d-flex align-items-center' style={{ width: '90%' }}>
      <input
        className='form-check-input'
        value={card.id}
        type='radio'
        name='choose-payment'
        id={`card-${card.id}`}
        onChange={(e) => onChange(e)}
        checked={cardSelect === card.id}
      />
      <label className='form-check-label form-check flex-grow-1' for={`card-${card.id}`}>
        <div className='border border-dark p-2 rounded m-0' style={{ fontSize: '1vw' }}>
          <img src={iconSrc} alt={alt} style={{ height: '2.083333333333333vw', borderRadius: '0.54vw' }} />
          <span className='ms-3'>Card Number</span>
          <span className='ms-3'>**** **** **** {card.last_digits}</span>
        </div>
      </label>
    </div>
  );
}

export default customerCardsList;
