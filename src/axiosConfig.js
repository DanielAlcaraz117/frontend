import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Host': window.location.hostname
  }
});

// Interceptor para manejar errores de CORS
instance.interceptors.request.use(config => {
  if (process.env.NODE_ENV === 'production') {
    config.headers['Origin'] = window.location.origin;
  }
  return config;
});

export default instance;