// src/js/paiement.js

// Récupération des éléments
const nomProduitSpan = document.querySelector('#produit-nom span');
const form = document.getElementById('form-paiement');
const telInput = document.getElementById('telephone');
const methodButtons = document.querySelectorAll('.btn-paiement');

// Champ caché pour envoyer le nom du produit avec le formulaire
const hiddenProductInput = document.createElement('input');
hiddenProductInput.type = 'hidden';
hiddenProductInput.name = 'produit';
form.appendChild(hiddenProductInput);

// Récupération du nom du produit depuis l'URL (GET param ?produit=...)
const urlParams = new URLSearchParams(window.location.search);
const produitNom = urlParams.get('produit');

// Affichage du nom du produit dans la page et le formulaire
if (produitNom) {
  nomProduitSpan.textContent = produitNom;
  hiddenProductInput.value = produitNom;
}

// Afficher le formulaire quand une méthode de paiement est choisie
methodButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    form.classList.remove('hidden');
    form.scrollIntoView({ behavior: 'smooth' });
  });
});

// Initialisation du champ téléphone avec le drapeau via intl-tel-input
import 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js';

intlTelInput(telInput, {
  initialCountry: 'auto',
  geoIpLookup: function (callback) {
    fetch('https://ipapi.co/json')
      .then((res) => res.json())
      .then((data) => callback(data.country_code))
      .catch(() => callback('CM')); // par défaut Cameroun
},
  utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js',
});
