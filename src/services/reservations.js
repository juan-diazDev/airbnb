const BASE_URL = process.env.REACT_APP_LOCAL_URL;

export async function createBooking(bookSpace) {
  const token = localStorage.getItem('token');
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bookSpace),
    };
    const response = await fetch(`${BASE_URL}/api/reservation`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function getBooking() {
  try {
    const response = await fetch(`${BASE_URL}/api/reservation`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function getSBooking(_id) {
  try {
    const response = await fetch(`${BASE_URL}/api/spaces/${_id}`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}
