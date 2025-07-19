// store/useRecurrenceStore.ts
import { create } from 'zustand';

type Frequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

interface RecurrenceState {
  frequency: Frequency;
  startDate: string;
  endDate?: string;
  setFrequency: (freq: Frequency) => void;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  frequency: 'daily',
  startDate: '',
  endDate: '',
  setFrequency: (frequency) => set({ frequency }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}));
