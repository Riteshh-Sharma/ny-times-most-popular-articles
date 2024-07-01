import axios from 'axios';

const API_KEY = process.env.REACT_APP_NYT_API_KEY;

const BASE_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed`;

export const fetchArticles = (period = 1) => {
  return axios.get(`${BASE_URL}/${period}.json?api-key=${API_KEY}`);
};
