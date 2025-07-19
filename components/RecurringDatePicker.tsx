'use client';

import RecurrenceOptions from './RecurrenceOptions';
import DateRangePicker from './DateRangePicker';
import CalendarPreview from './CalendarPreview';

export default function RecurringDatePicker() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow space-y-4 bg-white">
      <h2 className="text-2xl font-bold text-center">🗓️ Recurring Date Picker</h2>
      <RecurrenceOptions />
      <DateRangePicker />
      <CalendarPreview />
    </div>
  );
}

