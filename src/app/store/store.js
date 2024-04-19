import { create } from 'zustand';
import { QRUSHAPI } from '../../shared/API/api/api';

export const useZustandStore = create(set => ({
  news: [],
  faqData: [],
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
      console.log(response);
      set({ musicCourceData: response.data });
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
