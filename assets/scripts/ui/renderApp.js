// renderApp.js

export function renderApp(state) {
  const spinner = document.querySelector("#weatherSpinner");
  const card = document.querySelector("#cardWeather");
  const alert = document.querySelector("#alertError");

  // RESET
  spinner.classList.remove("in");
  card.classList.add("d-none");
  alert.classList.remove("show");

  // LOADING
  if (state.loading) {
    spinner.classList.add("in");
    return;
  }

  // ERROR
  if (state.error) {
    alert.querySelector(".alert-message").textContent = state.error;
    alert.classList.add("show");
    return;
  }

  // SUCCESS
  if (state.data) {
    const data = state.data;

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

}