const BASE_URL = 'https://airbnbback23.herokuapp.com/api';

export async function getSpaces() {
  try {
    const response = await fetch(`${BASE_URL}/spaces`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function getSpace(_id) {
  try {
    const response = await fetch(`${BASE_URL}/spaces/${_id}`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function deleteSpace(id) {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`${BASE_URL}/spaces/${id}`, options);
    return response.json({ response, message: 'space deleted' });
  } catch (error) {
    return new Error(error);
  }
}
