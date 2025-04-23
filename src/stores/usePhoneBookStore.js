import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

const addContact = (set) => (contact) => {
  set((state) => ({
    phoneBook: [...state.phoneBook, { ...contact, id: uuidv4() }],
  }));
};

const usePhoneBookStore = create((set) => ({
  phoneBook: [],
  addContact: addContact(set),
}));

export default usePhoneBookStore;
