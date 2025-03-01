import axios from "axios";

const GEO_API_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

export const getCoordinates = async (city) => {
  try {
    const response = await axios.get(`${GEO_API_URL}?name=${city}&count=1`);
    return response.data.results?.[0];
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
};

export const getWeather = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `${WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    return response.data.current_weather;

  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};


