import axios from 'axios'

axios.defaults.withCredentials = true;

export const api = axios.create({
  baseURL: 'https://betterself.today/api/'
});

/*
Interceptor to get error object (not string)
 */
api.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error.response)
});
