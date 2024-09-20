function getPaymentTokenFromAPI(success) {
  if (success) {
    const data = new Promise((resolve) => {
      resolve({ data: 'Successful response from the API' });
    });
    return data;
  }
  return null;
}

module.exports = getPaymentTokenFromAPI;
