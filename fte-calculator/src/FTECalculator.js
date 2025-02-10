import React, { useState } from 'react';

export default function FTECalculator() {
  const monthOptions = [
    { label: 'January', value: 31 },
    { label: 'February', value: 28 },
    { label: 'March', value: 31 },
    { label: 'April', value: 30 },
    { label: 'May', value: 31 },
    { label: 'June', value: 30 },
    { label: 'July', value: 31 },
    { label: 'August', value: 31 },
    { label: 'September', value: 30 },
    { label: 'October', value: 31 },
    { label: 'November', value: 30 },
    { label: 'December', value: 31 },
  ];

  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);
  const daysInMonth = monthOptions[selectedMonthIndex].value;
  const [coverageDays, setCoverageDays] = useState('');

  const handleCoverageDaysChange = (e) => {
    let val = e.target.value;
    if (val.length > 1) {
      val = val.replace(/^0+/, '');
    }
    setCoverageDays(val);
  };

  const coverageDaysNum = coverageDays === '' ? 0 : Number(coverageDays);
  const fteEquivalent = daysInMonth > 0 ? coverageDaysNum / daysInMonth : 0;

  return (
    <div className="p-4 flex flex-col items-center justify-start gap-4 w-full h-full bg-gray-50">
      <div className="max-w-md w-full bg-white shadow rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-2">FTE Calculator</h2>
        <p className="text-sm text-gray-600 mb-4">
          Select the month, then enter the total coverage days. The calculator will show the equivalent FTE.
        </p>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 font-semibold">Select Month</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2"
              value={selectedMonthIndex}
              onChange={(e) => setSelectedMonthIndex(Number(e.target.value))}
            >
              {monthOptions.map((month, index) => (
                <option key={month.label} value={index}>
                  {month.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Unavailable Days</label>
            <input
              type="number"
              min="0"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={coverageDays}
              onChange={handleCoverageDaysChange}
            />
          </div>

          <div className="border-t pt-4 mt-4">
            <p className="text-md mb-1"><strong>Days in Selected Month:</strong> {daysInMonth}</p>
            <p className="text-md mb-1"><strong>Coverage Days:</strong> {coverageDays === '' ? 0 : coverageDays}</p>
            <p className="text-md font-semibold"><strong>FTE Equivalent:</strong> {fteEquivalent.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
