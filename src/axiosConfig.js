// src/axiosConfig.js
import axios from ' src/axiosConfig'; // Sin llaves {}

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://backend-3qjn.onrender.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance; // Esta es la línea clave que falta