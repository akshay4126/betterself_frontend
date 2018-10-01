import axios from 'axios'
import {apiUrl} from 'config'

axios.defaults.withCredentials = true;

export const api = axios.create({
  baseURL: apiUrl
});

/*
Interceptor to get error object (not string)
 */
api.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error.response)
});
