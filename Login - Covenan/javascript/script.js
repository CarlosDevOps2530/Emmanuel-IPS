let password = document.getElementById('pass');
let verCon = document.getElementById('ver');
let username = document.getElementById('user');
let olvidar = document.getElementById('olvidar');
// let enviar = document.getElementById('boton');
// let contraseña = document.getElementById('');

function validarUser () {
}

boton.addEventListener('click', validarUser)



function showpassw () {
    if (password.type == 'password') {
        password.type = 'text'
        verCon.setAttribute('src', './icons/icons8-ojo-cerrado-50.png')
        
        
    } else {
        password.type = 'password'
        verCon.setAttribute('src', './icons/icons8-visible-50.png')     
    }
}

verCon.addEventListener('click', showpassw)