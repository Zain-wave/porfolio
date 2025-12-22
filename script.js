document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");
  const noProjectsMessage = document.getElementById("no-projects-message");
  const table = document.getElementById("projects-table");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      let visibleCount = 0;

      projectItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-tech") === filter) {
          item.style.display = "table-row";
          visibleCount++;
        } else {
          item.style.display = "none";
        }
      });

      if (visibleCount === 0) {
        noProjectsMessage.style.display = "block";
        table.style.display = "none";
      } else {
        noProjectsMessage.style.display = "none";
        table.style.display = "table";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      if (!name || !email || !message) {
        alert("Por favor completa todos los campos obligatorios (*)");
        return;
      }

      const formData = {
        name: name,
        email: email,
        subject: subject || "Sin asunto",
        message: message,
      };

      alert(
        `¡Gracias ${name}!\n\nTu mensaje ha sido enviado correctamente. Te responderé a ${email} en la mayor brevedad posible.`
      );

      contactForm.reset();

      console.log("Datos del formulario:", formData);
    });
  }
});

// Botón para cambiar texto de la sección "about" (toggle)
document.addEventListener("DOMContentLoaded", function () {
  const aboutPara = document.querySelector(".about-section > p");
  const btn = document.getElementById("changeTextBtn");

  if (!aboutPara || !btn) return;

  const originalText = aboutPara.textContent.trim();
  const shortText =
    "Soy aspirante a Desarrollador de Software, centrado en frontend y backend. Busco crecer con proyectos reales.";

  aboutPara.style.transition = "opacity 0.25s ease";

  let showingShort = false;

  btn.addEventListener("click", function () {
    aboutPara.style.opacity = 0;
    setTimeout(() => {
      aboutPara.textContent = showingShort ? originalText : shortText;
      aboutPara.style.opacity = 1;
      showingShort = !showingShort;
      btn.textContent = showingShort
        ? "Ver versión completa"
        : "Ver versión corta";
    }, 250);
  });
});
s;
