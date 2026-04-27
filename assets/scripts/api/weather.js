import { API_KEY } from "../../config.js";

export async function fetchWeather(city = "Buenos Aires") {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
  );

  if (!response.ok) {
    const errorMessages = {
      404: "Ciudad no encontrada",
      500: "Error del servidor",
    };

    throw new Error(
      errorMessages[response.status] || "Error al obtener el clima"
    );
  }

  return response.json();
}