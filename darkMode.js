// Script pour le dark mode
document.addEventListener("DOMContentLoaded", function () {
  const themeSwitch = document.getElementById("theme-switch");
  const html = document.documentElement;
  const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>`;
  const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>`;

  // Fonction pour appliquer le thème
  function applyTheme(isDark) {
    if (isDark) {
      html.classList.add("dark");
      document.body.classList.add(
        "dark:bg-neutral-900",
        "dark:text-neutral-200"
      );
      themeSwitch.innerHTML = lightIcon;
    } else {
      html.classList.remove("dark");
      document.body.classList.remove(
        "dark:bg-neutral-900",
        "dark:text-neutral-200"
      );
      themeSwitch.innerHTML = darkIcon;
    }
  }

  // Appliquer le thème initial
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");
  const isDarkMode = savedTheme === "dark" || (!savedTheme && prefersDark);

  applyTheme(isDarkMode);

  // Écouteur d'événement pour le bouton
  themeSwitch.addEventListener("click", () => {
    const isDark = !html.classList.contains("dark");
    applyTheme(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});

// Ajouter un gestionnaire d'événement global pour détecter les clics
document.addEventListener("click", function (event) {
  if (event.target.closest("#theme-switch")) {
    console.log("Détection de clic sur le bouton de thème");
  }
});
