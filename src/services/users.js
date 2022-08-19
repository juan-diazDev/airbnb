const BASE_URL = 'http://localhost:8080/api';

export async function getUsers() {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function getUser(id) {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`);
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