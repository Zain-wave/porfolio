document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");
  const noProjectsMessage = document.getElementById("no-projects-message");
  const table = document.getElementById("projects-table");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remover clase active de todos los botones
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Agregar clase active al botón clickeado
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
