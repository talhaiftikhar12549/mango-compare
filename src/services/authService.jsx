import axios from 'axios';

const API_URL = 'https://mango-compare-backend.onrender.com/api/auth'; // Update with your backend URL

const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

// services/authService.js

const loginUser = async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      
      // Make sure your backend is sending the token in the response body
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        return response.data;
      }
      throw new Error('No token received');
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      throw error;
    }
  };

const checkAuthStatus = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }
  const response = await axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export { registerUser, loginUser, checkAuthStatus };