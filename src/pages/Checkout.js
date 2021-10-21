import React from 'react';
import OrderSummary from '../component/OrderSummary';
import { orderItems } from '../mocks/orderItems';
import { customerAddress } from '../mocks/curtomerAddress';
import CustomerInformation from '../component/CustomerInformation';

function Checkout() {
  //   const [orderItems, setOrderItems] = useState();
  //   const [customerAddress, setCustomerAddress] = useState();

  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-6'>
          <CustomerInformation customerAddress={customerAddress} />
        </div>
        <div className='col-1'></div>
        <div className='col-4'>
          <OrderSummary orderItems={orderItems} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
