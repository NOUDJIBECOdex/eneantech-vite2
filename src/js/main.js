import '../assets/styles/main.css';


import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialisation
AOS.init();



// Script JS principal (menu mobile par exemple)
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector("#menu-toggle");
  const navMenu = document.querySelector("#mobile-menu");

  toggleBtn?.addEventListener("click", () => {
    navMenu?.classList.toggle("hidden");
  });
});



  const scrollBtn = document.getElementById('scrollToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove('hidden');
    } else {
      scrollBtn.classList.add('hidden');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


const form = document.getElementById('devis-form');
  const successMsg = document.getElementById('success-message');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      form.reset();
      successMsg.classList.remove('hidden');
    }
  });
