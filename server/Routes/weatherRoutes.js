// server/routes/weather.js
const express = require("express");
const router = express.Router();
const axios = require("axios");
const Weather = require("../Models/weather");

router.post("/fetch-weather", async (req, res) => {
  const { city } = req.body;

  const apiKey = process.env.OPENWEATHER_API_KEY;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const { temp } = response.data.main;
    const description = response.data.weather[0].description;
    const icon = response.data.weather[0].icon;

    const weatherData = new Weather({
      city,
      temperature: temp,
      description,
      icon,
    });
    await weatherData.save();

    res.json(weatherData);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather" });
  }
});

// GET /api/weather/history
router.get('/history', async (req, res) => {
  try {
    const { city, from, to } = req.query;

    // Create a filter object
    const filter = {};

    // If city is provided, add it to the filter
    if (city) {
      filter.city = city.toLowerCase();
    }

    // If date range is provided, filter within the range
    if (from && to) {
      filter.date = {
        $gte: new Date(from),
        $lte: new Date(to),
      };
    }

    const data = await Weather.find(filter).sort({ date: -1 });
    res.json(data);
  } catch (error) {
    console.error('Error fetching weather history:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
