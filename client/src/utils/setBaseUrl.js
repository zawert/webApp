import axios from 'axios';

const setBaseUrl = (url = 'http://192.168.100.8:5000') => {
  axios.defaults.baseURL = url;
};

export default setBaseUrl;