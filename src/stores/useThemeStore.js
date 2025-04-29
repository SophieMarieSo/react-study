// useThemeStore.js
import { create } from 'zustand';

const toggleMode = (set) => (mode) => {
  set((state) => {
    const newMode = state.mode === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newMode);
    return { mode: newMode };
  });
};

export const useThemeStore = create((set) => ({
  mode: localStorage.getItem('theme') || 'light',
  toggleMode: toggleMode(set),
}));
