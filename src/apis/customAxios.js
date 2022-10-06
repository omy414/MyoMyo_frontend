import axios from 'axios';

 const BASE_URL = '/';

 axios.defaults.headers.common['apiKey'] = process.env.REACT_APP_POSTGRESQL_API_KEY;
 
const axiosApi = (url, options) => {
  const instance = axios.create({ baseURL : url, options})
  return instance
}

export const defaultInstance = axiosApi(BASE_URL);
