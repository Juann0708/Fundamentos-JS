// console.log('Hola mundo JS') Imprime texto en la consola

/*var nombre*/       //Se declara una variable

/*nombre = 'Juan'*/    //Se le da un valor a la variable

var nombre = 'Juan'
var apellido = 'Cedillo'

console.log('Hola ' + nombre + ' ' + apellido).  //Se concatena

var edad = 21

edad = '21 años'

console.log('tengo' + edad)

var nombreEnMayusculas = nombre.toUpperCase()               //.toUpperCase convierte los caracteres a mayuscula
var apellidoEnMinusculas = apellido.toLowerCase()			//toLowerCase convierte los caracteres a minuscula
var primeraLetra = nombre.charAt(1)							//Encuentra el caracter que se encuentra en la posición 1
var cuentaCaracteres = nombre.length						//Identifica la longitud de un string
var nombreCompleto = `${nombre.toUpperCase()} ${apellido}`	//Se interpola la variable

var str = nombre.substr(1,2)

