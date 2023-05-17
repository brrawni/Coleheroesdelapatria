//menu icon

var isMenuOpen = false;
var menuIcon = document.getElementById("menu1");

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');

  if (isMenuOpen) {
    menuIcon.classList.remove('reverse');
    isMenuOpen = false;
  } else {
    menuIcon.classList.remove('animation');
    void menuIcon.offsetWidth; // Reinicia la animación
    menuIcon.classList.add('animation');
    isMenuOpen = true;
  }
}

//ver mas ver menos

let verBtn = document.getElementById('verBtn');
let hideText = document.getElementById('hideText');

verBtn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('show');
    if (hideText.classList.contains('show')) {
        verBtn.innerHTML = 'Ver menos';
    } else {
        verBtn.innerHTML = 'Ver';
    }
}

//baja a historia

function scrollToSection(event, sectionId) {
  event.preventDefault();

  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}






