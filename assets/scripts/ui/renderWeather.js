export function renderWeather(data) {
  const card = document.querySelector("#cardWeather");

  const now = new Date();
  const lastUpdated = now.toLocaleString("es-AR");

  card.querySelector(".city-name").textContent = data.name;
  card.querySelector(".weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  card.querySelector(".weather-temp").textContent = data.main.temp;
  card.querySelector(".weather-temp-min").textContent = data.main.temp_min;
  card.querySelector(".weather-temp-max").textContent = data.main.temp_max;
  card.querySelector(".weather-desc").textContent = data.weather[0].description;
  card.querySelector(".last-updated").textContent = lastUpdated;

  card.classList.remove("d-none");
  card.classList.add("in");

}

export function showSpinner() {
  document.querySelector("#weatherSpinner").classList.add("in");
}

export function hideSpinner() {
  document.querySelector("#weatherSpinner").classList.remove("in");
}

export function showError(message) {
  const alert = document.querySelector("#alertError");
  alert.querySelector(".alert-message").textContent = message;
  alert.classList.add("show");
}