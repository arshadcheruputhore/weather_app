# 🌤️ Weather UI (React + Tailwind)

A responsive weather application built with React and Tailwind CSS. Users can search the current weather of any city using the OpenWeatherMap API, view it in a card layout, and review the history of their weather queries filtered by city and date.

---

## 🔗 GitHub Repository

[GitHub Repo](https://github.com/arshadcheruputhore/weather_app)

---

## 🚀 Features

* 🔍 Search current weather by city name
* 📅 See history of weather queries
* 🗂️ Filter history by city and date range (up to 30 days)
* 💾 Weather data stored in MongoDB
* 📱 Responsive UI using Tailwind CSS

---

## 🧰 Tech Stack

* **Frontend:** React, Tailwind CSS
* **Backend:** Node.js, Express
* **Database:** MongoDB
* **API:** OpenWeatherMap

---

## 📦 How to Run the App

### 1. Clone the Repository

```bash
git clone https://github.com/arshadcheruputhore/weather_app
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file at the root with the following variables:

```env
OPENWEATHER_API_KEY=5801c5134c3642360068917b1f3db312
CONNECTION_STRING=mongodb+srv://arshadcheruputhore:9061@cluster0.cqkad.mongodb.net/projectFairDB?retryWrites=true&w=majority&appName=Cluster0
```

### 4. Start the Backend Server

```bash
nodemon
```

### 5. Start the Frontend

```bash
npm run dev
```

The application should now be running at `http://localhost:5173`

---

## 📁 Project Structure

```
weather-app/
├── frontend/              # React Frontend
│   ├── components/      # WeatherForm, WeatherCard, HistoryTable
│   └── App.jsx
├── server/              # Express Backend
│   ├── routes/
│   ├── models/
│   └── index.js
├── .env
└── README.md

```

---

## ✅ Best Practices Followed

* Clean, modular component structure
* Semantic naming conventions
* Form validation and state handling
* Responsive layout
* Clear folder organization

---

## 🧪 Future Enhancements

* 5-day weather forecast
* Download history as CSV
* Add login and user-specific data storage

---

## 👨‍💻 Author

**MOHAMMED ARSHAD**
GitHub: [@arshadcheruputhore](https://github.com/arshadcheruputhore)
LinkedIn: [linkedin.com/in/arshadcheruputhore](https://linkedin.com/in/arshadcheruputhore)

---
