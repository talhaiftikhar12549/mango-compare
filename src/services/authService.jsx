import api from './api';

const registerUser = async (userData) => {
  const response = await api.post('/auth/register', userData);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('role', response.data.role)
  }
  return response.data;
};

const loginUser = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('role', response.data.role)
    return response.data;
  }
  throw new Error('No token received');
};

const checkAuthStatus = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};

export { registerUser, loginUser, checkAuthStatus };
