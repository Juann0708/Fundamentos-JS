class Persona{
	constructor(nombre, apellido, edad, altura){
	this.nombre = nombre
	this.apellido = apellido
	this.edad = edad //20     //Se le puede asignar a todos los objetos un mismo parametro
	this.altura = altura
	}
	saludar(){
		if (this.altura >=1.80){
		console.log(`Hola, me llamo ${this.nombre} y mido ${this.altura}, por lo tanto soy alto`)
	}else{
		console.log(`Hola, me llamo ${this.nombre} y mido ${this.altura} por lo tanto no soy alto`)
		}
	}

}
class Desarrollador extends Persona{     //la palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase
	constructor (nombre, apellido, altura){ //Constructor es un método especial para crear e inicializar un objeto creado a partir de una clase
		super(nombre, apellido, altura)  // No se puede utilizar this hasta que hayamos llamado al constructor de la clase padre, para esto llamamos a "super"
	}
	
	saludar(){
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
	}
}

var juan = new Persona('Juan', 'Cedillo', 21, 1.80)//Se crea un nuevo objeto de acuerdo al prototipo
var erika = new Persona('Erika', 'Luna',20, 1.60)


juan.saludar()