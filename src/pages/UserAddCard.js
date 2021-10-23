import React from 'react';
import { Link } from 'react-router-dom';
import AccountHeader from '../component/AccountHeader';
import visaIcon from '../pic/icons/294654_visa_icon.svg';
import masterCardIcon from '../pic/icons/380809_card_master_mastercard_icon.svg';

function UserAddCard() {
  return (
    <>
      <AccountHeader />
      <div className='container my-5'>
        <div className='d-flex justify-content-center'>
          <div className='row' style={{ width: '50%' }}>
            <div className='col-11 d-flex justify-content-center align-items-center'>
              <h4>ADD NEW CARD</h4>
            </div>
            <div className='col-1'>
              <button className='btn'>
                <Link to='/user_payment' className='nav-link' style={{ color: 'inherit' }}>
                  <i className='bi bi-x' style={{ fontSize: '2vw' }}></i>
                </Link>
              </button>
            </div>
            <div className='col-12 mt-4'>
              <input type='text' className='form-control border-dark' placeholder='Card Number' />
            </div>
            <div className='col-12 mt-3'>
              <input type='text' className='form-control border-dark' placeholder='Cardholder Name*' />
            </div>
            <div className='col-6 mt-3'>
              <input type='text' className='form-control border-dark' placeholder='Expiration Date (MM/YY)' />
            </div>
            <div className='col-6 mt-3'>
              <input type='text' className='form-control border-dark' placeholder='Security Code' />
            </div>
            <div className='col-12 mt-3 d-flex justify-content-end'>
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
            <div className='col-12 d-flex justify-content-center'>
              <button className='btn btn-dark'>ADD CARD</button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default UserAddCard;
