let hamburguer = document.getElementById('hamburguer');
let lista = document.querySelector('.menu')

// window.addEventListener('load', function () {
//     lista.classList.remove('is-active')
// });

function MostrarMenu () {
    if (lista.classList.contains('is-active') == false) {
        lista.classList.add('is-active')
    } else {
        lista.classList.remove('is-active')
    }

}

hamburguer.addEventListener('click', MostrarMenu)