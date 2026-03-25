import "./assets/base.css";
import { renderLanding } from "./components/Landing/Landing.js";
import { renderDashboard } from "./components/Dashboard/Dashboard.js";

const app = document.querySelector("#app");

// Función para cambiar de "página"
window.showDashboard = (userData) => {
  app.innerHTML = renderDashboard(userData);
};

// Por defecto mostramos la Landing
app.innerHTML = renderLanding();
