import { create } from 'zustand';
import { QRUSHAPI } from '../../shared/API/api/api';

export const useZustandStore = create(set => ({
  news: [],
  faqData: [],
  trustUs: [],
  celebrities: [],
  adverts1: [],
  adverts2: [],
  shopCards: [],
  aboutUsArtist: [],
  aboutUsTeam: [],
  getHomePage: async () => {
    try {
      const response = await QRUSHAPI.getHomePage();
      set({ news: response.data });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getFaqPage: async () => {
    try {
      const response = await QRUSHAPI.getFaqPage();
      set({ faqData: response.data.results });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getMusicCourcePage: async () => {
    try {
      const response = await QRUSHAPI.getMusicCourcePage();
      set({ musicCourceData: response.data });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getTrustUsMainSection: async () => {
    try {
      const response = await QRUSHAPI.getTrustUsMainSection();
      set({ trustUs: response.data.results[0] });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getTrustUsCelebrities: async () => {
    try {
      const response = await QRUSHAPI.getTrustUsCelebrities();
      set({ celebrities: response.data.results });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getAdverts: async () => {
    try {
      const response = await QRUSHAPI.getAdverts();
      set({ adverts1: response.data.results[0] });
      set({ adverts2: response.data.results[1] });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getShopCards: async () => {
    try {
      const response = await QRUSHAPI.getShopCards();
      set({ shopCards: response.data.results });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getAboutUsArtist: async () => {
    try {
      const response = await QRUSHAPI.getAboutUsArtist();
      console.log(response);
      set({ aboutUsArtist: response.data.results });
    } catch (error) {
      console.error('Ошибка при получении артистов', error);
    }
  },
  getAboutUsTeam: async () => {
    try {
      const response = await QRUSHAPI.getAboutUsTeam();
      console.log(response);
      set({ aboutUsTeam: response.data.results });
    } catch (error) {
      console.error('Ошибка при получении текстов', error);
    }
  },
}));
