function heredaDe(prototipoHijo, prototipoPadre){
 var fn = function(){}
 fn.prototype = prototipoPadre.prototype
 prototipoHijo.prototype = new fn
 prototipoHijo.prototype.constructor = prototipoHijo
}


function Persona(nombre, apellido, edad, altura){
	this.nombre = nombre
	this.apellido = apellido
	this.edad = edad //20     //Se le puede asignar a todos los objetos un mismo parametro
	this.altura = altura
}

function Desarrollador(nombre, apellido){
	this.nombre = nombre
	this.apellido = apellido
}

heredaDe(Desarrollador, Persona)


Desarrollador.prototype.saludar = function(){
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

Persona.prototype.saludar = function(){ //Dentro del prototipo va a haber una función "Saludar", y esta va a ser una función
if (this.altura >=1.80){
		console.log(`Hola, me llamo ${this.nombre} y mido ${this.altura}, por lo tanto soy alto`)
	}else{
		console.log(`Hola, me llamo ${this.nombre} y mido ${this.altura} por lo tanto no soy alto`)
	}
}





var juan = new Persona('Juan', 'Cedillo', 21, 1.80)//Se crea un nuevo objeto de acuerdo al prototipo
var erika = new Persona('Erika', 'Luna',20, 1.60)


juan.saludar()