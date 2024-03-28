const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar-mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
})

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) navbar.classList.add('active');
  else navbar.classList.remove('active');
})