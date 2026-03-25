import "./Landing.css"; // <--- Importamos su propio estilo

export function renderLanding() {
  return `
    <div class="landing-page">
      <h1 class="landing-title">Volt<span>Schedule</span></h1>
      <button id="btn-google" class="btn-main">Entrar con Google</button>
    </div>
  `;
}
