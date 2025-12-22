document.addEventListener("DOMContentLoaded", function () {
  const toast = document.createElement("div");
  toast.textContent = "👋 Bienvenido a mi portafolio";

  Object.assign(toast.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "rgba(26, 26, 26, 0.95)",
    color: "#ffffff",
    padding: "14px 20px",
    borderRadius: "12px",
    fontSize: "0.9rem",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    transform: "translateY(20px)",
    opacity: "0",
    transition: "all 0.4s ease",
    zIndex: "9999",
  });

  document.body.appendChild(toast);

  // Mostrar
  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  }, 200);

  // Ocultar
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => toast.remove(), 400);
  }, 4000);
});
