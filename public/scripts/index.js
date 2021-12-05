let estado = document.querySelector("#estado").firstChild.textContent.toString();
console.log(estado);

if (estado.includes("incorrectas")) {
  Swal.fire({
    title: 'Credenciales incorrectas',
    icon: 'Error',
    confirmButtonText: 'Continuar',
  })
}

let loginButton = document.querySelector("#loginButton").addEventListener("click", () =>{

  if (iniciar_sesion.checkValidity() == false) {
    event.preventDefault();
    event.stopPropagation();
  }else{
    document.formulario.submit();
  }
})
