import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-3a1dc.firebaseio.com/'
});

export default instance;
