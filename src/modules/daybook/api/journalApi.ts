import axios from 'axios';

const journalApi = axios.create({
  baseURL: 'https://vue-demos-94f31-default-rtdb.firebaseio.com'
});

export default journalApi;

