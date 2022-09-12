const BASE_URL = process.env.REACT_APP_DB_URL;

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
  const response = await fetch(`${BASE_URL}/auth/local/verifyAccount/${token}`);
  return response.json();
}

export async function signup(user) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(`${BASE_URL}/api/users`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function changePassword(user) {
  try {
    const token = localStorage.getItem('token');
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(`${BASE_URL}/auth/local/${user.id}`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}
