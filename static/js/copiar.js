function copiarCorreo() {
    var correo = document.getElementById("correo");
    var contenido = correo.textContent || correo.innerText;
  
    // Copiar el contenido al portapapeles
    navigator.clipboard.writeText(contenido);
    alert("correo copiado exitosamente")
  }
  