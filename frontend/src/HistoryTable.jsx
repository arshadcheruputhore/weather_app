// HistoryTable.jsx
import React, { useState } from 'react';

// Predefined list of cities to filter historical weather data
const cities = ['Delhi', 'Moscow', 'Paris', 'New York', 'Sydney', 'Riyadh'];

const HistoryTable = ({ history, onFilter }) => {
  const [city, setCity] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  console.log('history is', history);
  

  // Filter handler to validate and trigger filtering logic
  const handleFilter = () => {
    if (from && to) {
      const diff = (new Date(to) - new Date(from)) / (1000 * 3600 * 24); // Calculate date range in days
      if (diff > 30) {
        alert('Maximum date range is 30 days.'); // Validation for max range
        return;
      }
    }
    onFilter({ city, from, to }); // Trigger filtering function with selected filters
  };

  return (
    <div className="mt-10 p-4 bg-white rounded-xl shadow-md w-full max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        {/* City Filter Dropdown */}
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">All Cities</option>
          {cities.map((c) => (
            <option key={c} value={c.toLowerCase()}>{c}</option>
          ))}
        </select>

        {/* Date From Input */}
        <input
          type="date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
        />

        {/* Date To Input */}
        <input
          type="date"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
        />

        {/* Apply Filter Button */}
        <button
          onClick={handleFilter}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md"
        >
          Apply Filter
        </button>
      </div>

      {/* Table displaying filtered historical weather data */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">City</th>
              <th className="p-2 border">Temperature (°C)</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Icon</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, _id) => (
              <tr key={_id} className="hover:bg-gray-50">
                <td className="p-2 border">{entry.city.toUpperCase()}</td>
                <td className="p-2 border">{entry.temperature}</td>
                <td className="p-2 border ">{entry.description}</td>
                <td className="p-2 border">
                    <img
                    src={`https://openweathermap.org/img/wn/${entry.icon}@2x.png`}
                    alt={entry.description}
                    className="w-10 h-10 mx-auto"
                    />
                </td>
                <td className="p-2 border">{new Date(entry.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryTable;
