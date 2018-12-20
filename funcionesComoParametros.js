class Persona{
	constructor(nombre, apellido, altura){
	this.nombre = nombre
	this.apellido = apellido
	this.edad = 20     //Se le puede asignar a todos los objetos un mismo parametro
	this.altura = altura
	}
	saludar(fn){ // recibe como parametro una función opcional
		console.log(`Hola, me llamo ${this.nombre}`)
		 if (fn) {   //si la funcion tiene un valor, se ejecuta el bloque de código
		 	fn(this.nombre, this.apellido, false) //recibe el nombre, apellido, y si es dev
		}
	}
}
class Desarrollador extends Persona{     //la palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase
	constructor (nombre, apellido, altura){ //Constructor es un método especial para crear e inicializar un objeto creado a partir de una clase
		super(nombre, apellido, altura)  // No se puede utilizar this hasta que hayamos llamado al constructor de la clase padre, para esto llamamos a "super"
	}
	
	saludar(fn){
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
	if(fn) {
		 fn(this.nombre, this.apellido, true) //Evalua como verdadero
	
		}
	}
}

function responderSaludo(nombre, apellido, esDev){
	console.log(`Buen día ${nombre} ${apellido}`)
	if(esDev){
		console.log(`No sabía que eres dev`)
	}
}

var juan = new Persona('Juan', 'Cedillo', 1.80)//Se crea un nuevo objeto de acuerdo al prototipo
var erika = new Desarrollador('Erika', 'Luna', 1.60)


juan.saludar(responderSaludo)
erika.saludar(responderSaludo)