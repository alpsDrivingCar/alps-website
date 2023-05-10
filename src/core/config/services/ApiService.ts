import axios, { AxiosRequestConfig } from 'axios';

const ApiInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    Accept: 'application/json',
  },
});

ApiInstance.interceptors.request.use(
  (config) => {
    // clear error in the store
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

ApiInstance.interceptors.response.use(
  (response) => {
    // Clear errors using Redux dispatch
    // useDispatch({ type: 'CLEAR_ERRORS' });

    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      //  useDispatch({ type: 'LOGOUT' });
      //  useHistory().push('/sign-in');
    } else {
      return Promise.reject(error);
    }
  }
);

const ApiServices = {
  /**
   * @description Send the GET HTTP request
   * @param resource: string
   * @param slug: string
   */
  get: (resource: string, slug = '') => {
    return ApiInstance.get(`${resource}/${slug}`);
  },

  /**
   * @description Send the POST HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   */

  post: (resource: string, parmas: AxiosRequestConfig) => {
    return ApiInstance.post(resource, parmas);
  },
  put: (resource: string, params: AxiosRequestConfig) => {
    return ApiInstance.put(resource, params);
  },
};

export default ApiServices;
