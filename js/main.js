const barraMenu = document.querySelector('.barra-de-menu');
var menuPrincipal = document.querySelector('.cabecalho__menu');

barraMenu.addEventListener('click', abrirMenu);

function abrirMenu() {
    menuPrincipal.classList.toggle('abrir-menu');    
}