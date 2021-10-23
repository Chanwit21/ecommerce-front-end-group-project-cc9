import React from 'react';
import AccountHeader from '../component/AccountHeader';
import UserPaymentCardList from '../component/UserPayment/UserPaymentCardList';
import { customerCards } from '../mocks/customerCards';
import { Link } from 'react-router-dom';

function UserPayment() {
  const customerCardsShow = customerCards.map((card) => <UserPaymentCardList key={card.id} card={card} />);
  return (
    <>
      <AccountHeader />
      <div className='container text-center my-5'>
        <h4>CARD LIST</h4>
        {customerCardsShow}
        <button className='btn btn-dark mt-3 mb-5'>
          <Link to='/user_add_card' className='nav-link' style={{ color: 'inherit' }}>
            ADD NEW CARD
          </Link>
        </button>
      </div>
    </>
  );
}

export default UserPayment;
