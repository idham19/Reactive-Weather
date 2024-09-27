import React from "react";
// Import data and WeatherCard here
import WeatherCard from "./components/WeatherCard";
const cities = require("./data")
console.log(cities)
function App() {
  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        {
          /* Render components here */
          cities.map((city) => (
            <WeatherCard  data={city} />
          ))
        }
      </div>
    </>
  );
}

export default App;
