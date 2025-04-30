const openBtn = document.getElementById("openModal");
const modal = document.getElementById("themeModal");
const body = document.getElementById("body");

// Afficher/masquer la modale
openBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});

// Changer de thème au clic sur une couleur
modal.querySelectorAll("button[data-theme]").forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.getAttribute("data-theme");

    // Réinitialiser
    body.className = "min-h-screen transition-colors duration-300";

    // Appliquer le thème choisi
    switch (theme) {
      case "light":
        body.classList.add("bg-white", "text-black");
        break;
      case "dark":
        body.classList.add("bg-gray-900", "text-white");
        break;
      case "orange":
        body.classList.add("bg-orange-100", "text-orange-900");
        break;
      case "blue":
        body.classList.add("bg-blue-100", "text-blue-900");
        break;
    }

    // Fermer la modale
    modal.classList.add("hidden");
  });
});

// Fermer la modale si on clique en dehors
document.addEventListener("click", (event) => {
  const isClickInsideModal = modal.contains(event.target);
  const isClickOnButton = openBtn.contains(event.target);

  if (!isClickInsideModal && !isClickOnButton) {
    modal.classList.add("hidden");
  }
});
