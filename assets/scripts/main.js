// scripts/main.js

import { fetchWeather } from "./api/weather.js";
import {
  renderWeather,
  showSpinner,
  hideSpinner,
  showError,
} from "./ui/renderWeather.js";

(async () => {
  "use strict";

  showSpinner();

  try {
    
    const data = await fetchWeather("Buenos Aires");
    renderWeather(data);

  } catch (error) {

    console.error(error);
    showError(error.message);

  } finally {

    hideSpinner();

  }

})();