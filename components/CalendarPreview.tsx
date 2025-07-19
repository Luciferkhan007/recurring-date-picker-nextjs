'use client';
import { useRecurrenceStore } from '../store/useRecurrenceStore';

export default function CalendarPreview() {
  const { frequency, startDate, endDate } = useRecurrenceStore();

  return (
    <div className="mt-6 p-4 border rounded bg-gray-50">
      <h3 className="font-semibold">📅 Recurrence Summary:</h3>
      <p>Recurring: <strong>{frequency}</strong></p>
      <p>Start Date: <strong>{startDate || 'N/A'}</strong></p>
      <p>End Date: <strong>{endDate || 'Not set'}</strong></p>
      <p className="text-sm text-gray-500 mt-2">Calendar preview coming soon...</p>
    </div>
  );
}
