import { regexPatterns } from "./RegexPatterns";

export const validateMobileNumber = (number) => {
  return regexPatterns.mobileNumber.test(number);
};

export const validateStrongPassword = (password) => {
  const isLengthValid = password.length >= 8;

  return (
    regexPatterns.password.uppercase.test(password) &&
    regexPatterns.password.lowercase.test(password) &&
    regexPatterns.password.number.test(password) &&
    regexPatterns.password.specialChar.test(password) &&
    isLengthValid
  );
};

export const validateEmail = (email) => {
  return regexPatterns.email.test(email);
};

export const validatePostalCode = (code) => {
  return regexPatterns.postalCode.test(code);
};

export const validateField = (value, validationLogic) => {
    if (validationLogic && typeof validationLogic === "function") {
      return validationLogic(value);
    }
    return true;
  };

  export const validateFloorAddress = (floordetails) => validateField(floordetails);
  export const validateStreetAddress1 = (streetaddress1) =>
    validateField(streetaddress1);
   export const validateStreetAddress2 = (streetaddress2) =>
    validateField(streetaddress2);
   export const validateState = (state) => validateField(state);
 export const validateCountry = (country) => validateField(country);
