
//Juan Caceres Vega


function validador (){

  let correo =  window.document.querySelector('#correo_id');

  let clave = window.document.querySelector('#passwd_id');

   let usuario   = correo.value;

   let pass      = clave.value;

 console.log('Usuario: ' + usuario + ', Contraseña: '+ pass);
 correo.value = '';

   correo.focus();

   clave.value = '';

   clave.focus();



if (usuario != 'ejemplo@gmail.com' && pass != '123456') {
 console.log('Email y/o contraseña son incorrectos')

     }
else{

 console.log('Iniciando Sesión...')

    }

}

let boton1 = window.document.querySelector('#Boton');
boton1.addEventListener('click',validador);