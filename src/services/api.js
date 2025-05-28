import axios from 'axios';


const api = axios.create({
  //  baseURL: import.meta.env.VITE_API_URL + '/api',
   baseURL: 'http://localhost:5000' + '/api'
  // || 'https://mango-compare-backend.onrender.com/api', // Your backend base URL
});

// Request interceptor to add token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      // Optionally redirect to login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;