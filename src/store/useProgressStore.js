import { create } from 'zustand';

export const useProgressStore = create((set) => ({
    hours: 0,
    points: 0,
    townData: Array(100).fill(null),
    buildQueue: [],

    enqueueItem: (item, cost) =>
        set((state) => {
            if (state.points >= cost) {
                return {
                    points: state.points - cost,
                    buildQueue: [...state.buildQueue, item],
                };
            }
            return {};
        }),

    clearBuildQueue: () => set({ buildQueue: [] }),

    addHours: (h) =>
        set((state) => {
            const earned = h;
            return {
                hours: state.hours + h,
                points: state.points + earned,
            };
        }),

    spendPoints: (amount) =>
        set((state) => {
            if (state.points >= amount) {
                return { points: state.points - amount };
            }
            return {};
        }),

    placeItemAt: (index) =>
        set((state) => {
            if (!state.townData[index] && state.buildQueue.length > 0) {
                const newTown = [...state.townData];
                const [item, ...rest] = state.buildQueue;
                newTown[index] = item;
                return {
                    townData: newTown,
                    buildQueue: rest,
                };
            }
            return {};
        }),
}));