import { isEmail, isStrongPassword, isNumeric, isInt } from 'validator';

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

export const validateProductName = (productName) => {
  if (!productName) {
    return 'Product Name is require!!';
  }

  return '';
};

export const validatePrice = (price) => {
  if (!price) {
    return 'Price is require!!';
  }
  if (!isNumeric(price)) {
    return 'Price must be Number!!';
  }

  return '';
};

export const validateQuantity = (quantity) => {
  if (!quantity) {
    return 'Quantity is require!!';
  }
  if (!isInt(quantity)) {
    return 'Quantity must be Integer!!';
  }

  return '';
};

export const validateCategory = (category) => {
  if (!category) {
    return 'Category is require!!';
  }

  return '';
};

export const validateColorName = (colorName) => {
  if (!colorName) {
    return 'color Name is require!!';
  }

  return '';
};

export const validateColorCode = (colorCode) => {
  if (!colorCode) {
    return 'Color Code is require!!';
  }

  return '';
};

export const validateDescription = (description) => {
  if (!description) {
    return 'Description is require!!';
  }

  return '';
};

export const validateIngredients = (ingredients) => {
  if (!ingredients) {
    return 'Ingredients is require!!';
  }

  return '';
};

export const validateImageShow = (imagesShow) => {
  if (!imagesShow.filter(item => item !== '').length) {
    return 'Images Show is require!!';
  }

  return '';
};

export const validateImageFile = (imagesFile) => {
  if (!imagesFile.filter(item => item !== null).length) {
    return 'Images File is require!!';
  }

  return '';
};




