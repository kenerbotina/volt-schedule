import "./Dashboard.css"; // <--- Estilo independiente

export function renderDashboard(user) {
  return `
    <div class="dashboard-container">
      <nav class="side-menu">
        <p>Bienvenido, ${user.name}</p>
      </nav>
      <main class="grid-area">
        <h2>Tu Horario de Carga</h2>
        </main>
    </div>
  `;
}
