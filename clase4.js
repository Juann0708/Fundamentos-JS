var juan = {
	nombre: 'Juan',
	apellido: 'Cedillo',
	edad: 21

}
function imprimirMayusculas(juan){

	var { nombre } = juan
	console.log(nombre.toUpperCase())
}

imprimirMayusculas(juan)

//Parametros como referencia

function cumpleanos(juan){
	return{
		...juan,
		edad: juan.edad + 1
	}
}

