const BASE_URL = 'http://localhost:3030';

export async function login(auth) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(auth),
  };
  const response = await fetch(`${BASE_URL}/auth/local/login`, options);
  return response.json();
}

export async function verify(token) {
  const response = await fetch(`${BASE_URL}/auth/local/verify-account/${token}`);
  return response.json();
}

export async function signup(users) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(users),
    };
    const response = await fetch(`${BASE_URL}/api/users`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}
