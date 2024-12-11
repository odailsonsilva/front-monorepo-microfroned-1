import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Store {
  user: User;
  setUser: (user: User) => void;
}

export const useUserStore = create<Store>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User) => set({ user }),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    }
  )
);