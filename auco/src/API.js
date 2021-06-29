import axios from 'axios';

export default axios.create({
  // Developing
  baseURL: `http://localhost:8081`,

  // Deploying
  //baseURL: `http://auco.gti-ia.upv.es/api`,
  rejectUnauthorized: false
});