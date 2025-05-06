// server/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "https://weather-app-gold-two-37.vercel.app/", 
    credentials: true,
  })
);
app.use(express.json());

const weatherRoutes = require("./Routes/weatherRoutes");
app.use("/api/weather", weatherRoutes);

// Connect to MongoDB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("MongoDB connected"));

// Define routes below...
app.listen(5000, () => console.log("Server running on port 5000"));

app.get('/', (req, res) => {
    res.send('Backend is running');
  });
