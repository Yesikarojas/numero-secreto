let numeroSecreto = 0;
let intentos = 0;
let listaNumeros =[];
let maximo = 10

;
function validarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);   
    if(numeroUsuario === numeroSecreto){
        asignarTexto('p',`Acertaste el número en ${intentos}  ${intentos === 1 ? ' intento.' : ' intentos.'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTexto('p','El número secreto es menor');
        }else{
            asignarTexto('p','El número secreto es mayor');
        }
        intentos++;
        limpiar();
    }
    return;
}

function limpiar(){
    document.querySelector('#valorUsuario').value = '';
}
function generarNumero() {
    numeroSecreto = Math.floor(Math.random()*maximo)+1;

    if(listaNumeros.length == maximo){
        asignarTexto('p','Todos los números posibles fueron sorteados.');
    }else{
        if(listaNumeros.includes(numeroSecreto)){
            return generarNumero();
        }else{
            listaNumeros.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

function condicionesIniciales(){
    asignarTexto('h1','Juego del Número Secreto');
    asignarTexto('p', `Digite un número entre 1 y ${maximo}`);
    numeroSecreto = generarNumero();
    intentos = 1;
}

function reiniciarJuego(){
    limpiar();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

condicionesIniciales();