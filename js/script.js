// Script pour l'ouverture et la fermeture du menu
//----------------------------------------------------
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Variables et constantes du projet
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
const panneauNav = document.querySelector("#nav--primary");
const liensNav = document.querySelectorAll("#nav--primary li a");
console.log(liensNav);

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Ouverture du panneau de navigation
// Description : Gestion de l'ouverture du panneau et dévoilement des options
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
function openNav() {
    panneauNav.style.width = "100%";

    setTimeout(() => {
        for (const lien of liensNav) {
            console.log(lien);
            lien.style.opacity = 1;
            lien.classList.remove("fadeMenu");
        }
    }, 800);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Fermeture du panneau de navigation
// Description : Gestion de la fermeture du panneau et masquage des options
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
function closeNav() {
    for (const lien of liensNav) {
        lien.style.opacity = 0;
        lien.classList.add("fadeMenu");
    }
    setTimeout(() => {
        panneauNav.style.width = "0%";
    }, 600);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Redirection vers une autre page
// Description : Gestion du retardement de la redirection vers une autre page
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
function redirection(event) {
    event.preventDefault();
    const url = event.target.getAttribute('href');
    closeNav();

    setInterval(() => {
        window.location.href = url;
    }, 980);
}