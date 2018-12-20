var juan = {
	nombre: 'Juan',
	apellido: 'Cedillo',
	edad: 21,
	peso: 83


}

console.log(`Al principio del año ${juan.nombre} pesa ${juan.peso} kg`)  //Se muestra en consola cuanto pesa Juan al inicio del año
	
	const aumentarDePeso = juan => juan.peso += .200
	const bajarDePeso = juan => juan.peso -= .200

	for(var i = 1; i < 365; i++) {    //var i es un contador, cuando llegue a 365 se va a dejar de ejecutar, para esto se le va a sumar uno cada iteración hasta llegar a 365
		var random = Math.random() //Esta funcion genera un número aleatorio

		if (random < 0.25 ) {   //Si el numero aleatorio es menor de 0.25, estonces el peso de Juan aumentará
			aumentarDePeso(juan)
		}else if(random < 0.50){ //Si el numero aleatorio es menor que 0.50, pero mayor a 0.25, entonces el peso de Juan decrementará
			bajarDePeso(juan)
		}
}


console.log(`Al final del año ${juan.nombre} pesa ${juan.peso.toFixed(2)} kg`) //Se muestra en consola el peso de Juan al finalizar el año

