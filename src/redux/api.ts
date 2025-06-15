import axios from 'axios';

export const authAPI = {
  login(email: string, password: string) {
    return axios.post('http://localhost:1000/login', { email, password })
      .then(res => res.data);
  },

  register(username: string, email: string, password: string) {
    return axios.post('http://localhost:1000/register', { username, email, password })
      .then(res => res.data);
  }
};