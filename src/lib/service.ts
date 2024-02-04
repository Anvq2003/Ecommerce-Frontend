import axios from 'axios';

const CONFIG = {
  BASE_URL: process.env.BASE_URL || 'http://localhost:1337/api',
  AUTH_TOKEN:
    process.env.AUTH_TOKEN ||
    '04492a2f710921c06d569eaaa1eb6763e659929d9c5a23a5874510f0c6613e3ec6d844da0c140dba01779d494b5c9949c3e0238eba23af8fffc8632937fd74bebfab954f8827bf3ab10b58d52c1d70444893e97589e6f166ba4b85c07ae6c4e4fe45a6c69c0ba7944d0ac7e2a8c06767bf025cca5f1bf3e78f88eb88ae1e4716',
};

const service = axios.create({
  baseURL: CONFIG.BASE_URL,
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${CONFIG.AUTH_TOKEN}`,
  },
});

service.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  },
);

export default service;
