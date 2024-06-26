// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  const toggleMenuBtn = document.getElementById("toggleMenuBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const fullscreenMenu = document.getElementById("fullscreenMenu");

  toggleMenuBtn.addEventListener("click", () => {
    fullscreenMenu.style.display = fullscreenMenu.style.display === "block" ? "none" : "block";
  });

  closeMenuBtn.addEventListener("click", () => {
    fullscreenMenu.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === fullscreenMenu) {
      fullscreenMenu.style.display = "none";
    }
  });
});
