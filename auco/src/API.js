import axios from 'axios';

export default axios.create({
  baseURL: `http://auco.gti-ia.upv.es/api`,
  rejectUnauthorized: false
});