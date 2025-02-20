import { create } from 'zustand';

interface State {
  count: number;
}

interface Actions {
  update: (newCount: number) => void;
  increment: () => void;
}

type Store = State & Actions;

export const useCountStore = create<Store>()((set) => ({
  count: 0,
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  update: (value) =>
    set(() => ({
      count: value,
    })),
}));
