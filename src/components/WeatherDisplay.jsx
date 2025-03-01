import React from "react";
import "./SearchBar.css";
import wind from "../assets/wind.png";
import Humidity from "../assets/Humidity.png";
import maxtemp from "../assets/max temp.png";
const WeatherDisplay = ({ weather }) => {
  if (!weather) return <p>No weather data available</p>;

  return (
    <>
      <h3>Weather Details</h3>
      <div className="WeatherDisplay">
        <div className="text"><p>temperature: {weather.temperature}°C <img className="images" src={maxtemp}></img></p></div>
        <div><p>wind direction: {weather.winddirection}° <img className="images" src={Humidity}></img></p></div>
        <div>  <p>wind: {weather.windspeed}Km/h <img className="images" src={wind}></img></p></div>

      </div>
    </>
  );
};

export default WeatherDisplay;
