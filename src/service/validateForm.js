import { isEmail, isStrongPassword, isCreditCard, isNumeric, isInt } from 'validator';

export const validateEmail = (email) => {
  if (!email) {
    return 'Email is require!!';
  }

  if (!isEmail(email)) {
    return 'Email is invalid format!!';
  }

  return '';
};

export const validatePassword = (password) => {
  if (!password) {
    return 'Password is require!!';
  }

  return '';
};

export const validateFirstName = (first_name) => {
  if (!first_name) {
    return 'First name is require!!';
  }

  return '';
};

export const validateLastName = (last_name) => {
  if (!last_name) {
    return 'Last name is require!!';
  }

  return '';
};

export const validatePasswordAndConfirmPassWord = (password, confirmPassword) => {
  if (!password) {
    return 'Password is require!!';
  }

  if (!isStrongPassword(password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
    return 'Password is unsecured!!';
  }

  if (!confirmPassword) {
    return 'Confirm password is require!!';
  }

  if (password !== confirmPassword) return 'Passwords did not match';

  return '';
};

export const validateCraditCardNumber = (str) => {
  if (!str) {
    return 'Card Number is require!!';
  }

  if (!isCreditCard(str)) {
    return 'Card Number is invalid!!';
  }

  return '';
};

export const validateCraditCardName = (str) => {
  if (!str || str.trim === '') {
    return 'Cardholder Name is require!!';
  }

  return '';
};

export const validateCraditCardExp = (str) => {
  if (!str) {
    return 'Expiration Date is invalid!!';
  }

  return '';
};

export const validateCraditCardSecurityCode = (number) => {
  if (!number || number.trim === '') {
    return 'Security Code is invalid!!';
  }

  if (isNaN(number)) {
    return 'Security Code must be a number!!';
  }

  return '';
};

export const validateAddress1 = (address) => {
  if (!address || address.trim === '') {
    return 'Address1 is require!!';
  }

  return '';
};

export const validateProvince = (province) => {
  if (!province || province.trim === '') {
    return 'Province is require!!';
  }

  return '';
};

export const validateDistrict = (district) => {
  if (!district || district.trim === '') {
    return 'District is require!!';
  }

  return '';
};

export const validateSubDistrict = (subDistrict) => {
  if (!subDistrict || subDistrict.trim === '') {
    return 'Sub District is require!!';
  }

  return '';
};

export const validatePhoneNumber = (phoneNumber) => {
  if (!phoneNumber || phoneNumber.trim === '') {
    return 'Phone Number is require!!';
  }

  if (isNaN(phoneNumber)) {
    return 'Phone Number must be a number!!';
  }

  return '';
};
