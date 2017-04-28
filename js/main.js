//VALIDACIÓN DE CONTRASEÑAS
window.addEventListener('load', function(){
  var contraseña             = document.getElementById("contraseña").value;
  var confirmacionContraseña = document.getElementById("confirmacionContraseña").value;

    if(contraseña !== confirmacionContraseña){
      confirmacionContraseña.setCustomValidity("Verificar la misma contraseña");
      }
    else{
          confirmacionContraseña.setCustomValidity('');
        }

});
