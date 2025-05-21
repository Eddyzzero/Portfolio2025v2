// Script pour mettre à jour l'année dans le footer
document.addEventListener("DOMContentLoaded", function () {
  const footerDate = document.getElementById("footer-date");
  if (footerDate) {
    footerDate.textContent = "© " + new Date().getFullYear() + " Jhon Florez";
  }

  // Test pour vérifier si le mode sombre fonctionne
  console.log(
    "Mode sombre:",
    document.documentElement.classList.contains("dark")
  );
  console.log("HTML classes:", document.documentElement.classList.toString());

  // Fonction pour réinitialiser le thème (utile en cas de problème)
  window.resetTheme = function () {
    localStorage.removeItem("theme");
    document.documentElement.classList.remove("dark");
    console.log(
      "Thème réinitialisé - rechargez la page pour voir les changements"
    );
    location.reload();
  };
});

gsap.registerPlugin(Draggable);
Draggable.create("#draggableElement", {
  onDrag: function () {
    if (this.hitTest("#bag", "100%")) {
      gsap.to(this.target, {
        opacity: 0,
        scale: 1,
        ease: "circ.in",
      });
    }
  },
});

gsap.registerPlugin(Draggable);
Draggable.create("#draggableElement", "Burger");
