import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

// 로컬스토리지에서 데이터 불러오기
const loadFromLocalStorage = () => {
  const savedPhoneBook = localStorage.getItem('phoneBook');
  return savedPhoneBook ? JSON.parse(savedPhoneBook) : [];
};

// 로컬스토리지에 데이터 저장하기
const saveToLocalStorage = (phoneBook) => {
  localStorage.setItem('phoneBook', JSON.stringify(phoneBook));
};

const addContact = (set) => (contact) => {
  set((state) => {
    const newPhoneBook = [...state.phoneBook, { id: uuidv4(), ...contact }];
    saveToLocalStorage(newPhoneBook);
    return { phoneBook: newPhoneBook };
  });
};

const usePhoneBookStore = create((set) => ({
  phoneBook: loadFromLocalStorage(),
  addContact: addContact(set),
}));

export default usePhoneBookStore;
