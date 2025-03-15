// Fonction pour mettre à jour la date dans le footer
function updateFooterDate() {
  const currentYear = new Date().getFullYear();
  const version = "v2.0"; // Version actuelle
  const footerDate = document.getElementById("footer-date");
  if (footerDate) {
    footerDate.textContent = `© ${currentYear} - Portfolio ${version}`;
  }
}

// Mettre à jour la date au chargement de la page
document.addEventListener("DOMContentLoaded", updateFooterDate);
