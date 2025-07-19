'use client';
import { useRecurrenceStore } from '../store/useRecurrenceStore';

export default function DateRangePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <div className="space-y-2 mt-4">
      <label className="font-medium">Date Range:</label>
      <div className="flex flex-col gap-2">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="p-2 border rounded"
        />
      </div>
    </div>
  );
}
