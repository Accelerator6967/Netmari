/*VARIÁVEIS NEVEBAR*/
const navOpenBt = document.querySelector('[data-menu-open]');
const navCloseBt = document.querySelector('[data-menu-close]');
const navBar = document.querySelector('[data-naveber]');
const overLay = document.querySelector('[data-overlay]');

const nav = [navOpenBt, navCloseBt, overLay];

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener('click', function () {
    navBar.classList.toggle('active');
  });
}
