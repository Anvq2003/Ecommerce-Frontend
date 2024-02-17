import axios from 'axios';
import { CONFIG } from '@/config/index';

const axiosInstance = axios.create({
  baseURL: CONFIG.BASE_URL,
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${CONFIG.AUTH_TOKEN}`,
  },
});

export default axiosInstance;
