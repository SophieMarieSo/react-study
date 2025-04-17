import { create } from 'zustand';

const useBookStore = create((set) => ({
  bookList: [],
}));

export default useBookStore;
