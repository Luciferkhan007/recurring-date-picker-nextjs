'use client';
import { useRecurrenceStore } from '../store/useRecurrenceStore';

export default function RecurrenceOptions() {
  const { frequency, setFrequency } = useRecurrenceStore();

  return (
    <div className="space-y-2">
      <label className="font-medium">Recurrence:</label>
      <div className="flex gap-2 flex-wrap">
        {['daily', 'weekly', 'monthly', 'yearly'].map((freq) => (
          <button
            key={freq}
            onClick={() => setFrequency(freq as any)}
            className={`px-3 py-1 rounded border ${
              frequency === freq ? 'bg-blue-600 text-white' : 'bg-white'
            }`}
          >
            {freq.charAt(0).toUpperCase() + freq.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
