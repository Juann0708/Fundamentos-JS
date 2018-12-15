var juan = {
	nombre: 'Juan',
	apellido: 'Cedillo',
	edad: 17,
	licenciado: true,
	streamer: false,
	chef: false,
	jugadorVideojuegos: true
}

function imprimirProfesiones(juan){
	console.log(`${juan.nombre} es:`)

	if(juan.licenciado === true){     //Si Juan es licenciado, mostrará en la consola que es Licenciado
		console.log('Licenciado')
	}
	if (juan.streamer === true) {     //Si Juan es streamer, lo mostrara en la consola, de no ser así, mostrara "no es streamer"
		console.log('streamer')
	}else{
		console.log('no es streamer')

	}

	if (juan.chef === true) {         //Si Juan es chef, lo mostrara en la consola, de no ser así, mostrara "no es chef"
		console.log('chef')
	}else{
		console.log('no es chef')
	}

	if(juan.jugadorVideojuegos === true){
		console.log('Jugador de Videojuegos')
	}

}

imprimirProfesiones(juan)

/*function esMayorDeEdad(juan){
	return juan.edad >= 18
}
*/

const esMayorDeEdad = juan => juan.edad >= 18  //Arrow function

/*function imprimirMayorDeEdad(juan){


		if (esMayorDeEdad(juan)) {
			console.log(`${juan.nombre} es mayor de edad`)
		}else{
			console.log(`${juan.nombre} es menor de edad`)
		}
}

imprimirMayorDeEdad(juan)

*/

const esMenorDeEdad = juan => juan.edad < 18               //Arrow function para mostrar que Juan es menor de edad

function imprimirMenorDeEdad(juan){
	if(esMenorDeEdad(juan)){
		console.log(`${juan.nombre} es menor de edad`)
	}
}

imprimirMenorDeEdad(juan)

