import { fetchWeather } from "./api/weather.js";
import {
  renderWeather,
  clearWeather,
  showSpinner,
  hideSpinner,
  showError,
} from "./ui/renderWeather.js";

import { debounce } from "./utils/debounce.js";

const state = {
  city: "Buenos Aires",
  loading: false,
  error: null,
};

async function loadWeather(city) {
  state.loading = true;
  state.error = null;

  showSpinner();

  try {
    const data = await fetchWeather(city);
    renderWeather(data);
  } catch (error) {
    state.error = error.message;
    clearWeather();
    showError(error.message);
  } finally {
    state.loading = false;
    hideSpinner();
  }
}

const debouncedSearch = debounce((city) => {
    if (!city) return;
    state.city = city;
    loadWeather(city);
}, 500);

// Init:

loadWeather(state.city);

// Search Event:

document.querySelector("#weatherSearchCity").addEventListener("input", (e) => {
    const city = e.target.value.trim();
    debouncedSearch(city);
});