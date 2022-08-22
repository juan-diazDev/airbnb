const BASE_URL = 'https://airbnbback23.herokuapp.com/api';

export async function getUsers() {
  try {
    const response = await fetch(`${BASE_URL}/api/users`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function getUser(id) {
  try {
    const response = await fetch(`${BASE_URL}/api/users/${id}`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function createUser(user) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(`${BASE_URL}/users/`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}
