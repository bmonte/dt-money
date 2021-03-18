import axios from 'axios';

const isDevelopment = process.env.NODE_ENV !== 'production';

const api = axios.create({
  baseURL: isDevelopment ? 'http://localhost:3000/api' : 'https://dt-money-bmonte.vercel.app/api',
});

export default api;