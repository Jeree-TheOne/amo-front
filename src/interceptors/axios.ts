import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    config.baseURL = import.meta.env.VITE_API_URL;
    config.headers['Content-Type'] = 'aplication/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
  },
);
