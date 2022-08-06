const barraMenu = document.querySelector('.barra-de-menu');
var menuPrincipal = document.querySelector('.cabecalho__menu');
var telas = document.querySelectorAll('.telas')

barraMenu.addEventListener('click', abrirMenu);

function abrirMenu() {
    menuPrincipal.classList.toggle('abrir-menu');    
}

var linkMenu = document.querySelectorAll('.menu-link');

for(var i=0; i<linkMenu.length; i++) {
    linkMenu[i].addEventListener('click', function() {
        // event.preventDefault();

        console.log("Funcinou")

        menuPrincipal.classList.remove('abrir-menu');

        
        animarTelas();
    })
}

function animarTelas() {
    for(var conteudos = 0; conteudos<telas.length; conteudos++) {
        telas[conteudos].classList.add('aparecer');
        
        setTimeout(() => {
            telas[conteudos].classList.remove('aparecer');
        }, 1000);
    }   
}