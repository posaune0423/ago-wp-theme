import axios from 'axios';
export default axios.create({
  baseURL: process.env.API_BASE_URL || 'https://localhost:8000/wp-json/'
});
