let mainHamburguer = document.getElementById('hamburguer');
let menu = document.getElementById('menu');

function mostrarMenu () {
    if (!menu.classList.contains('is-active')) {
        menu.classList.add('is-active') 
    } else {
        menu.classList.remove('is-active') 
    }
}
    
mainHamburguer.addEventListener('click', mostrarMenu)