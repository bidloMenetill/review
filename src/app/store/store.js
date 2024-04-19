import { create } from 'zustand';
import { QRUSHAPI } from '../../shared/API/api/api';

export const useZustandStore = create(set => ({
  news: [],
  faqData: [],
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
}));
