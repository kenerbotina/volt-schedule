import "./Landing.css";

export function renderLanding(onLogin) {
  return `
    <div class="landing-wrapper">
      <nav class="glass-nav">
        <div class="logo">Volt<span>Schedule</span></div>
        <div class="nav-items">
          <a href="#features">Tecnología</a>
          <a href="#social">Redes</a>
          <a href="#about">Acerca de</a>
          <button id="btn-login-nav" class="btn-outline">Acceder</button>
        </div>
      </nav>

      <header class="hero-section">
        <div class="hero-content">
          <div class="status-pill">● Sistema Operativo v1.0</div>
          <h1>Gestión de <span class="cyan-glow">Carga Académica</span></h1>
          <p>La herramienta de precisión para estudiantes de ingeniería. Visualiza tu semestre como un diagrama de flujo de alta eficiencia.</p>
          
          <div class="hero-btns">
            <div id="g_id_onload"
                 data-client_id="TU_CLIENT_ID_DE_GOOGLE_AQUI"
                 data-context="signin"
                 data-ux_mode="popup"
                 data-callback="handleCredentialResponse"
                 data-auto_prompt="false">
            </div>
            <div class="g_id_signin"
                 data-type="standard"
                 data-shape="rectangular"
                 data-theme="outline"
                 data-text="signin_with"
                 data-size="large"
                 data-logo_alignment="left">
            </div>
            <button class="btn-ghost">Documentación</button>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="circuit-card">
            <div class="card-line"></div>
            <div class="card-line short"></div>
            <div class="card-dot"></div>
          </div>
        </div>
      </header>

      <section id="features" class="stats-bar">
        <div class="stat-item">
          <span class="stat-num">0ms</span>
          <span class="stat-label">Latencia de Datos</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">100%</span>
          <span class="stat-label">Sincronización Cloud</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">∞</span>
          <span class="stat-label">Eficiencia</span>
        </div>
      </section>

      <section id="social" class="social-section">
        <h2>Síguenos en Redes Sociales</h2>
        <div class="social-links">
          <a href="#" class="social-link">
            <img src="https://www.svgrepo.com/show/452229/facebook.svg" alt="Facebook" />
            Facebook
          </a>
          <a href="#" class="social-link">
            <img src="https://www.svgrepo.com/show/452234/twitter.svg" alt="Twitter" />
            Twitter
          </a>
          <a href="#" class="social-link">
            <img src="https://www.svgrepo.com/show/452197/instagram.svg" alt="Instagram" />
            Instagram
          </a>
          <a href="#" class="social-link">
            <img src="https://www.svgrepo.com/show/452210/linkedin.svg" alt="LinkedIn" />
            LinkedIn
          </a>
        </div>
      </section>

      <footer id="about" class="footer">
        <div class="footer-content">
          <div class="footer-section">
            <h3>VoltSchedule</h3>
            <p>Herramienta profesional para la gestión de horarios académicos. Diseñada para estudiantes que buscan eficiencia y organización.</p>
          </div>
          <div class="footer-section">
            <h3>Enlaces</h3>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#features">Tecnología</a></li>
              <li><a href="#social">Redes Sociales</a></li>
              <li><a href="#about">Acerca de</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Contacto</h3>
            <p>Email: info@voltschedule.com</p>
            <p>Teléfono: +1 (555) 123-4567</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 VoltSchedule. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  `;
}
