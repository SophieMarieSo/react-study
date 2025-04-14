import { create } from 'zustand';

const usePhoneBookStore = create((set) => ({
  phoneBook: [],
  addContact: (contact) =>
    set((state) => ({
      phoneBook: [...state.phoneBook, { ...contact, id: Date.now() }],
    })),
}));

export default usePhoneBookStore;
