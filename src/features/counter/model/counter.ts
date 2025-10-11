import { create } from 'zustand';

interface Store {
    count: number;
    inc: () => void;
}

export const useCounter = create<Store>((set) => ({
    count: 0,
    inc: () => set((s) => ({ count: s.count + 1 })),
}));
