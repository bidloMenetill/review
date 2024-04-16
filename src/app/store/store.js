import { create } from 'zustand';
import { QRUSHAPI } from '../../shared/API/api/api';

export const usePages = create(set => ({
  getHomePage: async () => {
    try {
      const response = await QRUSHAPI.getHomePage();
      set({ news: response.data });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
}));
