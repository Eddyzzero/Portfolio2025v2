const openBtn = document.getElementById("openModal");
const modal = document.getElementById("themeModal");
const htmlElement = document.documentElement;
let isDarkMode = false;

// Vérifier la préférence système
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  htmlElement.classList.add("dark");
  isDarkMode = true;
}

// Vérifier le localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  isDarkMode = savedTheme === "dark";
  if (isDarkMode) {
    htmlElement.classList.add("dark");
  }
}

// Toggle dark mode
openBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  isDarkMode = !isDarkMode;
  htmlElement.classList.toggle("dark");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  console.log(`Dark mode is now ${isDarkMode ? "enabled" : "disabled"}`);
});

// Fermer la modale si on clique en dehors
document.addEventListener("click", (event) => {
  const isClickInsideModal = modal?.contains(event.target);
  const isClickOnButton = openBtn.contains(event.target);

  if (!isClickInsideModal && !isClickOnButton && modal) {
    modal.classList.add("hidden");
  }
});
