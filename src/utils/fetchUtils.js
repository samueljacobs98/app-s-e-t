export const getRequest = async (url) => {
  try {
    const response = await fetch(url);
    const responseCleaned = await response.json();
    return responseCleaned;
  } catch (error) {
    console.error(error);
  }
};

export const postRequest = async (url, body) => {
  try {
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const getBody = (form, showAddress) => {
  const bodyObject = { PhoneNumbers: [] };

  bodyObject.FullName = form.name.value;
  bodyObject.EmailAddress = form.email.value;
  bodyObject.Message = form.message.value;
  bodyObject.bIncludeAddressDetails = showAddress;

  if (form?.phone1?.value) bodyObject.PhoneNumbers.push(form.phone1.value);
  if (form?.phone2?.value) bodyObject.PhoneNumbers.push(form.phone2.value);

  if (showAddress) {
    const addressDetails = {};
    addressDetails.AddressLine1 = form["address-line-1"].value;
    addressDetails.CityTown = form["city-town"].value;
    addressDetails.StateCounty = form["state-county"].value;
    addressDetails.Postcode = form.postcode.value;
    addressDetails.Country = form.country.value;

    if (form?.["address-line-2"]?.value) {
      addressDetails.AddressLine2 = form["address-line-2"].value;
    }

    bodyObject.AddressDetails = addressDetails;
  }

  return bodyObject;
};
