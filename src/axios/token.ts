export const TOKEN_KEY_NAME = 'six-cities-token';

const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY_NAME);
  return token ?? '';
};

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY_NAME, token);
};

const deleteToken = () => {
  localStorage.removeItem(TOKEN_KEY_NAME);
};

export {getToken, setToken, deleteToken};
