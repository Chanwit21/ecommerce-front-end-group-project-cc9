import React from 'react';
import credirCardImage from '../../pic/icons/credit-card.png';

function UserPaymentCardList({ card }) {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='row mt-3 mb-2 border p-2' style={{ width: '80%', backgroundColor: '#FEF3F5' }}>
        <div className='col-2 d-flex justify-content-center align-items-center'>
          <img src={credirCardImage} alt='credit-card' style={{ height: '6.09375vw' }} />
        </div>
        <div className='col-9 d-flex justify-content-center align-items-center'>
          <div>
            <span>CARD NUMBER</span>
            <br />
            <span>XXXX-XXXX-XXXX-{card.last_digits}</span>
          </div>
        </div>
        <div className='col-1 d-flex justify-content-center align-items-center'>
          <button className='btn' style={{ fontSize: '1.5vw' }}>
            <i className='bi bi-trash'></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserPaymentCardList;
