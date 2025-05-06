// WeatherForm.jsx
import React, { useState } from 'react';

const WeatherForm = ({ onFetch }) => {
  const [city, setCity] = useState(''); // State to hold the user input city name

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (city.trim()) {
      onFetch(city.toLowerCase()); // Trigger parent function to fetch weather
      setCity(''); // Reset input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 p-4 shadow-md rounded-xl bg-white w-full max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)} // Update city as user types
        className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md"
      >
        Get Weather
      </button>
    </form>
  );
};

export default WeatherForm;