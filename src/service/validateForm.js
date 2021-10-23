import { isEmail, isStrongPassword } from 'validator';

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
