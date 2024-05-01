import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://209.38.228.54/ru/api/',
});

export const QRUSHAPI = {
  getHomePage() {
    return instance.get('v1/pages/main/');
  },
  getFaqPage() {
    return instance.get('v1/pages/faq/');
  },
  getMusicCourcePage() {
    return instance.get('v2/mc/music_courses/');
  },
  getRehearsalFirstBasePage() {
    return instance.get('v2/rb/rehearsal_base/');
  },
  getNewsPage() {
    return instance.get('v1/content/news/');
  },
  getSoundRecordingPage() {
    return instance.get('v2/srs/sound_recording_studio/');
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
  getAboutUsArtist() {
    return instance.get('v1/content/team/');
  },
  getAboutUsTeam() {
    return instance.get('v1/pages/about_us/');
  },
};
