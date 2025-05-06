// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherForm from './WeatherForm';
import WeatherCard from './WeatherCard';
import HistoryTable from './HistoryTable';

const App = () => {
  const [weather, setWeather] = useState(null); // Holds the latest fetched weather data
  const [history, setHistory] = useState([]);   // Holds historical weather data

  const baseURL = import.meta.env.VITE_API_BASE_URL;

  // Function to fetch current weather for a given city
  const fetchWeather = async (city) => {
    try {
      const response = await axios.post(`${baseURL}/api/weather/fetch-weather`, { city });
      
      setWeather(response.data); // Store latest weather
      fetchHistory(); // Refresh historical data
    } catch (error) {
      alert('Failed to fetch weather. Please try again.');
      console.log(error);
    }
  };

  // Function to get historical weather data from the server
  const fetchHistory = async () => {
    try {
      const res = await axios.get(`${baseURL}/api/weather/history`);
      
      setHistory(res.data);
    } catch (error) {
      console.error('Error fetching history:', error.message);
      console.log(error);
      
    }
  };

  // Filtering historical weather data by city and date range
  const handleFilter = async ({ city, from, to }) => {
    try {
      const res = await axios.get(`${baseURL}/api/weather/history`, {
        params: { city, from, to }
      });
      setHistory(res.data);
    } catch (error) {
      console.error('Error filtering history:', error.message);
      console.log(error);
    }
  };

  // Fetch history on component mount
  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>
      
      {/* Weather Search Form */}
      <WeatherForm onFetch={fetchWeather} />

      {/* Weather Result Card */}
      <WeatherCard weather={weather} />

      {/* Historical Weather Table with Filters */}
      <HistoryTable history={history} onFilter={handleFilter} />
    </div>
  );
};

export default App;
