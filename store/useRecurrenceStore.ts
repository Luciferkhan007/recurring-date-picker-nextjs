import { create } from 'zustand';

type Frequency = 'None' | 'daily' | 'weekly' | 'monthly' | 'yearly';

interface RecurrenceState {
  frequency: Frequency;
  startDate: string;
  endDate?: string;
  weekdays: string[];
  setFrequency: (freq: Frequency) => void;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  toggleWeekday: (day: string) => void;
}

export const useRecurrenceStore = create<RecurrenceState>((set, get) => ({
  frequency: 'None',
  startDate: '',
  endDate: '',
  weekdays: [],
  setFrequency: (frequency) => set({ frequency }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
  toggleWeekday: (day) => {
    const { weekdays } = get();
    set({
      weekdays: weekdays.includes(day)
        ? weekdays.filter((d) => d !== day)
        : [...weekdays, day],
    });
  },
}));
