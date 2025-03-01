import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay";
import { getCoordinates, getWeather } from "../api/WeatherApi";
import maxtemp from "../assets/max temp.png";
import logo from "../assets/logo.svg";
import "./Home.css";

const Home = () => {
  const [weather, setWeather] = useState("null");



  const handleSearch = async (city) => {
    const location = await getCoordinates(city);
    if (location) {
      const weatherData = await getWeather(location.latitude, location.longitude);
      setWeather(weatherData);
    }
  };

  return (
    <div className="Home">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="sidebar">
       <h2>{weather.temperature}°</h2>
       <h5>Time: {weather.time}</h5>
       </div>
      <div className="content">
        <div className=""> <SearchBar onSearch={handleSearch} /></div>
        <div className="WeatherDisplay">
          <WeatherDisplay weather={weather} />
        </div>
      </div>
    </div>
  );
};

export default Home;

