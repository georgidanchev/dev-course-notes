import axios from 'axios';

const instance = axios.create({
  baseUrl: 'https://axios-test-proj.firebaseio.com',
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;
