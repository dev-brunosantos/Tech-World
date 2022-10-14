// ABRIR MENU

const menuBarra = document.querySelector('.barra-de-menu');
var linhas =  document.querySelectorAll('.linhas');
const menuPrincipal = document.querySelector('.cabecalho-menu');

menuBarra.addEventListener('click', abrirMenu)

function abrirMenu() {
    linhas[0].classList.toggle('linha1-girar')
    linhas[1].classList.toggle('linha2-girar')
    linhas[2].classList.toggle('linha3-girar')
    menuPrincipal.classList.toggle('abrir-menu')
}
