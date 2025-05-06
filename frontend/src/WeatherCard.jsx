// WeatherCard.jsx
import React from 'react';

const WeatherCard = ({ weather }) => {
    if (!weather) return null;
  
    // Adapt to backend response
    const { city, temperature, description, icon } = weather;
  
    return (
      <div className="mt-6 p-6 bg-white rounded-xl shadow-md w-full max-w-sm mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">{city.toUpperCase()}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="mx-auto"
        />
        <p className="text-xl font-semibold">{temperature}°C</p>
        <p className="capitalize text-gray-600">{description}</p>
      </div>
    );
  };
  

export default WeatherCard;