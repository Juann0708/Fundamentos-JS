var juan = {
	nombre: 'Juan',
	apellido: 'Cedillo',
	edad: 21,
	peso: 83


}

console.log(`Al principio del año ${juan.nombre} pesa ${juan.peso} kg`)  //Se muestra en consola cuanto pesa Juan al inicio del año
	
	const aumentaDePeso = juan => juan.peso += .300   //Aumenta de peso
	const bajaDePeso = juan => juan.peso -= .300  //Baja de peso
	const META = juan.peso - 3        //La meta es el peso actual -3
	var dias = 0         //iniciamos un contador para sabr cuantos dias tuvieron que pasar para que se alcanzara la meta


	const comeMucho = () => Math.random() < 0.3		// el 30% de los dias come mucho		
	const haceDeporte = () => Math.random() <0.4    // el 40% de los dias hace deporte

	while(juan.peso > META ){         //mientras  no se cumpla la condición, el código se ejecutará
		if (comeMucho()) {
			aumentaDePeso(juan)
		}
		if (haceDeporte()) {
			bajaDePeso(juan)
		}
		dias += 1                     //por cada que se ejecute la sentencia, aumentan el numero de días que pasaron
	}

console.log(`Tuvieron que pasar ${dias} dias para que ${juan.nombre}adelgazó 3 kg`) //Se muestra en consola el peso de Juan al finalizar el año