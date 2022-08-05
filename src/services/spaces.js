const BASE_URL = 'http://localhost:8080/api';

export async function getSpaces() {
  try {
    const response = await fetch(`${BASE_URL}/spaces`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function getSpace(id) {
  try {
    const response = await fetch(`${BASE_URL}/spaces/${id}`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}
