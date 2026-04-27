// =============================================
// DINOVATION DIGITAL — JavaScript principal
// =============================================
// Ce fichier est chargé sur toutes les pages.
// Il contient les animations et interactions.


// --- ANIMATION DES COMPTEURS (page accueil) ---
// Cette fonction fait monter un nombre de 0 jusqu'à sa valeur cible.

function animerCompteur(elementId, valeurCible, suffixe = '') {
  const element = document.getElementById(elementId);
  if (!element) return; // si l'élément n'existe pas sur cette page, on arrête

  let valeurActuelle = 0;
  const duree = 2000; // durée en millisecondes (2 secondes)
  const increments = 60; // nombre d'étapes
  const pas = valeurCible / increments;

  const interval = setInterval(function () {
    valeurActuelle += pas;

    if (valeurActuelle >= valeurCible) {
      valeurActuelle = valeurCible;
      clearInterval(interval); // on arrête quand on a atteint la valeur
    }

    element.textContent = Math.floor(valeurActuelle) + suffixe;
  }, duree / increments);
}


// --- DÉMARRER LES COMPTEURS QUAND ILS SONT VISIBLES ---
// On utilise IntersectionObserver : l'animation ne démarre
// que quand l'utilisateur scroll jusqu'à la section stats.

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // La section est visible → on lance les compteurs
      animerCompteur('stat-clients', 120, '+');
      animerCompteur('stat-projets', 340, '+');
      animerCompteur('stat-pays',    18, '');
      observer.disconnect(); // on ne relance pas si on rescroll
    }
  });
}, { threshold: 0.3 });

const sectionStats = document.querySelector('.stats');
if (sectionStats) {
  observer.observe(sectionStats);
}


// --- MESSAGE DE BIENVENUE DANS LA CONSOLE ---
// Ouvre les outils développeur (F12) pour voir ce message !
console.log('%c🦕 Bienvenue dans le code de Dinovation Digital !', 'color: #534AB7; font-size: 16px; font-weight: bold;');
console.log('Ce fichier est : js/main.js');
console.log('Essaie de modifier les valeurs dans animerCompteur() !');
