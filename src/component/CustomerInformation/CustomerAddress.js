import React, { useState } from 'react';
import CustomerAddressList from './CustomerAddressLists';

function CustomerAddress({ customerAddress, setIsAddingAddress }) {
  const [selectAddress, setSelectAddress] = useState(customerAddress.find((item) => item.isMain).id);

  const handleChangeAddress = (e) => {
    setSelectAddress(e.target.value);
  };

  const handleClickAnotherAddress = () => {
    setIsAddingAddress(true);
  };

  const customerAddressShow = customerAddress.map((address) => {
    return <CustomerAddressList address={address} selectAddress={selectAddress} onChange={handleChangeAddress} />;
  });

  return (
    <>
      {customerAddressShow}
      <button type='button' className='btn' onClick={handleClickAnotherAddress}>
        {'Another Address >'}
      </button>
    </>
  );
}

export default CustomerAddress;
