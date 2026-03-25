// Importamos el CSS desde la nueva carpeta assets
import "./assets/style.css";

document.querySelector("#app").innerHTML = `
  <div class="landing-container">
    <header class="navbar">
      <div class="logo">Volt<span>Schedule</span></div>
    </header>

    <main class="hero">
      <h1>Domina tu <span class="highlight">Flujo Académico</span></h1>
      <p>El sistema de control para el estudiante de ingeniería que no es perfecto, pero tiene el poder.</p>
      
      <div class="auth-box">
        <button id="btn-google" class="btn-google">
          <img src="https://www.svgrepo.com/show/355037/google.svg" width="20" alt="" />
          Entrar con Google
        </button>
      </div>
    </main>
  </div>
`;

// Un pequeño "tester" para ver que el botón funciona
document.querySelector("#btn-google").addEventListener("click", () => {
  console.log("Iniciando conexión con el servidor de Google...");
  alert("¡Energía detectada! Pronto configuraremos el Login real.");
});
