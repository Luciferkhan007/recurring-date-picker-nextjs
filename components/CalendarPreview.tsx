'use client';

import { useRecurrenceStore } from '../store/useRecurrenceStore';

export default function CalendarPreview() {
  const {
    frequency,
    startDate,
    endDate,
    weekdays,
  } = useRecurrenceStore();

  if (frequency === 'None') return null;

  return (
    <div className="mt-4 border rounded p-4 bg-gray-50">
      <h3 className="font-semibold mb-2">📅 Recurrence Summary:</h3>
      <p><strong>Recurring:</strong> {frequency}</p>
      <p><strong>Start Date:</strong> {startDate || 'Not selected'}</p>
      <p><strong>End Date:</strong> {endDate || 'Not selected'}</p>

      {frequency === 'weekly' && weekdays.length > 0 && (
        <p><strong>Repeat on:</strong> {weekdays.join(', ')}</p>
      )}

      {frequency === 'weekly' && weekdays.length === 0 && (
        <p className="text-red-500">⚠️ No weekdays selected</p>
      )}

      <p className="text-sm text-gray-400 mt-2">Calendar preview coming soon…</p>
    </div>
  );
}

