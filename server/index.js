// server/index.js
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const weatherRoutes = require('./Routes/weatherRoutes')
app.use('/api/weather', weatherRoutes)

// Connect to MongoDB
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTION_STRING)
  .then(() => console.log("MongoDB connected"))

// Define routes below...
app.listen(5000, () => console.log("Server running on port 5000"))
