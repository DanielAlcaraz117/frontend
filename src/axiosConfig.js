// Axios (recomendado)
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-3qjn.onrender.com/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Ejemplo de uso
api.get('/endpoint')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));