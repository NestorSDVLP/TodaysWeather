import { fetchWeather } from "./api/weather.js";
import { renderApp } from "./ui/renderApp.js";
import { setState, subscribe, getState } from "./state/store.js";
import { debounce } from "./utils/debounce.js";

// ?? UI reacciona automáticamente

subscribe(renderApp);
renderApp(getState());

// INIT

loadWeather(getState().city);

async function loadWeather(city) {
  setState({ loading: true, error: null });

  try {
    const data = await fetchWeather(city);
    setState({ data, loading: false });
  } catch (error) {
    setState({ error: error.message, loading: false });
  }
}

// ?? búsqueda con debounce
const debouncedSearch = debounce((city) => {
  if (!city || city.length < 3) return;
    setState({ city });
    loadWeather(city);
}, 500);

document.querySelector("#searchCity").addEventListener("input", (e) => {
    debouncedSearch(e.target.value.trim());
});