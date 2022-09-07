const BASE_URL = process.env.REACT_APP_LOCAL_URL;

async function createPayment(paymentMethod, amount) {
  try {
    const token = localStorage.getItem('token');
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        paymentMethod,
        amount,
      }),
    };

    const response = await fetch(`${BASE_URL}/api/payment`, options);
    return response.json();
  } catch (error) {
    return new Error(error.message);
  }
}

module.exports = {
  createPayment,
};
