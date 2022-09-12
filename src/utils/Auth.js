// const BASE_URL =
// process.env.NODE_ENV === 'production'
// ? 'https://api.arraktur-news-explorer.students.nomoredomainssbs.ru'
// : 'http://localhost:3000';

const BASE_URL =
  'https://api.arraktur-news-explorer.students.nomoredomainssbs.ru';

const handleResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

const register = async (email, password, name) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  });
  return handleResponse(res);
};

const authorize = async (email, password) => {
  const res = await fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(res);
};

const getContent = async (token) => {
  const res = await fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return handleResponse(res);
};

export { register, authorize, getContent };
