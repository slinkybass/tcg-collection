import { create } from "zustand";

interface Card {
  id: string;
  name: string;
  set: string;
  quantity: number;
}

interface User {
  id: string;
  name: string;
}

interface UserStore {
  user: User | null;
  collection: Card[];
  setUser: (user: User) => void;
  addCard: (card: Card) => void;
  removeCard: (cardId: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  collection: [],
  setUser: (user) => set({ user }),
  addCard: (card) =>
    set((state) => {
      const exists = state.collection.find((c) => c.id === card.id);
      if (exists) {
        return {
          collection: state.collection.map((c) =>
            c.id === card.id ? { ...c, quantity: c.quantity + card.quantity } : c
          ),
        };
      } else {
        return { collection: [...state.collection, card] };
      }
    }),
  removeCard: (cardId) =>
    set((state) => ({
      collection: state.collection.filter((c) => c.id !== cardId),
    })),
  logout: () => set({ user: null, collection: [] }),
}));
