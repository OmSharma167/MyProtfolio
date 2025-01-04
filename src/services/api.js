import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProjects = () => api.get('/projects');
export const getFeaturedProjects = () => api.get('/projects/featured');
export const sendMessage = (data) => api.post('/messages', data);