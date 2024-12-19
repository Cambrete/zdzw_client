import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',  // Asegúrate de que la URL del backend sea correcta
});

// Interceptor para añadir el token en el encabezado de autorización
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && config.url !== '/login') {  // Excluye el login de incluir el token
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;