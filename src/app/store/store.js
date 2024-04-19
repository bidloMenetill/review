import { create } from 'zustand';
import { QRUSHAPI } from '../../shared/API/api/api';

export const usePages = create(set => ({
  news: [],
  trustUs: [],
  celebrities: [],
  adverts1: [],
  adverts2: [],
  shopCards: [],
  getHomePage: async () => {
    try {
      const response = await QRUSHAPI.getHomePage();
      set({ news: response.data });
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
}));
