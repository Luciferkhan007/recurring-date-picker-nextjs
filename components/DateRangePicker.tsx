'use client';

import { useRecurrenceStore } from '../store/useRecurrenceStore';

export default function DateRangePicker() {
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  } = useRecurrenceStore();

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">Start Date:</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border rounded px-3 py-2"
      />

      <label className="font-medium">End Date:</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border rounded px-3 py-2"
      />
    </div>
  );
}
