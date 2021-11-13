import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://portfolio-backend-3a.herokuapp.com/api'
      : 'http://localhost:3001/api',
});
