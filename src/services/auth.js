const BASE_URL = `${process.env.REACT_APP_LOCAL_URL}`;

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

export async function singup(auth) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'aplpication/json',
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
