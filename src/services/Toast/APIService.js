import axios from "axios";

import router from "../../router";
import { triggerErrorToast } from "./ToastService";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(
  (config) => {
    const localAccessToken = localStorage.getItem('accessToken') || '';
    if (localAccessToken) config.headers["Authorization"] = 'Bearer ' + localAccessToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    triggerErrorToast('Your Session has been Expired')
    router.go('/login')
  } else {
      return Promise.reject(error);
  }
});

export default api
