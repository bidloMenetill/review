import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://209.38.228.54/ru/api/',
});

export const QRUSHAPI = {
  getHomePage() {
    return instance.get('v1/pages/main/');
  },
  getTrustUsMainSection() {
    return instance.get('v1/pages/trust_us/');
  },
  getTrustUsCelebrities() {
    return instance.get('v1/content/trust_us/');
  },
  getAdverts() {
    return instance.get('v1/pages/adverts/');
  },
  getShopCards() {
    return instance.get('v1/content/shop/');
  },
};
