// assets/js/translations.js
let translations = {};

function changeLanguage(lang) {
  // Load the JSON file for the selected language
  fetch(`assets/lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      translations = data;
      updateTranslations();
      // Save the selected language to local storage
      localStorage.setItem('language', lang);
    })
    .catch(error => console.error('Error loading translations:', error));
}

function updateTranslations() {
  // Update all elements with the data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });
}

// Load the saved language on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('language') || 'en';
  changeLanguage(savedLanguage);
});
