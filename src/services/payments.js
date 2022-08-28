const BASE_URL = 'http://localhost:3030/api/payment';

async function createPayment() {
  try {
    const token = localStorage.getItem('token');
    localStorage.setItem('profile', JSON.stringify);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        amount: 10_000,
      }),
    };

    const response = await fetch(BASE_URL, options);
    return response.json();
  } catch (error) {
    return new Error(error.message);
  }
}

module.exports = createPayment;
