import React, { useEffect, useState } from 'react';
import OrderSummary from '../component/OrderSummary';
import CustomerInformation from '../component/CustomerInformation';
import axios from '../config/axios';
import { useAuthContext } from '../context/AuthContext';
import { orderItems } from '../mocks/orderItems';
import {
  validateAddress1,
  validateCraditCardExp,
  validateCraditCardName,
  validateCraditCardNumber,
  validateCraditCardSecurityCode,
  validateFirstName,
  validateLastName,
  validatePhoneNumber,
  validateProvince,
  validateSubDistrict,
} from '../service/validateForm';

function Checkout() {
  const [customerAddress, setCustomerAddress] = useState([]);
  const [customerCards, setCustomerCards] = useState([]);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [isSelectAnotherCard, setIsSelectAnotherCard] = useState(false);
  const [addressFrom, setAddressFrom] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    province: '',
    district: '',
    subDistrict: '',
    postalCode: '',
    phoneNumber: '',
  });
  const [errorAddressFrom, setErrorAddressFrom] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    province: '',
    district: '',
    subDistrict: '',
    phoneNumber: '',
  });
  const [cardContent, setCardContent] = useState({
    number: '',
    name: '',
    expiration: '',
    securityCode: '',
  });
  const [cardContentError, setCardContentError] = useState({
    number: '',
    name: '',
    expiration: '',
    securityCode: '',
  });
  const [selectAddress, setSelectAddress] = useState('');
  const [selectedCard, setSelectedCard] = useState('');
  const {
    state: { user },
  } = useAuthContext();

  const Omise = window.Omise;
  Omise.setPublicKey('pkey_test_5pdoxhl4p3erc27pgew');

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await axios.get('/address');
        setCustomerAddress(res.data.allAddress);
        if (res.data.count === 0) {
          setIsAddingAddress(true);
        }
      } catch (err) {
        console.dir(err);
      }
    };

    const fetchCustomerCard = async () => {
      try {
        const res = await axios.get('/credit_cards');
        setCustomerCards(res.data.creditCards);
        if (res.data.count === 0) {
          setIsSelectAnotherCard(true);
        }
      } catch (err) {
        console.dir(err);
      }
    };

    fetchAddress();
    fetchCustomerCard();
  }, []);

  const handleSubmitToPay = async () => {
    try {
      const errorName = validateCraditCardName(cardContent.name);
      const errorNumber = validateCraditCardNumber(cardContent.number);
      const errorExp = validateCraditCardExp(cardContent.expiration);
      const errorSecureCode = validateCraditCardSecurityCode(cardContent.securityCode);
      const errorFirstName = validateFirstName(addressFrom.firstName);
      const errorLastName = validateLastName(addressFrom.lastName);
      const errorAddress1 = validateAddress1(addressFrom.address1);
      const errorProvince = validateProvince(addressFrom.province);
      const errorDistrict = validateProvince(addressFrom.district);
      const errorSubDistrict = validateSubDistrict(addressFrom.subDistrict);
      const errorPhoneNumber = validatePhoneNumber(addressFrom.phoneNumber);

      if (
        errorName ||
        errorNumber ||
        errorExp ||
        errorSecureCode ||
        errorFirstName ||
        errorLastName ||
        errorAddress1 ||
        errorProvince ||
        errorDistrict ||
        errorSubDistrict ||
        errorPhoneNumber
      ) {
        setCardContentError({
          number: errorNumber,
          name: errorName,
          expiration: errorExp,
          securityCode: errorSecureCode,
        });
        setErrorAddressFrom({
          firstName: errorFirstName,
          lastName: errorLastName,
          address1: errorAddress1,
          province: errorProvince,
          district: errorDistrict,
          subDistrict: errorSubDistrict,
          phoneNumber: errorPhoneNumber,
        });
      } else {
        if (isAddingAddress && isSelectAnotherCard) {
          const tokenParameters = {
            expiration_month: cardContent.expiration.split('-')[1],
            expiration_year: cardContent.expiration.split('-')[0],
            name: cardContent.name,
            number: cardContent.number,
            security_code: 123,
          };
          Omise.createToken('card', tokenParameters, async function (statusCode, response) {
            try {
              const res = await axios.post('/orders/create_order_with_address_and_card', {
                addressCreate: { ...addressFrom },
                creditCardToken: response.id,
              });
              console.log(res.data);
            } catch (err) {
              console.dir(err);
            }
          });
        }
      }
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-6'>
          <CustomerInformation
            user={user}
            isAddingAddress={isAddingAddress}
            setIsAddingAddress={setIsAddingAddress}
            customerAddress={customerAddress}
            addressFrom={addressFrom}
            setAddressFrom={setAddressFrom}
            setSelectAddress={setSelectAddress}
            selectAddress={selectAddress}
            isSelectAnotherCard={isSelectAnotherCard}
            setIsSelectAnotherCard={setIsSelectAnotherCard}
            customerCards={customerCards}
            errorAddressFrom={errorAddressFrom}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            cardContent={cardContent}
            setCardContent={setCardContent}
            cardContentError={cardContentError}
            setCardContentError={setCardContentError}
            setErrorAddressFrom={setErrorAddressFrom}
          />
        </div>
        <div className='col-1'></div>
        <div className='col-4'>
          <OrderSummary orderItems={orderItems} />
        </div>
        <div className='col-6'>
          <div className='d-flex justify-content-center mt-5' style={{ width: '90%' }}>
            <button
              className='btn btn-dark'
              style={{ width: '17.96875vw', height: '2.604166666666667vw' }}
              onClick={handleSubmitToPay}
            >
              PAY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
