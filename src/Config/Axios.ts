import axios from 'axios';

const clientAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

clientAxios.interceptors.request.use(
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
  
  clientAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );
  
  export default clientAxios;