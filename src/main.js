import "./assets/base.css";
import { renderLanding } from "./components/Landing/Landing.js";

const app = document.querySelector("#app");

// Función para manejar la respuesta de Google
window.handleCredentialResponse = (response) => {
  console.log("ID Token: " + response.credential);
  // Aquí puedes enviar el token a tu backend para verificar
  // Por ahora, solo mostramos un mensaje
  alert("¡Autenticación exitosa con Google!");
  // Podrías redirigir al dashboard aquí
};

// Renderizamos la landing
app.innerHTML = renderLanding();

// Inicializar Google Sign-In después de que el DOM esté listo
window.onload = () => {
  google.accounts.id.initialize({
    client_id: "TU_CLIENT_ID_DE_GOOGLE_AQUI",
    callback: handleCredentialResponse,
  });

  google.accounts.id.renderButton(document.getElementById("g_id_onload"), {
    theme: "outline",
    size: "large",
  });
};

// Escuchamos el clic del botón de nav (opcional)
document.addEventListener("click", (e) => {
  if (e.target.id === "btn-login-nav") {
    // Trigger Google Sign-In
    google.accounts.id.prompt();
  }
});
