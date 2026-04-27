import { API_KEY } from "../../config.js";

export async function fetchWeather(city = "Buenos Aires") {

  if (city.length < 3) return;
  
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`);

  if (!response.ok) {
    const errorMap = {
      "city not found": "La ciudad no existe",
    };

    throw new Error(errorMap[data.message] || "Error getting weather");
  }

  return response.json();
}