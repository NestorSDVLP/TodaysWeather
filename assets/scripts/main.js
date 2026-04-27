/* global bootstrap: false */
import { API_KEY } from "../../config.js";

(() => {
  'use strict'

  const getWeather = async () => {

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&appid=${API_KEY}&units=metric&lang=es`
        );

        if (!response.ok) {
            throw new Error(response.status);
            console.log(response.status);
        }

        const data = await response.json();

        document.querySelector("#cardWeather").classList.add("in");

        document.querySelector("#weatherSpinner").classList.remove("in");
        
        console.log(data);

        const now = new Date();
        const lastUpdated = now.toLocaleString("es-AR");

        document.querySelector("#cardWeather .city-name").textContent = data.name;

        document.querySelector("#cardWeather .weather-icon").setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

        document.querySelector("#cardWeather .weather-temp").textContent = data.main.temp;

        document.querySelector("#cardWeather .weather-temp-min").textContent = data.main.temp_min;

        document.querySelector("#cardWeather .weather-temp-max").textContent = data.main.temp_max;

        document.querySelector("#cardWeather .weather-desc").textContent = data.weather[0].description;

        document.querySelector("#cardWeather .last-updated").textContent = lastUpdated;

    } catch (error) {

        console.error(error);

        document.querySelector("#alertError .alert-message").textContent = error.message;

        document.querySelector("#alertError").classList.add("show");

    }
  };

  getWeather();

})()
