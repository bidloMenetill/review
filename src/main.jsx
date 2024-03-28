import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Routing } from './app/routes/Routing';

import './i18n';
import './app/styles/index.css';

axios.interceptors.request.use(
  request => {
    console.log('Starting Request:', request);
    return request;
  },
  error => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  error => {
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);
