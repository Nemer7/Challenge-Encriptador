const textareas = document.querySelectorAll('.text-area');
const mensaje = document.querySelector('.mensaje');
const boton = document.querySelectorAll('.btn-copiar');

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function validarTexto() {
  let textoEscrito = document.querySelector(".text-area").value;
  let validador = /^[a-zA-Z\s]*$/;

  if (!validador.test(textoEscrito)) {
    alert("Solo se permiten letras minúsculas sin caracteres especiales");
    location.reload();
    return true;
  }
}


function btnEncriptar() {
    if(!validarTexto()) {
    const textoEncriptdo = encriptar(textareas[0].value);
    mensaje.value = textoEncriptdo;
    textareas[0].value = '';
    mensaje.style.backgroundImage = "none";
    boton[0].style.display = "block";
    }
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if( stringEncriptado.includes(matrizCodigo[i][0]) ){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
        
    }
    return stringEncriptado;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textareas[0].value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    textareas[0].value = '';
}

function desencriptar(stringDesncriptado) {
    let matrizCodigo = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    stringDesncriptado = stringDesncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if( stringDesncriptado.includes(matrizCodigo[i][1]) ){
            stringDesncriptado = stringDesncriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
        
    }
    return stringDesncriptado;
}

function btnCopiar() {
    mensaje.select();
    document.execCommand("copy");
    mensaje.value = '';
    mensaje.style.backgroundImage = 'url(imagenes/Muñeco.png)';
}



