const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

if (menu && menuLinks) {
  menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  });

  menuLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      menu.classList.remove('is-active');
      menuLinks.classList.remove('active');
    });
  });
}

const textElement = document.getElementById('text');
const phrases = ['Frontend Developer', 'Web App Developer', 'UI/UX Focused'];

let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (!textElement) return;

    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, characterIndex - 1);
        characterIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, characterIndex + 1);
        characterIndex++;
    }

    let typeSpeed = 150;

    if (isDeleting) {
        typeSpeed /= 2;
    }

    if (!isDeleting && characterIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);