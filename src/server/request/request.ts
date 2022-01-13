import Axios from 'axios';

const baseURL = 'https://api.github.com';

const axios = Axios.create({
  baseURL,
  timeout: 2000
});

/** 请求前置拦截 */
axios.interceptors.request.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

/** 请求响应 */
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.data) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default axios;
