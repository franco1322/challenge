const textAreaMessage = document.getElementById("text-message");
const textAreaCrypted = document.getElementById("text-crypted");
const emptyAlert = document.querySelector(".empty-alert");
var clave = 3; 



function encriptar() {
  mensaje = document.getElementById("text-message").value;
  var  mensajeEncriptado= "";
  
 
    for (var i = 0; i < mensaje.length; i++) {
      // Obtener el código ASCII del caracter actual
      var codigo = mensaje.charCodeAt(i);
  
      // Aplicar la clave al código ASCII y obtener el nuevo caracter cifrado
      var cifrado = String.fromCharCode(codigo + clave);
  
      // Agregar el nuevo caracter cifrado al resultado
      mensajeEncriptado += cifrado;
    }
    emptyAlert.style.display = "none";
    textAreaCrypted.value = mensajeEncriptado;
    textAreaMessage.value = "";
    // Devolver el texto cifrado
    return mensajeEncriptado;
  }

function desencriptar() {
  mensaje = document.getElementById("text-message").value;
  var  mensajeDesencriptado= "";

  for (var i = 0; i < mensaje.length; i++) {
    var codigo = mensaje.charCodeAt(i);
    var descifrado = String.fromCharCode(codigo - clave);
    mensajeDesencriptado += descifrado;

    }
    textAreaCrypted.value = mensajeDesencriptado;
    textAreaMessage.value = "";
    emptyAlert.style.display = "none";
  } 

function borrar()  {
 
  textAreaMessage.value = "";
  textAreaCrypted.value = "";
  emptyAlert.style.display = "flex";
};

function copiar() {
  mensaje ="";
  mensaje = textAreaCrypted.value;
  navigator.clipboard.writeText(mensaje);
  textAreaMessage.value = mensaje;
  textAreaCrypted.value = "";
  emptyAlert.style.display = "flex";

  };