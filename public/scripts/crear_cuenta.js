let estado_usuario = document.querySelector("#estado").firstChild.textContent.toString(); // Extrae el contenido de p que contiene el estado

let crear = document.querySelector("#crear").addEventListener("click", () => { // El boton activa la función
  
  //Usuario
  let usuario = document.querySelector("#usuario").value;

  //Verifica si el formulario está lleno.
  if (crear_cuenta.checkValidity() == false) {
    event.preventDefault();
    event.stopPropagation();
  }else{
    //verificar estado de usuario
      if (estado_usuario.includes(usuario)) {
        console.log("existe")
        Swal.fire({
          title: 'Error',
          text: 'El usuario ya existe, intenta con uno nuevo.',
          icon: 'error',
          confirmButtonText: 'Continuar',        
        })
      }else{
        console.log("disponible")
        Swal.fire({
          title: '¡Bien!',
          text: 'Ahora inicia sesión con tu nueva cuenta.',
          icon: 'success',
          confirmButtonText: 'Continuar',
        }).then((result) =>{
          if (result.isConfirmed) {
            document.formulario.submit();
          }
        })
      }
  }
});
