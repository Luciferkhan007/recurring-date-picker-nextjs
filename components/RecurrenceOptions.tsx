'use client';

import { useRecurrenceStore } from '../store/useRecurrenceStore';

const weekdaysList = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function RecurrenceOptions() {
  const {
    frequency,
    setFrequency,
    weekdays,
    toggleWeekday,
  } = useRecurrenceStore();

  return (
    <div className="space-y-4">
      <div>
        <label className="font-medium">Recurrence:</label>
        <div className="flex gap-2 flex-wrap mt-1">
          {['None', 'daily', 'weekly', 'monthly', 'yearly'].map((freq) => (
            <button
              key={freq}
              onClick={() => setFrequency(freq as any)}
              className={`px-3 py-1 rounded border transition ${
                frequency === freq ? 'bg-blue-600 text-white' : 'bg-white'
              }`}
            >
              {freq.charAt(0).toUpperCase() + freq.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {frequency === 'weekly' && (
        <div>
          <label className="font-medium">Repeat on:</label>
          <div className="flex gap-2 mt-1">
            {weekdaysList.map((day) => (
              <button
                key={day}
                onClick={() => toggleWeekday(day)}
                className={`px-3 py-1 rounded border ${
                  weekdays.includes(day)
                    ? 'bg-green-600 text-white'
                    : 'bg-white'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

