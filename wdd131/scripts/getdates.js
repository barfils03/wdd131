// Mettre à jour dynamiquement l'année du copyright et la date de dernière modification
document.addEventListener('DOMContentLoaded', function() {
    // Mettre à jour l'année du copyright
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Mettre à jour la date de dernière modification
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Dernière modification : ${lastModified}`;
});
