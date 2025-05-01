// Script pour le dark mode
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner le bouton de changement de thème et l'élément HTML
  const themeSwitch = document.getElementById("theme-switch");
  const html = document.documentElement;

  console.log("Dark mode script loaded"); // Vérification du chargement

  // Vérifier si le bouton existe
  if (!themeSwitch) {
    console.error("Bouton theme-switch non trouvé!");
    return;
  }

  console.log("Bouton thème trouvé:", themeSwitch); // Vérification du bouton

  // Appliquer le thème initial
  if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    html.classList.add("dark");
    console.log("Thème initial: dark");
  } else {
    html.classList.remove("dark");
    console.log("Thème initial: light");
  }

  // Ajouter l'écouteur d'événement au bouton
  themeSwitch.addEventListener("click", function () {
    console.log("Bouton thème cliqué");

    // Basculer la classe dark
    html.classList.toggle("dark");

    // Enregistrer la préférence
    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      console.log("Changé en dark mode");
    } else {
      localStorage.setItem("theme", "light");
      console.log("Changé en light mode");
    }
  });
});

// Ajouter un gestionnaire d'événement global pour détecter les clics
document.addEventListener("click", function (event) {
  if (event.target.closest("#theme-switch")) {
    console.log("Détection de clic sur le bouton de thème");
  }
});
