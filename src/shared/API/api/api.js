import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://209.38.228.54/ru/api/',
});

export const QRUSHAPI = {
  getHomePage() {
    return instance.get('v1/pages/main/');
  },
};
