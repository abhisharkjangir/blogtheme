import axios from "axios";
import qs from "query-string";
import ENV from "../constants/config";
import { AUTH_FAILED } from "../constants/messages";

const Axios = baseURL => {
  // AXIOS CONFIGRATION
  let config = {
    baseURL: baseURL || ENV.BASE_URL,
    // timeout : 5000,
    paramsSerializer: function(queryParams) {
      return qs.stringify(queryParams);
    }
  };

  // CREATE NEW AXIOS INSTANCE
  let axiosInstance = axios.create(config);

  // REQUEST INTERCEPTOR
  axiosInstance.interceptors.request.use(
    config => {
      // Add Headers in Request Here
      // For Example config.headers['token'] =  getAuthToken();
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  // RESPONSE INTERCEPTOR
  axiosInstance.interceptors.response.use(
    response => {
      if (response.data.success) {
        // Handle Response Code here
      }
      // Handle Authentication Failed
      if (!response.data.success && response.data.message === AUTH_FAILED) {
        // Clear Login/Session Data and Redirect to Login Page
      }
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

// EXPORT A NEW AXIOS INSTANCE
export default Axios(ENV.URL);
