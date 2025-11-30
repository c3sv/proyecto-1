// Colocar al final del <body> o en un archivo .js
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".Menu-Inicio");

menuToggle.addEventListener("click", () => {
  // Alterna la clase 'active' que hace visible el menú en CSS
  navMenu.classList.toggle("active");
});
