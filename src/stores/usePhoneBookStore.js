import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

// 로컬스토리지에서 데이터 불러오기
const loadFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('phoneBook')) || [];
};

// 연락처 정렬 (즐겨찾기 우선)
const sortPhoneBook = (contacts) => {
  return contacts.slice().sort((a, b) => {
    if (a.favorite === b.favorite) return 0;
    return a.favorite ? -1 : 1;
  });
};

// 연락처 추가
const addContact = (set) => (contact) => {
  set((state) => ({
    phoneBook: sortPhoneBook([
      ...state.phoneBook,
      { id: uuidv4(), ...contact, favorite: false },
    ]),
  }));
};

// 연락처 삭제
const deleteContact = (set) => (id) =>
  set((state) => ({
    phoneBook: state.phoneBook.filter((contact) => contact.id !== id),
  }));

// 즐겨찾기 토글
const toggleFavorite = (set) => (id) =>
  set((state) => ({
    phoneBook: sortPhoneBook(
      state.phoneBook.map((c) =>
        c.id === id ? { ...c, favorite: !c.favorite } : c
      )
    ),
  }));

const usePhoneBookStore = create((set) => ({
  phoneBook: loadFromLocalStorage(),
  addContact: addContact(set),
  deleteContact: deleteContact(set),
  toggleFavorite: toggleFavorite(set),
}));

// 상태 변화 감지하여 localStorage에 자동 저장
usePhoneBookStore.subscribe(
  (storeValue) => {
    localStorage.setItem('phoneBook', JSON.stringify(storeValue.phoneBook));
  },
  (state) => state.phoneBook
);

export default usePhoneBookStore;
