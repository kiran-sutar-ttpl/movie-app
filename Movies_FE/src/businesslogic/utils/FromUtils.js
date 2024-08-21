import {
  validateMobileNumber,
  validatePostalCode,
  validateFloorAddress,
  validateStreetAddress1,
  validateStreetAddress2,
  validateState,
  validateCountry,
} from "../RegexValidation/RegexValidation";
export const handleSubmit = (event, formData, setShowForm, onSubmit) => {
  event.preventDefault();

  if (
    formData.firstName &&
    formData.lastName &&
    validateMobileNumber(formData.mobileNumber) &&
    formData.email &&
    formData.isValidEmail &&
    formData.password &&
    formData.isStrongPassword &&
    formData.postalcode
  ) {
    const isFloorAddressValid = validateFloorAddress(formData.floorAddress);
    const isStreetAddress1Valid = validateStreetAddress1(
      formData.streetaddress1
    );
    const isStreetAddress2Valid = validateStreetAddress2(
      formData.streetaddress2
    );

    const isStateValid = validateState(formData.state);
    const isCountryValid = validateCountry(formData.country);
    const isPostalCodeValid = validatePostalCode(formData.postalcode);

    if (
      isFloorAddressValid &&
      isStreetAddress1Valid &&
      isStreetAddress2Valid &&
      isStateValid &&
      isCountryValid &&
      isPostalCodeValid
    ) {
      setShowForm(true);

      if (onSubmit) {
        onSubmit(formData);
      }
    } else {
      console.log("Validation failed for optional fields");
    }
  } else {
    console.log("Validation failed for required fields");
  }
};
